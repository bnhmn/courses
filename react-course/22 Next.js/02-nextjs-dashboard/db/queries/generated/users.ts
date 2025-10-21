/** Types generated for queries found in "db/queries/users.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'FindUserByEmail' parameters type */
export interface IFindUserByEmailParams {
  email: string;
}

/** 'FindUserByEmail' return type */
export interface IFindUserByEmailResult {
  email: string;
  id: string;
  name: string;
  password: string;
}

/** 'FindUserByEmail' query type */
export interface IFindUserByEmailQuery {
  params: IFindUserByEmailParams;
  result: IFindUserByEmailResult;
}

const findUserByEmailIR: any = {"usedParamSet":{"email":true},"params":[{"name":"email","required":true,"transform":{"type":"scalar"},"locs":[{"a":34,"b":41}]}],"statement":"SELECT *\nFROM users\nWHERE email = :email !"};

/**
 * Query generated from SQL:
 * ```
 * SELECT *
 * FROM users
 * WHERE email = :email !
 * ```
 */
export const findUserByEmail = new PreparedQuery<IFindUserByEmailParams,IFindUserByEmailResult>(findUserByEmailIR);


