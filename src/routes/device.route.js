import express from "express";
import {
  registerDevice,
  getDevices,
} from "../controllers/device.controller.js"; // ✅ Fix import

const router = express.Router();

router.post("/register", registerDevice);
router.get("/list", getDevices);

export default router;
