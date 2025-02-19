import User from "../models/user.model.js";

export const registerDevice = async (req, res) => {
  try {
    const { email, device } = req.body;

    let user = await User.findOne({ email });

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    user.devices.push(device);
    await user.save();

    return res.status(201).json({ success: true, devices: user.devices });
  } catch (error) {
    console.error("❌ Device Registration Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// ✅ FIX: Make sure getDevices is properly defined and exported
export const getDevices = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, devices: user.devices });
  } catch (error) {
    console.error("❌ Error Fetching Devices:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
