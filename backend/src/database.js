/* eslint-disable no-console */
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

conn.connect((error) => {
  if (error) {
    console.error('DB error: ', error.sqlMessage);
    return;
  }
  console.log('DB connection is good');
});

const dbQuery = (query, params) => new Promise((resolve, reject) => {
  conn.query(query, params, (error, result) => {
    if (error) {
      console.log('DB error: ', error.sqlMessage);
      reject({ error: error.sqlMessage });
      return;
    }
    resolve(result);
  });
});

export default dbQuery;
