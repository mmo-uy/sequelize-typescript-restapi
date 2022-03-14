// @/connection.ts
import { Sequelize } from "sequelize-typescript";

import { Dog } from "./models";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "root",
  database: "pets",
  logging: false,
  models: [Dog],
});

export default connection;
