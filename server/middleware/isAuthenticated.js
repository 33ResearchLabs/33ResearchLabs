import AdminLogin from "../models/adminAuth.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const token =
    req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token found" });
  }

  try {
    const tokenData = jwt.verify(token, process.env.JWT_SECRET);

    const existingAdmin = await AdminLogin.findById({ _id: tokenData.adminId });
    if (!existingAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    req.admin = existingAdmin;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    return res.status(403).json({ message: "Invalid token" });
  }
};
