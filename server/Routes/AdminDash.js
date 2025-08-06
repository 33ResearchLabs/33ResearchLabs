import express from "express"
import { GetAllStates } from "../Controller/main.js";
import { DeleteBlog, getABlog, GetBlog, PostNewBlog, UpdateBlog } from "../Controller/Blog.js";
import { uploads } from "../middleware/Multer.js";
import { getPaginatedSubscribers, getUserConsultation,  updateUserConsultation } from "../Controller/Users.js";
const router = express.Router();

// get Admin Dashboard deta
router.get("/stat",GetAllStates)

// post blog 
router.post("/blog",uploads.single("image"),PostNewBlog);
// get Blogs
router.get('/blogs', GetBlog)

// update blog
router.patch('/blog/:id',uploads.single("image"),UpdateBlog)
// Delete blog
router.delete('/blog/:id',DeleteBlog)


router.get('/consultation', getUserConsultation)
router.patch('/consultation:id', updateUserConsultation)

router.get('/subscribers', getPaginatedSubscribers)

export default router;
