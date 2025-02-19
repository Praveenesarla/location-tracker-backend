import User from "../models/user.model.js";

export const signIn = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res
        .status(400)
        .json({ success: false, message: "Name and email are required" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        devices: [{ deviceName: name, code: "1111", locationHistory: [] }],
      });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("❌ Sign-In Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
