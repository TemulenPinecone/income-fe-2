import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log("get request");
    const client = await pool.connect();
    const Query = `CREATE TABLE users (id VARCHAR(255), name VARCHAR(255), email VARCHAR(255), age INT)`;
    try {
      client.query(Query);
      res.status(200).send({ message: "get success" });
    } catch (e) {
      console.log(e);
    } finally {
      client.release();
    }
  }
  if (req.method === "POST") {
    console.log("post request");
    res.status(200).send({ message: "pos success" });
  }
}
