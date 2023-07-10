import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

let config = JSON.parse(process.env.MY_CONFIG);

const con = mysql.createPool({
host: config.host,
user: config.user,
password: config.password,
database: config.database,
port: config.port,
});

export default con