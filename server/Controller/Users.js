import UserQuery from "../models/userQuery.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import UserConsultation from "../models/userConsultation.js";
import Subscribe from "../models/UserSubscribe.js";
import { io } from "../index.js";
import { updateDailyCount } from "../middleware/dailyLimitCheck.js";
dotenv.config();

// ✅ Reuse single transporter instance with connection pooling and timeout handling
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.OWNER_EMAIL,
    pass: process.env.OWNER_EMAIL_PASS,
  },
  pool: true, // Use connection pooling
  maxConnections: 5, // Max concurrent connections
  maxMessages: 100, // Max messages per connection
  rateDelta: 1000, // Time between messages (ms)
  rateLimit: 5, // Max messages per rateDelta
  connectionTimeout: 10000, // 10 seconds connection timeout
  greetingTimeout: 5000, // 5 seconds greeting timeout
  socketTimeout: 30000, // 30 seconds socket timeout
});

// Helper function for retry with exponential backoff
const retryWithBackoff = async (fn, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      const isLastAttempt = i === retries - 1;
      if (isLastAttempt) throw error;

      const waitTime = delay * Math.pow(2, i); // Exponential backoff
      console.log(`⏳ Retry ${i + 1}/${retries} after ${waitTime}ms...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
};

const sendEmailAsync = async (
  firstName,
  lastName,
  email,
  projectDescription,
  company,
  queryCount
) => {
  try {
    const mailOptions = {
      from: process.env.OWNER_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "📩 New User Query Received from Reputation one Ai",
      html: `
        <h3>New User Query</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Project Description:</strong> ${projectDescription}</p>
        <p><strong>Query Count:</strong> ${queryCount} of 3</p>
      `,
    };

    await retryWithBackoff(() => transporter.sendMail(mailOptions), 3, 2000);
    console.log("✅ Email sent to owner successfully");
  } catch (error) {
    console.error("❌ Error sending email after retries:", error.message);
    // TODO: Save failed emails to a database queue for manual retry
  }
};

const sendConsultationEmailAsync = async (name, email, company, description) => {
  try {
    const mailOptions = {
      from: process.env.OWNER_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "📩 New User Consultation request Received from 33Research Labs",
      html: `
        <h3>New User Consultation</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
    };

    await retryWithBackoff(() => transporter.sendMail(mailOptions), 3, 2000);
    console.log("✅ Consultation email sent to owner");
  } catch (error) {
    console.error("❌ Error sending consultation email after retries:", error.message);
  }
};

const sendSubscribeEmailAsync = async (email) => {
  try {
    const mailOptions = {
      from: process.env.OWNER_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "📩 New User Subscribe request Received from 33Research Labs",
      html: `
        <h3>New User Subscribe</h3>
        <p><strong>Email:</strong> ${email}</p>
      `,
    };

    await retryWithBackoff(() => transporter.sendMail(mailOptions), 3, 2000);
    console.log("✅ Subscribe email sent to owner");
  } catch (error) {
    console.error("❌ Error sending subscribe email after retries:", error.message);
  }
};

export const postUserQuery = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    company,
    projectType,
    projectDescription,
  } = req.body;

  // ✅ Check all fields
  if (
    !firstName ||
    !lastName ||
    !email ||
    !company ||
    !projectType ||
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
      projectDescription,
    });

    await newQuery.save();
    res.status(200).json({ message: "User query submitted and email sent!" });
    console.log("✅ User query saved to database");

    // ✅ 2.5. Update daily limit count
    await updateDailyCount(req.limitRecord, "query");

    // ✅ 3. Setup and send mail to owner
    sendEmailAsync(
      firstName,
      lastName,
      email,
      projectDescription,
      company,
      req.limitRecord ? req.limitRecord.queryCount + 1 : 1
    );
    io.emit("new-userQuery", "new message");
    // ✅ 4. Respond success
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

    // ✅ 2. Update daily limit count
    await updateDailyCount(req.limitRecord, "consultation");

    // ✅ 3. Respond immediately (don't wait for email)
    res
      .status(200)
      .json({ message: "User consultation submitted and email sent!" });

    // ✅ 4. Send email asynchronously (non-blocking)
    sendConsultationEmailAsync(name, email, company, description);
    io.emit("new-consultation", { id: newQuery._id, name: newQuery.name });
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
    console.log("✅ User subscription saved to database");

    // ✅ 3. Respond immediately (don't wait for email)
    res.status(200).json({ message: "User Subscribe sucessfully!" });

    // ✅ 4. Send email asynchronously (non-blocking)
    sendSubscribeEmailAsync(email);
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
    res
      .status(500)
      .json({ message: "Server error while fetching subscribers" });
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserConsultation = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await UserConsultation.findByIdAndUpdate(id, { status });
    if (status === "dismissed") {
      await UserConsultation.deleteOne({ _id: id });
    }
    io.emit("queryUpdate", { id: id, status: status });
    res.status(200).json({ message: "updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
