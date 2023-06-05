import mysql from "mysql";
//root password: Mahmoud123

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mahmoud123",
  database: "blog",
});
