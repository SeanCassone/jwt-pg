const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "67camar0",
  host: "localhost",
  port: 5432,
  database: "jwt_auth",
});

module.exports = pool;
