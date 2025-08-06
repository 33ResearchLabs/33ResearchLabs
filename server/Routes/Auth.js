import express from 'express'
import { isAuthenticated } from '../middleware/isAuthenticated.js';
import { login, Logout } from '../Controller/Auth.js';
const router = express.Router();

router.post('/login',login)
router.get('/logout',isAuthenticated,Logout)

export default router;