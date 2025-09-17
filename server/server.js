import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieSession from "cookie-session";
import passport from "passport";
import { createServer } from "http";
import { Server } from "socket.io";

import "./config/passport.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });
app.set("io", io);

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  httpServer.listen(process.env.PORT || 5000, () =>
    console.log("Backend running 🚀")
  );
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});


