import { User } from '../db/entities/User.js';
export const inserteUser = async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const newUser = new User();
    newUser.username = userName;
    newUser.password = password;
    await newUser.save();
    res.status(200).send("userName: " + userName + " password: " + password);
};
