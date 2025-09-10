import express from 'express';
import { getUserQuery, postUserConsultation, postUserQuery, postUserSubscribe, updateUserQuery } from '../Controller/Users.js';
import UserQuery from '../models/userQuery.js';
import { getABlog } from '../Controller/Blog.js';
const router = express.Router();

router.post('/query', postUserQuery)
router.get('/user-queries', getUserQuery)
router.patch('/user-queries/:id', updateUserQuery)
router.post('/consultation', postUserConsultation)
router.post('/subscribe', postUserSubscribe)
// get blog only
router.get('/blog/:id', getABlog)

export default router