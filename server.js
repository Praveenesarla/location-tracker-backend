import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";

dotenv.config();

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
