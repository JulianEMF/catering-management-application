require('dotenv').config();

const { Pool } = require('pg');

// const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
    // connectionString: isProduction ? process.env.DATABASE_URL : connectionString
    user: "lrjdglgmhogehb",
    password: "5155660ea6a984d1a3e318593382ecf767dd84393f94badb2a4bec6a686aaa12",
    host: "ec2-18-235-192-50.compute-1.amazonaws.com",
    port: 5432,
    database: "d7ifdc4sa5neqb",
    multipleStatements:true,
    ssl: {
        rejectUnauthorized: false
      }
});

module.exports = { pool };