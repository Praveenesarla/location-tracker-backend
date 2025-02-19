import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const deviceSchema = new mongoose.Schema({
  deviceName: { type: String, required: true },
  code: { type: String, required: true },
  locationHistory: [locationSchema],
});

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: { type: String, required: true, trim: true },
    devices: [deviceSchema], // User can have multiple devices
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
