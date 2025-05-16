import React, { useState } from "react";
import axios from "axios";

const MLPrediction = () => {
  const featureNames = [
    { key: "age", label: "Age (in years)", min: 5, max: 100 },
    { key: "trestbps", label: "Resting Blood Pressure (mm Hg)", min: 80, max: 200 },
    { key: "chol", label: "Cholesterol Level (mg/dl)", min: 100, max: 400 },
    { key: "thalach", label: "Max Heart Rate Achieved", min: 60, max: 220 },
    { key: "oldpeak", label: "ST Depression (oldpeak)", min: 0, max: 6, step: 0.1 }
  ];

  const [features, setFeatures] = useState({});
  const [prediction, setPrediction] = useState("");

  const handleChange = (e, name) => {
    setFeatures({ ...features, [name]: parseFloat(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valuesInOrder = featureNames.map((f) => features[f.key] || 0);

    try {
      const res = await axios.post("http://localhost:5001/predict", {
        features: valuesInOrder,
      });
      setPrediction(res.data.prediction);
    } catch (error) {
      console.error("Prediction Error:", error);
      setPrediction("Error");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Heart Disease Predictor
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {featureNames.map(({ key, label, min, max, step }) => (
          <div key={key}>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <input
              type="number"
              placeholder={`Enter ${label}`}
              onChange={(e) => handleChange(e, key)}
              required
              min={min}
              max={max}
              step={step || 1}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <small className="text-gray-500">Recommended range: {min}–{max}</small>
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-300"
        >
          Predict
        </button>
      </form>

      {prediction !== "" && prediction !== "Error" && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold">Prediction:</h3>
          <p
            className={`text-5xl font-bold ${
              prediction >= 0.7
                ? "text-red-600"
                : prediction >= 0.4
                ? "text-yellow-500"
                : "text-green-600"
            }`}
          >
            You have a {Math.round(prediction * 1000) / 10}% chance of heart disease
          </p>
        </div>
      )}

      {prediction === "Error" && (
        <p className="mt-4 text-red-600 text-center text-lg">Something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default MLPrediction;
