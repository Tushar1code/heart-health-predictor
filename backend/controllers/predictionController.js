import axios from "axios";

export const predictDisease = async (req, res) => {
  try {
    const { features } = req.body;
    console.log("Received features:", features); 

    const response = await axios.post("http://localhost:5001/predict", { features });

    console.log("ML Response:", response.data); 

    res.json({ prediction: response.data.prediction });
  } catch (error) {
    console.error("Prediction Error:", error); 
    res.status(500).json({ message: "Error in ML prediction", error: error.response?.data || error.message || "Unknown error" });
  }
};
