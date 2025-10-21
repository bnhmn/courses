import { findAllInvoicesByAmount } from '@/db/queries/generated/invoices';

import { pool } from '../../db/index';

async function listInvoices() {
  return await findAllInvoicesByAmount.run({ amount: 666 }, pool);
}

export async function GET() {
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
