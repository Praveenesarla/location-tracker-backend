import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Owner's name (from Users)
    devices: [
      {
        name: { type: String, required: true },
        locationHistory: [
          {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true },
            timestamp: { type: Date, default: Date.now },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Device = mongoose.model("Device", deviceSchema);
export default Device;
