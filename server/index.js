// index.js
import express from "express";
import compression from "compression";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import http from "http";
import { Server as SocketServer } from "socket.io";
import QueryRouters from "./Routes/Users.js";
import AuthRouters from "./Routes/Auth.js";
import AdminDashRouters from "./Routes/AdminDash.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectToMongoDb } from "./Db/config.js";
import { isAuthenticated } from "./middleware/isAuthenticated.js";

dotenv.config();

const app = express();
app.use(helmet());

// ✅ Enable Compression for response compression
app.use(compression());

// ✅ Rate Limiting (e.g., max 100 requests per 15 minutes per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);
const server = http.createServer(app);

// ✅ Updated CORS configuration for production
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:8080", // Next.js default
  "http://localhost:5173", // Vite default
  "https://yourapp.vercel.app", // Replace with your actual Vercel domain
].filter(Boolean); // Remove undefined values

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log(`Blocked by CORS: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true, // ✅ Essential for cookies
  optionsSuccessStatus: 200,
};

const io = new SocketServer(server, {
  cors: corsOptions,
});

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors(corsOptions)); // ✅ Use the same CORS config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static files
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/users", QueryRouters);
app.use("/api/admin", AuthRouters);
app.use("/api/admin/dashboard", isAuthenticated, AdminDashRouters);

// Socket.IO event handlers
io.on("connection", (socket) => {
  console.log(`🟢 Client connected: ${socket.id}`);

  socket.on("ping-server", (msg) => {
    console.log("Received ping from client:", msg);
    socket.emit("pong-client", "Pong from server");
  });

  socket.on("disconnect", () => {
    console.log(`🔴 Client disconnected: ${socket.id}`);
  });
});

// Connect to MongoDB and start server
connectToMongoDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log(
        `✅ HTTP + Socket.IO server running at http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB, server not started.");
  });

export { io };
