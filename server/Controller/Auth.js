import AdminLogin from "../models/adminAuth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  if (!email || !password || !email.trim() || !password.trim()) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const adminExist = await AdminLogin.findOne({ email });
    if (!adminExist) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, adminExist.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { adminId: adminExist._id, email: adminExist.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Set the token in a cookie
    res.cookie("token", token, {
      httpOnly: true, // can't be accessed by JS on client
      secure: process.env.NODE_ENV === "production", // only secure in prod
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({
      message: "Login successful",
      admin: {
        id: adminExist._id,
        email: adminExist.email,
      },
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password || !email.trim() || !password.trim()) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const exisitingUser = await AdminLogin.findOne({ email });
  if (exisitingUser) {
    return res.status(400).json({ message: "Admin already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = new AdminLogin({
    email,
    password: hashedPassword,
  });

  try {
    await newAdmin.save();
    return res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const Logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return res.status(200).json({ message: "Logged out successfully" });
};

export const verify = (req, res) => {
  if (!req.admin) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  return res.status(200).json({ 
    message: "Token verified successfully",
    admin: {
      id: req.admin._id,
      email: req.admin.email
    }
  });
};
