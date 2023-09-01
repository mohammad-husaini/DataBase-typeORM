import express from 'express';
import { User } from '../db/entities/User.js';

export const inserteUser = async (req: express.Request, res: express.Response) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const newUser = new User();
    newUser.username = userName;
    newUser.password = password;
    await newUser.save()


    res.status(200).send("userName: " + userName + " password: " + password);

}