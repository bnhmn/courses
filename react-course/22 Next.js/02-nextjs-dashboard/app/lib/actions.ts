// By adding the 'use server', you mark all the exported functions within the file as Server Actions.
// These server functions can then be imported and used in Client and Server components. Any functions
// included in this file that are not used will be automatically removed from the final application bundle.
// https://react.dev/reference/rsc/use-server
'use server';

import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { signIn } from '@/auth';
import { pool } from '@/db';
import * as invoiceRepository from '@/db/queries/generated/invoices';

const Invoice = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const InvoiceUpdate = z.object({
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
});

// Behind the scenes, Server Actions create a POST API endpoint. This is why you don't need to create API
// endpoints manually when using Server Actions.
export async function createInvoice(formData: FormData) {
  const request = InvoiceUpdate.parse(Object.fromEntries(formData));

  // Create the new invoice
  await invoiceRepository.createInvoice.run(
    {
      customer_id: request.customerId,
      amount_in_cents: request.amount * 100,
      status: request.status,
      date: new Date().toISOString().split('T')[0],
    },
    pool,
  );

  // Invalidate the cached invoice data
  revalidatePath('/dashboard/invoices');

  // Redirect the user back to the invoices overview
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const request = InvoiceUpdate.parse(Object.fromEntries(formData));

  await invoiceRepository.updateInvoice.run(
    {
      id,
      customer_id: request.customerId,
      amount_in_cents: request.amount,
      status: request.status,
    },
    pool,
  );

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  throw Error('Could not delete invoice (this is a dummy error)!');

  await invoiceRepository.deleteInvoice.run({ id }, pool);

  // Since this action is being called in the /dashboard/invoices path, you don't need to call redirect.
  // Calling revalidatePath will trigger a new server request and re-render the table.
  revalidatePath('/dashboard/invoices');
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
