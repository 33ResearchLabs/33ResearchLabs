import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import QueryRouters from './Routes/Users.js';
import AuthRouters from './Routes/Auth.js';
import AdminDashRouters from './Routes/AdminDash.js';
import { connectToMongoDb } from './Db/config.js';
import { isAuthenticated } from './middleware/isAuthenticated.js';

dotenv.config();

const app = express();
const server = http.createServer(app); // ✅ Wrap Express with raw HTTP server
const io = new SocketServer(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:8080',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  },
});
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static files
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/users', QueryRouters);
app.use('/api/admin', AuthRouters);
app.use('/api/admin/dashboard', isAuthenticated, AdminDashRouters);

// Socket.IO event handling
io.on('connection', (socket) => {
  console.log(`🟢 Client connected: ${socket.id}`);

  // Example custom event
  socket.on('ping-server', (msg) => {
    console.log('Received ping:', msg);
    socket.emit('pong-client', 'Pong from server');
  });

  socket.on('disconnect', () => {
    console.log(`🔴 Client disconnected: ${socket.id}`);
  });
});

// Start server
connectToMongoDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`✅ HTTP + Socket.IO server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err);
  });

export {io}