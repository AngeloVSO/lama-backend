import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export default class Database {

  protected static connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      port: Number(process.env.DB_PORT),
      multipleStatements: true,
    },
  });
}
