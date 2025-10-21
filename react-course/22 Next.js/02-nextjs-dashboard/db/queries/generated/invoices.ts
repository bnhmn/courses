/** Types generated for queries found in "db/queries/invoices.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

export type NumberOrString = number | string;

/** 'FindAllInvoicesByAmount' parameters type */
export interface IFindAllInvoicesByAmountParams {
  amount: number;
}

/** 'FindAllInvoicesByAmount' return type */
export interface IFindAllInvoicesByAmountResult {
  amount: number;
  email: string;
  id: string;
  image_url: string;
  name: string;
}

/** 'FindAllInvoicesByAmount' query type */
export interface IFindAllInvoicesByAmountQuery {
  params: IFindAllInvoicesByAmountParams;
  result: IFindAllInvoicesByAmountResult;
}

const findAllInvoicesByAmountIR: any = {"usedParamSet":{"amount":true},"params":[{"name":"amount","required":true,"transform":{"type":"scalar"},"locs":[{"a":211,"b":219}]}],"statement":"SELECT invoice.id,\n    invoice.amount,\n    customer.name,\n    customer.email,\n    customer.image_url\nFROM invoices invoice\n    JOIN customers customer ON invoice.customer_id = customer.id\nWHERE invoice.amount = :amount !"};

/**
 * Query generated from SQL:
 * ```
 * SELECT invoice.id,
 *     invoice.amount,
 *     customer.name,
 *     customer.email,
 *     customer.image_url
 * FROM invoices invoice
 *     JOIN customers customer ON invoice.customer_id = customer.id
 * WHERE invoice.amount = :amount !
 * ```
 */
export const findAllInvoicesByAmount = new PreparedQuery<IFindAllInvoicesByAmountParams,IFindAllInvoicesByAmountResult>(findAllInvoicesByAmountIR);


/** 'FindLatestInvoices' parameters type */
export type IFindLatestInvoicesParams = void;

/** 'FindLatestInvoices' return type */
export interface IFindLatestInvoicesResult {
  amount: number;
  email: string;
  id: string;
  image_url: string;
  name: string;
}

/** 'FindLatestInvoices' query type */
export interface IFindLatestInvoicesQuery {
  params: IFindLatestInvoicesParams;
  result: IFindLatestInvoicesResult;
}

const findLatestInvoicesIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT invoice.id,\n    invoice.amount,\n    customer.name,\n    customer.email,\n    customer.image_url\nFROM invoices invoice\n    JOIN customers customer ON invoice.customer_id = customer.id\nORDER BY invoice.date DESC\nLIMIT 5"};

/**
 * Query generated from SQL:
 * ```
 * SELECT invoice.id,
 *     invoice.amount,
 *     customer.name,
 *     customer.email,
 *     customer.image_url
 * FROM invoices invoice
 *     JOIN customers customer ON invoice.customer_id = customer.id
 * ORDER BY invoice.date DESC
 * LIMIT 5
 * ```
 */
export const findLatestInvoices = new PreparedQuery<IFindLatestInvoicesParams,IFindLatestInvoicesResult>(findLatestInvoicesIR);


/** 'FindInvoiceStats' parameters type */
export type IFindInvoiceStatsParams = void;

/** 'FindInvoiceStats' return type */
export interface IFindInvoiceStatsResult {
  numCustomers: number;
  numInvoices: number;
  paidAmount: number;
  pendingAmount: number;
}

/** 'FindInvoiceStats' query type */
export interface IFindInvoiceStatsQuery {
  params: IFindInvoiceStatsParams;
  result: IFindInvoiceStatsResult;
}

const findInvoiceStatsIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT (\n        SELECT COUNT(*)::int\n        FROM customers\n    ) AS \"numCustomers!\",\n    COUNT(*)::int AS \"numInvoices!\",\n    SUM(\n        CASE\n            WHEN status = 'paid' THEN amount\n            ELSE 0\n        END\n    )::int AS \"paidAmount!\",\n    SUM(\n        CASE\n            WHEN status = 'pending' THEN amount\n            ELSE 0\n        END\n    )::int AS \"pendingAmount!\"\nFROM invoices"};

/**
 * Query generated from SQL:
 * ```
 * SELECT (
 *         SELECT COUNT(*)::int
 *         FROM customers
 *     ) AS "numCustomers!",
 *     COUNT(*)::int AS "numInvoices!",
 *     SUM(
 *         CASE
 *             WHEN status = 'paid' THEN amount
 *             ELSE 0
 *         END
 *     )::int AS "paidAmount!",
 *     SUM(
 *         CASE
 *             WHEN status = 'pending' THEN amount
 *             ELSE 0
 *         END
 *     )::int AS "pendingAmount!"
 * FROM invoices
 * ```
 */
