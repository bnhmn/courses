import { Client, Pool } from 'pg';

import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

export const client = new Client(process.env.DATABASE_URL!);

export const pool = new Pool({
  // See https://node-postgres.com/apis/pool
  connectionString: process.env.DATABASE_URL!,
});
