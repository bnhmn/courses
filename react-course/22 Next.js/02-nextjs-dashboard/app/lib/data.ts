import { pool } from '@/db';
import * as customerRepository from '@/db/queries/generated/customers';
import * as invoiceRepository from '@/db/queries/generated/invoices';
import * as revenueRepository from '@/db/queries/generated/revenue';
import * as userRepository from '@/db/queries/generated/users';

export async function fetchRevenue() {
  // Simulate a slow database query
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await revenueRepository.findRevenue.run(undefined, pool);
}

export async function fetchLatestInvoices() {
  // Simulate a slow database query
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return await invoiceRepository.findLatestInvoices.run(undefined, pool);
}

export async function fetchInvoiceStats() {
  return await invoiceRepository.findInvoiceStats.run(undefined, pool).then((result) => result[0]);
}

export async function searchInvoices(query: string, page: number, pageSize = 6) {
  return await invoiceRepository.searchInvoices.run(
    {
      query,
      limit: pageSize,
      offset: (page - 1) * pageSize,
    },
    pool,
  );
}

export async function countInvoicePages(query: string, pageSize = 6): Promise<number> {
  return await invoiceRepository.countInvoices.run({ query }, pool).then((result) => {
    const numInvoices = Number(result[0].count);
    return Math.ceil(numInvoices / pageSize);
  });
}

export async function fetchInvoiceById(id: string) {
  return await invoiceRepository.findInvoiceById.run({ id }, pool).then((result) => result[0]);
}

export async function fetchCustomers() {
  return await customerRepository.findAllCustomers.run(undefined, pool);
}

export async function searchCustomers(query: string) {
  return await customerRepository.searchCustomers.run({ query }, pool);
}

export async function findUserByEmail(email: string): Promise<userRepository.IFindUserByEmailResult | undefined> {
  return await userRepository.findUserByEmail.run({ email }, pool).then((result) => result[0]);
}
