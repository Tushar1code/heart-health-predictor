
import React from "react";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import MLPrediction from "./pages/MLPrediction";
import Doctors from "./pages/Doctors";
import HeartCare from "./pages/HeartCare";
import Checkout from "./pages/Checkout";
import Medication from "./pages/Medication";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import LabConsult from "./pages/LabConsult";
import Nutrition from "./pages/Nutrition";
import Emergency from "./pages/Emergency";
import { CartProvider } from "./Context/CartContext"; 

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <CartProvider>
      {isLoggedIn && <Navbar />}
      <Routes>
        {/* Routes for unauthenticated users */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Routes for authenticated users */}
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
        <Route path="/services" element={isLoggedIn ? <Services /> : <Navigate to="/login" />} />
        <Route path="/predict" element={isLoggedIn ? <MLPrediction /> : <Navigate to="/login" />} />
        <Route path="/find-doctor" element={isLoggedIn ? <Doctors /> : <Navigate to="/login" />} />
        <Route path="/doctors" element={isLoggedIn ? <Doctors /> : <Navigate to="/login" />} />
        <Route path="/heart-care" element={isLoggedIn ? <HeartCare /> : <Navigate to="/login" />} />
        <Route path="/medication" element={isLoggedIn ? <Medication /> : <Navigate to="/login" />} />
        <Route path="/checkout" element={isLoggedIn ? <Checkout /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/lab-consult" element={isLoggedIn ? <LabConsult /> : <Navigate to="/login" />} />
        <Route path="/nutrition" element={isLoggedIn ? <Nutrition /> : <Navigate to="/login" />} />
        <Route path="/emergency" element={isLoggedIn ? <Emergency /> : <Navigate to="/login" />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
