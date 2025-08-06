// src/lib/socket.js
import { io } from "socket.io-client";

// Adjust the backend URL as per your setup
const socket = io(import.meta.env.VITE_BACKEND_URL || "http://localhost:3000", {
  withCredentials: true,
});

export default socket;
