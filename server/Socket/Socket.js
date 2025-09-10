import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();
const server = require("http").createServer();
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${process.env.PORT}`, // Replace with your Vite client's origin
    methods: ["GET", "POST"],
  },
});
io.listen(process.env.PORT || 3000, () => console.log("socket started"));
