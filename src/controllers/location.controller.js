import User from "../models/user.model.js";

export const addLocationHistory = async (req, res) => {
  try {
    const { email, deviceName, location } = req.body;

    if (!email || !deviceName || !location?.latitude || !location?.longitude) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Email, deviceName, latitude, and longitude are required",
        });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const device = user.devices.find((d) => d.deviceName === deviceName);
    if (!device) {
      return res
        .status(404)
        .json({ success: false, message: "Device not found" });
    }

    // Add new location to history
    device.locationHistory.push({
      latitude: location.latitude,
      longitude: location.longitude,
      timestamp: location.timestamp || Date.now(),
    });

    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Location added successfully", device });
  } catch (error) {
    console.error("❌ Error Adding Location:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// ✅ FIX: Ensure `getLocationHistory` is correctly exported
export const getLocationHistory = async (req, res) => {
  try {
    const { email, deviceName } = req.query;

    if (!email || !deviceName) {
      return res
        .status(400)
        .json({ success: false, message: "Email and deviceName are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const device = user.devices.find((d) => d.deviceName === deviceName);
    if (!device) {
      return res
        .status(404)
        .json({ success: false, message: "Device not found" });
    }

    return res
      .status(200)
      .json({ success: true, locationHistory: device.locationHistory });
  } catch (error) {
    console.error("❌ Error Fetching Location History:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
