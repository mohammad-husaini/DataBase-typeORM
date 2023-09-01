import express from "express";
import { DataSource } from "typeorm";
import { User } from "./db/entities/User.js";
import userRouter from "./routers/user.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "registration",
    entities: [User],
    logging: true,
    synchronize: true
});
app.use('/user', userRouter);
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
