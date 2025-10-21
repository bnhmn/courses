/** Types generated for queries found in "db/queries/customers.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'FindAllCustomers' parameters type */
export type IFindAllCustomersParams = void;

/** 'FindAllCustomers' return type */
export interface IFindAllCustomersResult {
  id: string;
  name: string;
}

/** 'FindAllCustomers' query type */
export interface IFindAllCustomersQuery {
  params: IFindAllCustomersParams;
  result: IFindAllCustomersResult;
}

const findAllCustomersIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT id,\n    name\nFROM customers\nORDER BY name ASC"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id,
 *     name
 * FROM customers
 * ORDER BY name ASC
 * ```
 */
export const findAllCustomers = new PreparedQuery<IFindAllCustomersParams,IFindAllCustomersResult>(findAllCustomersIR);


/** 'SearchCustomers' parameters type */
export interface ISearchCustomersParams {
  query?: string | null | void;
}

/** 'SearchCustomers' return type */
export interface ISearchCustomersResult {
  email: string;
  id: string;
  image_url: string;
  name: string;
  total_invoices: number;
  total_paid: number;
  total_pending: number;
}

/** 'SearchCustomers' query type */
export interface ISearchCustomersQuery {
  params: ISearchCustomersParams;
  result: ISearchCustomersResult;
}

const searchCustomersIR: any = {"usedParamSet":{"query":true},"params":[{"name":"query","required":false,"transform":{"type":"scalar"},"locs":[{"a":548,"b":553},{"a":597,"b":602}]}],"statement":"SELECT customer.id,\n    customer.name,\n    customer.email,\n    customer.image_url,\n    COUNT(invoice.id)::int AS \"total_invoices!\",\n    SUM(\n        CASE\n            WHEN invoice.status = 'pending' THEN invoice.amount\n            ELSE 0\n        END\n    )::int AS \"total_pending!\",\n    SUM(\n        CASE\n            WHEN invoice.status = 'paid' THEN invoice.amount\n            ELSE 0\n        END\n    )::int AS \"total_paid!\"\nFROM customers customer\n    LEFT JOIN invoices invoice ON customer.id = invoice.customer_id\nWHERE customer.name ILIKE '%' || :query || '%'\n    OR customer.email ILIKE '%' || :query || '%'\nGROUP BY customer.id,\n    customer.name,\n    customer.email,\n    customer.image_url\nORDER BY customer.name ASC"};

/**
 * Query generated from SQL:
 * ```
 * SELECT customer.id,
 *     customer.name,
 *     customer.email,
 *     customer.image_url,
 *     COUNT(invoice.id)::int AS "total_invoices!",
 *     SUM(
 *         CASE
 *             WHEN invoice.status = 'pending' THEN invoice.amount
 *             ELSE 0
 *         END
 *     )::int AS "total_pending!",
 *     SUM(
 *         CASE
 *             WHEN invoice.status = 'paid' THEN invoice.amount
 *             ELSE 0
 *         END
 *     )::int AS "total_paid!"
 * FROM customers customer
 *     LEFT JOIN invoices invoice ON customer.id = invoice.customer_id
 * WHERE customer.name ILIKE '%' || :query || '%'
 *     OR customer.email ILIKE '%' || :query || '%'
 * GROUP BY customer.id,
 *     customer.name,
 *     customer.email,
 *     customer.image_url
 * ORDER BY customer.name ASC
 * ```
 */
export const searchCustomers = new PreparedQuery<ISearchCustomersParams,ISearchCustomersResult>(searchCustomersIR);


