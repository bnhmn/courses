/** Types generated for queries found in "db/queries/revenue.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'FindRevenue' parameters type */
export type IFindRevenueParams = void;

/** 'FindRevenue' return type */
export interface IFindRevenueResult {
  month: string;
  revenue: number;
}

/** 'FindRevenue' query type */
export interface IFindRevenueQuery {
  params: IFindRevenueParams;
  result: IFindRevenueResult;
}

const findRevenueIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT month,\n    revenue\nFROM revenue"};

/**
 * Query generated from SQL:
 * ```
 * SELECT month,
 *     revenue
 * FROM revenue
 * ```
 */
export const findRevenue = new PreparedQuery<IFindRevenueParams,IFindRevenueResult>(findRevenueIR);


