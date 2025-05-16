import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Import Routes
import authRoutes from "./routes/authRoutes.js";  
import doctorRoutes from "./routes/doctorRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import labRoutes from "./routes/labRoutes.js";
import dietRoutes from "./routes/dietRoutes.js"; 
import emergencyRoutes from "./routes/emergencyRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/labtests", labRoutes);
app.use("/api/diets", dietRoutes);
app.use("/api/emergency", emergencyRoutes);
app.use("/api/chat", chatRoutes);

// Fallback route
app.use("*", (req, res) => {
  res.status(404).json({ message: "API route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`);
});
