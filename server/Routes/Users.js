import express from 'express';
import { getUserQuery, postUserConsultation, postUserQuery, postUserSubscribe, updateUserQuery } from '../Controller/Users.js';
import UserQuery from '../models/userQuery.js';
import { getABlog } from '../Controller/Blog.js';
import { checkDailyLimit } from '../middleware/dailyLimitCheck.js';
const router = express.Router();

router.post('/query', checkDailyLimit, postUserQuery)
router.get('/user-queries', getUserQuery)
router.patch('/user-queries/:id', updateUserQuery)
router.post('/consultation', checkDailyLimit, postUserConsultation)
router.post('/subscribe', postUserSubscribe)
// get blog only
router.get('/blog/:id', getABlog)

export default router