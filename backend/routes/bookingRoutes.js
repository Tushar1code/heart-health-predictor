import express from "express";
import Booking from "../models/bookingModel.js"; 

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { doctorId, userName, userEmail, message } = req.body;
    console.log('Received booking data:', req.body); 
    
    if (!doctorId || !userName || !userEmail) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const booking = new Booking({
      doctorId,
      userName,
      userEmail,
      message,
    });

    await booking.save(); 
    console.log('Booking saved:', booking); 
    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    console.error('Error saving booking:', error); 
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
