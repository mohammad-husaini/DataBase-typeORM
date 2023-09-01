import express from 'express';
import { inserteUser } from '../controllers/user.js';

const router = express.Router();

router.post('/', inserteUser);

export default router