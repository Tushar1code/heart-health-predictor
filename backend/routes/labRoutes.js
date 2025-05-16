import express from "express";
import mongoose from "mongoose";
const router = express.Router();


const labTestSchema = new mongoose.Schema({
  fullName: String,
  testType: String,
  address: String,
  date: String,
  contact: String,
});

const LabTestBooking = mongoose.model("LabTestBooking", labTestSchema);


router.post("/book", async (req, res) => {
  try {
    const { fullName, testType, address, date, contact } = req.body;

  
    if (!fullName || !testType || !address || !date || !contact) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = new LabTestBooking({
      fullName,
      testType,
      address,
      date,
      contact,
    });

    await booking.save();
    res.status(201).json({ message: "Booking saved successfully" });
  } catch (err) {
    console.error("Error booking lab test:", err);
    res.status(500).json({ error: "Something went wrong while booking" });
  }
});

export default router;
