import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import deviceRoutes from "./routes/device.route.js";
import locationRoutes from "./routes/location.route.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/devices", deviceRoutes);
app.use("/api/location", locationRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

export default app;
