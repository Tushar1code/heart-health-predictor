import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

function App() {
  // Check if the user is logged in by looking for the token in localStorage
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* If the user is logged in, redirect to the main page */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/main" /> : <Login />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Main page route, only accessible if logged in */}
        <Route path="/main" element={isLoggedIn ? <MainPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
