import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "portfoliodb-do-user-14544783-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "AVNS_3OkZakYxe5kWh0AN7fi",
  port: 25060,
  database: "defaultdb",
  // host: "localhost",
  // user: "root",
  // password: "Ambassadors22!",
  // port: 3306,
  // database: "customersdb",
});
