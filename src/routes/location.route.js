import express from "express";
import {
  addLocationHistory,
  getLocationHistory,
} from "../controllers/location.controller.js"; // ✅ Fix import

const router = express.Router();

router.post("/add", addLocationHistory);
router.get("/history", getLocationHistory);

export default router;
