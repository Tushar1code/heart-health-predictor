
import express from "express";
import twilio from "twilio";

const router = express.Router();


const accountSid = "ACf100757c8d763eca211322667c0d6d51";
const authToken = "484446ece366841f4d54d610eef118aa";
const twilioPhoneNumber = "+919324899531"; 
const emergencyContact = "+918850134771"; 

const client = twilio(accountSid, authToken);

router.post("/send-alert", async (req, res) => {
  const { message, patientName, location } = req.body;

  try {
    await client.messages.create({
      body: `🚨 Emergency Alert!\nPatient: ${patientName}\nLocation: ${location}\nMessage: ${message}`,
      from: twilioPhoneNumber,
      to: emergencyContact,
    });

    res.status(200).json({ success: true, message: "SMS sent" });
  } catch (error) {
    console.error("Twilio error:", error);
    res.status(500).json({ success: false, error: "Failed to send SMS" });
  }
});

export default router;
