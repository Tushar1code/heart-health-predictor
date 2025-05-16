import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState(""); // Store email input
  const [password, setPassword] = useState(""); // Store password input
  const [message, setMessage] = useState(""); // State to store error messages

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      
      const response = await axios.post(`${BASE_URL}/api/login`, {
        email,
        password,
      });

      
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        navigate("/home"); 
      } else {
        setMessage("Login failed. Please try again."); 
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed. Please check your credentials."); 
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            Login
          </button>
        </form>

        {/* Display error message if login fails */}
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}

        {/* Link to the signup page if the user doesn't have an account */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
