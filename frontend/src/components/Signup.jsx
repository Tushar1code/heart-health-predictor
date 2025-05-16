import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(`${BASE_URL}/api/auth/signup`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      const { token, name } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        setMessage("✅ Signup successful! Redirecting...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage("❌ Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setMessage(error.response?.data?.message || "❌ Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
          value={formData.username}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
          value={formData.confirmPassword}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white ${loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"}`}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
};

export default Signup;
