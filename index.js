import express from "express";
import { DataSource } from "typeorm";
const app = express();
const PORT = process.env.PORT || 3000;

const dataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "registration",
  entities: [],
  logging: true,
});
app.get("/", (req, res) => {
  res.status(200).send("Welcome lovlly");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  dataSource
    .initialize()
    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});
