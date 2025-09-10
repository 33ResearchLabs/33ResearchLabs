import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { login, Logout, verify } from "../Controller/Auth.js";
const router = express.Router();

router.post("/login", login);
router.get("/logout", isAuthenticated, Logout);
router.get("/verify", isAuthenticated, verify);

export default router;
