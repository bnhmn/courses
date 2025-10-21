import { notFound } from 'next/navigation';

import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';
import { pool } from '@/db';
import { findAllCustomers } from '@/db/queries/generated/customers';
import { findInvoiceById } from '@/db/queries/generated/invoices';

// Next.js allows you to create Dynamic Route Segments when you don't know the exact segment name and want to
// create routes based on data. This could be blog post titles, product pages, etc. You can create dynamic
// route segments by wrapping a folder's name in square brackets. For example, [id], [post] or [slug].

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const invoice = await findInvoiceById.run({ id }, pool).then((result) => result[0]);
  const customers = await findAllCustomers.run(undefined, pool);

  if (!invoice) {
    // Show the not-found.tsx page
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
