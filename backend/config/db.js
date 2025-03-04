import pg from 'pg';
import 'dotenv/config'
const { Pool } = pg;

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const config = {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    allowExitOnIdle: true
}


export const pool = new Pool(config)

try {
    await pool.query("select now()")
    console.log('Database connected')
} catch (error) {
    console.log(error.message)
}