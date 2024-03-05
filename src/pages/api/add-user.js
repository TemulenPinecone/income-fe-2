import { Pool } from "pg";
import { nanoid } from "nanoid";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const newuser = req.body;
    console.log(newuser);
    res.status(200).send({ message: "success" });
    const client = await pool.connect();
    const Query = `INSERT INTO users (id, name, email, age) VALUES ('${nanoid()}','${
      newuser.name
    }','${newuser.email}','${newuser.age}')`;
    try {
      client.query(Query);
      res.status(200).send({ message: "get success" });
    } catch (e) {
      console.log(e);
    } finally {
      client.release();
    }
  }
}
