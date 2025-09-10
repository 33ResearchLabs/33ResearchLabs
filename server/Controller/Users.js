import UserQuery from "../models/userQuery.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import UserConsultation from "../models/userConsultation.js";
import Subscribe from "../models/UserSubscribe.js";
import { io } from "../index.js";
import { updateDailyCount } from "../middleware/dailyLimitCheck.js";
dotenv.config();

export const postUserQuery = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    company,
    projectType,
    budget,
    projectDescription,
  } = req.body;

  // ✅ Check all fields
  if (
    !firstName ||
    !lastName ||
    !email ||
    !company ||
    !projectType ||
    !budget ||
    !projectDescription
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // ✅ 1. Save user query to database
    const newQuery = new UserQuery({
      firstName,
      lastName,
      email,
      company,
      projectType,
      budget,
      projectDescription,
    });

    await newQuery.save();
    console.log("✅ User query saved to database");

    // ✅ 2.5. Update daily limit count
    await updateDailyCount(req.limitRecord, 'query');

    // ✅ 3. Setup and send mail to owner
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.OWNER_EMAIL,
        pass: process.env.OWNER_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.OWNER_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "📩 New User Query Received from 33Research Labs",
      html: `
        <h3>New User Query</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Project Description:</strong> ${projectDescription}</p>
        <p><strong>Budget:</strong> ${budget}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent to owner");
    io.emit("new-userQuery", "new message");
    // ✅ 4. Respond success
    res.status(200).json({ message: "User query submitted and email sent!" });
  } catch (error) {
    console.error("❌ Error in postUserQuery:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const postUserConsultation = async (req, res) => {
  const { name, email, company, description } = req.body;

  // ✅ Check all fields
  if (!name || !email || !company || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // ✅ 1. Save user consultation to database
    const newQuery = new UserConsultation({
      name,
      email,
      company,
      description,
    });

    await newQuery.save();
    console.log("✅ User consultation saved to database");

    // ✅ 2.5. Update daily limit count
    await updateDailyCount(req.limitRecord, 'consultation');

    // ✅ 3. Setup and send mail to owner
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.OWNER_EMAIL,
        pass: process.env.OWNER_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.OWNER_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "📩 New User Consultation request Received from 33Research Labs",
      html: `
        <h3>New User Consultation</h3>
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent to owner");
    io.emit("new-consultation", { id: newQuery._id, name: newQuery.name });
    // ✅ 4. Respond success
    res
      .status(200)
      .json({ message: "User consultation submitted and email sent!" });
  } catch (error) {
    console.error("❌ Error in postUserConsultation:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const postUserSubscribe = async (req, res) => {
  const { email } = req.body;

  // ✅ Check all fields
  if (!email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // ✅ 1. Check if subscription already exists
    const existingSubscription = await Subscribe.findOne({ email });
    if (existingSubscription) {
      return res.status(409).json({ message: "User email already subscribed" });
    }

    // ✅ 2. Save user subscription to database
    const newQuery = new Subscribe({
      email,
    });

    await newQuery.save();
    console.log("✅ User query saved to database");

    // ✅ 3. Setup and send mail to owner
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.OWNER_EMAIL,
        pass: process.env.OWNER_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.OWNER_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "📩 New User Subscribe request Received from 33Research Labs",
      html: `
        <h3>New User Subscribe </h3>
        <p><strong>Email:</strong> ${email}</p>
       
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent to owner");

    // ✅ 4. Respond success
    res.status(200).json({ message: "User Subscribe sucessfully!" });
  } catch (error) {
    console.error("❌ Error in user Subscribe", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// controllers/adminController.js


export const getPaginatedSubscribers = async (req, res) => {
  try {
    let { page = 1, limit = 5 } = req.query;

    // Convert to numbers
    page = parseInt(page);
    limit = parseInt(limit);

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return res.status(400).json({ message: "Invalid pagination parameters" });
    }

    const total = await Subscribe.countDocuments();
    const subscribers = await Subscribe.find()
      .sort({ createdAt: -1 }) // Most recent first
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      subscribers,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      totalSubscribers: total,
    });
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    res.status(500).json({ message: "Server error while fetching subscribers" });
  }
};


export const getUserQuery = async (req, res) => {
  try {
    const latestQuery = await UserQuery.find({ status: "pending" })
      .sort({ _id: -1 })
      .limit(10);
    res.status(200).json(latestQuery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserQuery = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!id || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const updatedQuery = await UserQuery.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (status === "rejected") {
      await UserQuery.deleteOne({ _id: id });
    }
    io.emit("queryUpdate", { id: id, status: status });
    if (!updatedQuery) {
      return res.status(404).json({ message: "Query not found" });
    }
    res.status(200).json(updatedQuery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserConsultation = async (req, res) => {
  try {
    const consultationData = await UserConsultation.find({ status: "pending" })
      .sort({ _id: -1 })
      .limit(10);
    res.status(200).json(consultationData);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserConsultation = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await UserConsultation.findByIdAndUpdate(id, { status });
    if(status === "dismissed"){
      await UserConsultation.deleteOne({ _id: id });
    }
    io.emit("queryUpdate", { id: id, status: status });
    res.status(200).json({ message: "updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
