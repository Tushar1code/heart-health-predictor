import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
const LabConsult = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    testType: "",
    address: "",
    date: "",
    contact: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [isBooked, setIsBooked] = useState(false);  
  const navigate = useNavigate();  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/labtests/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccessMsg("Lab test booked successfully! We’ll contact you soon.");
      setIsBooked(true); 
      setFormData({
        fullName: "",
        testType: "",
        address: "",
        date: "",
        contact: "",
      });

      
    } else {
      alert("Failed to book. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Book Lab Test at Home</h2>

      {!isBooked ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <select
            name="testType"
            value={formData.testType}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Test Type</option>
            <option value="Blood Test">Blood Test</option>
            <option value="Sugar Test">Sugar Test</option>
            <option value="ECG">ECG</option>
            <option value="Cholesterol">Cholesterol</option>
          </select>

          <input
            name="address"
            type="text"
            placeholder="Home Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="contact"
            type="tel"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
          >
            Book Now
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-xl text-green-600 font-semibold">Booking Confirmed!</h3>
          <p className="mt-4 text-lg">{successMsg}</p>
          
          <button
            onClick={() => navigate("/home")}  // Navigate to home or any other page
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default LabConsult;
