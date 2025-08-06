import AdminLogin from "../models/adminAuth.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token found" });
    }
  
    const tolenData = jwt.verify(token, process.env.JWT_SECRET);
    
    const existingAdmin = await AdminLogin.findOne({ _id: tolenData.adminId });
    
    if (!existingAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    req.admin = existingAdmin;
    next(); // ✅ only call next when everything is valid
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