export const findInvoiceStats = new PreparedQuery<IFindInvoiceStatsParams,IFindInvoiceStatsResult>(findInvoiceStatsIR);


/** 'SearchInvoices' parameters type */
export interface ISearchInvoicesParams {
  limit?: NumberOrString | null | void;
  offset?: NumberOrString | null | void;
  query?: string | null | void;
}

/** 'SearchInvoices' return type */
export interface ISearchInvoicesResult {
  amount: number;
  customer_id: string;
  date: Date;
  email: string;
  id: string;
  image_url: string;
  name: string;
  status: string;
}

/** 'SearchInvoices' query type */
export interface ISearchInvoicesQuery {
  params: ISearchInvoicesParams;
  result: ISearchInvoicesResult;
}

const searchInvoicesIR: any = {"usedParamSet":{"query":true,"limit":true,"offset":true},"params":[{"name":"query","required":false,"transform":{"type":"scalar"},"locs":[{"a":278,"b":283},{"a":328,"b":333},{"a":384,"b":389},{"a":438,"b":443},{"a":488,"b":493}]},{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":536,"b":541}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":550,"b":556}]}],"statement":"SELECT invoices.id,\n    invoices.customer_id,\n    invoices.amount,\n    invoices.date,\n    invoices.status,\n    customers.name,\n    customers.email,\n    customers.image_url\nFROM invoices\n    JOIN customers ON invoices.customer_id = customers.id\nWHERE customers.name ILIKE '%' || :query || '%'\n    OR customers.email ILIKE '%' || :query || '%'\n    OR invoices.amount::text ILIKE '%' || :query || '%'\n    OR invoices.date::text ILIKE '%' || :query || '%'\n    OR invoices.status ILIKE '%' || :query || '%'\nORDER BY invoices.date DESC\nLIMIT :limit OFFSET :offset"};

/**
 * Query generated from SQL:
 * ```
 * SELECT invoices.id,
 *     invoices.customer_id,
 *     invoices.amount,
 *     invoices.date,
 *     invoices.status,
 *     customers.name,
 *     customers.email,
 *     customers.image_url
 * FROM invoices
 *     JOIN customers ON invoices.customer_id = customers.id
 * WHERE customers.name ILIKE '%' || :query || '%'
 *     OR customers.email ILIKE '%' || :query || '%'
 *     OR invoices.amount::text ILIKE '%' || :query || '%'
 *     OR invoices.date::text ILIKE '%' || :query || '%'
 *     OR invoices.status ILIKE '%' || :query || '%'
 * ORDER BY invoices.date DESC
 * LIMIT :limit OFFSET :offset
 * ```
 */
export const searchInvoices = new PreparedQuery<ISearchInvoicesParams,ISearchInvoicesResult>(searchInvoicesIR);


/** 'CountInvoices' parameters type */
export interface ICountInvoicesParams {
  query?: string | null | void;
}

/** 'CountInvoices' return type */
export interface ICountInvoicesResult {
  count: string | null;
}

/** 'CountInvoices' query type */
export interface ICountInvoicesQuery {
  params: ICountInvoicesParams;
  result: ICountInvoicesResult;
}

const countInvoicesIR: any = {"usedParamSet":{"query":true},"params":[{"name":"query","required":false,"transform":{"type":"scalar"},"locs":[{"a":122,"b":127},{"a":172,"b":177},{"a":228,"b":233},{"a":282,"b":287},{"a":332,"b":337}]}],"statement":"SELECT COUNT(*)\nFROM invoices\n    JOIN customers ON invoices.customer_id = customers.id\nWHERE customers.name ILIKE '%' || :query || '%'\n    OR customers.email ILIKE '%' || :query || '%'\n    OR invoices.amount::text ILIKE '%' || :query || '%'\n    OR invoices.date::text ILIKE '%' || :query || '%'\n    OR invoices.status ILIKE '%' || :query || '%'"};

/**
 * Query generated from SQL:
 * ```
 * SELECT COUNT(*)
 * FROM invoices
 *     JOIN customers ON invoices.customer_id = customers.id
 * WHERE customers.name ILIKE '%' || :query || '%'
 *     OR customers.email ILIKE '%' || :query || '%'
 *     OR invoices.amount::text ILIKE '%' || :query || '%'
 *     OR invoices.date::text ILIKE '%' || :query || '%'
 *     OR invoices.status ILIKE '%' || :query || '%'
 * ```
 */
export const countInvoices = new PreparedQuery<ICountInvoicesParams,ICountInvoicesResult>(countInvoicesIR);


/** 'FindInvoiceById' parameters type */
export interface IFindInvoiceByIdParams {
  id: string;
}

