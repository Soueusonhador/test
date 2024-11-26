const { Pool } = require("pg");
const { env } = require("./env");
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const db = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

db.connect()
  .then((client) => {
    console.log('Database connected successfully');
    client.release(); 
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });
 const sqlFilePathTwo = path.join(__dirname, "../sql/tables.sql");
const sqlFilePath = path.join(__dirname, "../sql/seed-db.sql");



// (async () => {
//   try {
    
//     const sql = fs.readFileSync(sqlFilePath, "utf-8");

//     // const sqlTwo = fs.readFileSync(sqlFilePathTwo, "utf-8")

    
//     await db.query(sql);
//     // await db.query(sqlTwo)


//     console.log("SQL script executado com sucesso!");
//   } catch (error) {
//     console.error("Error:", error.message);
//   } finally {
//     db.end(); 
//   }
// })();

module.exports = { db };