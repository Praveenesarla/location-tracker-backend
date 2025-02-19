import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.route.js";
import deviceRoutes from "./src/routes/device.route.js";
import locationRoutes from "./src/routes/location.route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Register API Routes
app.use("/api/auth", authRoutes);
app.use("/api/devices", deviceRoutes);
app.use("/api/location", locationRoutes);

// Global Error Handling Middleware

export default app;
