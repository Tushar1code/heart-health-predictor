import express from "express";
const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    console.log("Contact message received:", { name, email, message });

    
    res.status(200).json({ message: "Message received successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
