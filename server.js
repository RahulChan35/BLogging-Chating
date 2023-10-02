// IMPORTS
import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  allowEIO3: true,
  cors: {
    origin: true,
    credentials: true,
  },
});

// ROUTES
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import blogRouter from "./routes/blogRoute.js";

// MIDDLEWARES
import { authenticateUser } from "./middlwares/authMiddleware.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.ENVIRONMENT === "DEVELOPMENT") {
  app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname, "./oublic")));
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ msg: "Hello, world!!!" });
});

// AUTH ROUTE
app.use("/api/v1/auth", authRouter);
// USER ROUTE
app.use("/api/v1/users", authenticateUser, userRouter);
// BLOG ROUTE
app.use("/api/v1/blogs", authenticateUser, blogRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

// ERROR HANDLING
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Page not found" });
});
app.use((err, req, res, next) => {
  res.status(500).json({ msg: "Internal server error" });
});

// PORT LISTENING, DB CONNECT
const port = 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  httpServer.listen(port, () => {
    console.log(`server listening on port ${port}...`);
  });
  io.on("connection", (socket) => {
    console.log(`Socket ${socket.id} connected`);

    socket.on("sendMessage", (message) => {
      io.emit("message", message);
    });

    socket.on("disconnect", () => {
      console.log(`Socket ${socket.id} disconnected`);
    });
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
