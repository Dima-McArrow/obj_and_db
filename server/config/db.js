const dotenv = require("dotenv");
const mySql = require("mysql2");

dotenv.config();

const pool = mySql.createPool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise();

async function testConnection() {
  try {
    const [rows, fields] = await promisePool.query("SELECT 1 + 1 AS solution");
    console.log("Connection to database successful: ", rows[0].solution === 2);
  } catch (err) {
    console.error("Error connecting to database: ", err);
  }
}

testConnection();

module.exports = promisePool;
