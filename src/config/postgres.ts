import { Pool } from "pg"
import { env } from "./env";

export const pool = new Pool({
    host: env.PG_HOST,
    user: env.PG_USER,
    password: env.PG_PASSWORD,
    database: env.PG_DATABASE,
    port: env.PG_PORT
})

pool.on("error", (err: Error) => {
    console.log(`postgresSQL connection error: ${err.message}`);
})

pool.connect().then(() => {
    console.log("Connected to postgresSQL");
})