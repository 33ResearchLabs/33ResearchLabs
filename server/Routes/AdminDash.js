import express from "express"
import { GetAllStates } from "../Controller/main.js";
import { DeleteBlog, getABlog, GetBlog, PostNewBlog, UpdateBlog } from "../Controller/Blog.js";
import { uploads } from "../middleware/Multer.js";
import { getPaginatedSubscribers, getUserConsultation,  updateUserConsultation } from "../Controller/Users.js";
import { verify } from "../Controller/Auth.js";
const router = express.Router();

// get Admin Dashboard deta
router.get("/stat",GetAllStates)

// post blog
router.post("/blog", PostNewBlog);
// get all blogs
router.get('/blogs', GetBlog)
// get single blog by id
router.get('/blog/:id', getABlog)
// update blog
router.patch('/blog/:id', UpdateBlog)
// delete blog
router.delete('/blog/:id', DeleteBlog)

// Consultation
router.get('/consultation', getUserConsultation)
router.patch('/consultation:id', updateUserConsultation)

// Subscriber
router.get('/subscribers', getPaginatedSubscribers)
// veriy auth Api for fronted 



export default router;