/** 'FindInvoiceById' return type */
export interface IFindInvoiceByIdResult {
  amount: number;
  customer_id: string;
  id: string;
  status: string;
}

/** 'FindInvoiceById' query type */
export interface IFindInvoiceByIdQuery {
  params: IFindInvoiceByIdParams;
  result: IFindInvoiceByIdResult;
}

const findInvoiceByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":121,"b":125}]}],"statement":"SELECT invoices.id,\n    invoices.customer_id,\n    invoices.amount,\n    invoices.status\nFROM invoices\nWHERE invoices.id = :id !"};

/**
 * Query generated from SQL:
 * ```
 * SELECT invoices.id,
 *     invoices.customer_id,
 *     invoices.amount,
 *     invoices.status
 * FROM invoices
 * WHERE invoices.id = :id !
 * ```
 */
export const findInvoiceById = new PreparedQuery<IFindInvoiceByIdParams,IFindInvoiceByIdResult>(findInvoiceByIdIR);


/** 'CreateInvoice' parameters type */
export interface ICreateInvoiceParams {
  amount_in_cents: number;
  customer_id: string;
  date: DateOrString;
  status: string;
}

/** 'CreateInvoice' return type */
export type ICreateInvoiceResult = void;

/** 'CreateInvoice' query type */
export interface ICreateInvoiceQuery {
  params: ICreateInvoiceParams;
  result: ICreateInvoiceResult;
}

const createInvoiceIR: any = {"usedParamSet":{"customer_id":true,"amount_in_cents":true,"status":true,"date":true},"params":[{"name":"customer_id","required":true,"transform":{"type":"scalar"},"locs":[{"a":74,"b":87}]},{"name":"amount_in_cents","required":true,"transform":{"type":"scalar"},"locs":[{"a":98,"b":115}]},{"name":"status","required":true,"transform":{"type":"scalar"},"locs":[{"a":126,"b":134}]},{"name":"date","required":true,"transform":{"type":"scalar"},"locs":[{"a":145,"b":151}]}],"statement":"INSERT INTO invoices (customer_id, amount, status, date)\nVALUES (\n        :customer_id !,\n        :amount_in_cents !,\n        :status !,\n        :date !\n    )"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO invoices (customer_id, amount, status, date)
 * VALUES (
 *         :customer_id !,
 *         :amount_in_cents !,
 *         :status !,
 *         :date !
 *     )
 * ```
 */
export const createInvoice = new PreparedQuery<ICreateInvoiceParams,ICreateInvoiceResult>(createInvoiceIR);


/** 'UpdateInvoice' parameters type */
export interface IUpdateInvoiceParams {
  amount_in_cents: number;
  customer_id: string;
  id: string;
  status: string;
}

/** 'UpdateInvoice' return type */
export type IUpdateInvoiceResult = void;

/** 'UpdateInvoice' query type */
export interface IUpdateInvoiceQuery {
  params: IUpdateInvoiceParams;
  result: IUpdateInvoiceResult;
}

const updateInvoiceIR: any = {"usedParamSet":{"customer_id":true,"amount_in_cents":true,"status":true,"id":true},"params":[{"name":"customer_id","required":true,"transform":{"type":"scalar"},"locs":[{"a":34,"b":47}]},{"name":"amount_in_cents","required":true,"transform":{"type":"scalar"},"locs":[{"a":63,"b":80}]},{"name":"status","required":true,"transform":{"type":"scalar"},"locs":[{"a":96,"b":104}]},{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":117,"b":121}]}],"statement":"UPDATE invoices\nSET customer_id = :customer_id !,\n    amount = :amount_in_cents !,\n    status = :status !\nWHERE id = :id !"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE invoices
 * SET customer_id = :customer_id !,
 *     amount = :amount_in_cents !,
 *     status = :status !
 * WHERE id = :id !
 * ```
 */
export const updateInvoice = new PreparedQuery<IUpdateInvoiceParams,IUpdateInvoiceResult>(updateInvoiceIR);


/** 'DeleteInvoice' parameters type */
export interface IDeleteInvoiceParams {
  id: string;
}

/** 'DeleteInvoice' return type */
export type IDeleteInvoiceResult = void;

/** 'DeleteInvoice' query type */
export interface IDeleteInvoiceQuery {
  params: IDeleteInvoiceParams;
  result: IDeleteInvoiceResult;
}

const deleteInvoiceIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":32,"b":36}]}],"statement":"DELETE FROM invoices\nWHERE id = :id !"};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM invoices
 * WHERE id = :id !
 * ```
 */
export const deleteInvoice = new PreparedQuery<IDeleteInvoiceParams,IDeleteInvoiceResult>(deleteInvoiceIR);


