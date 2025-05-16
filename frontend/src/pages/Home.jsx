// src/pages/Home.jsx

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <section id="services" className="py-16 px-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">Our Services</h2>
        <p className="text-center text-lg mb-8">
          Explore the medical services we provide to ensure your health and well-being.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <img src="/doctor.svg" alt="Doctor" className="mx-auto h-20 mb-4" />
            <h3 className="text-xl font-bold text-red-500">Find a Doctor</h3>
            <p>Connect with experienced specialists and book appointments easily.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <img src="/heart.svg" alt="Heart Care" className="mx-auto h-20 mb-4" />
            <h3 className="text-xl font-bold text-red-500">Heart Care</h3>
            <p>Get AI-powered heart risk analysis and expert consultations.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <img src="/medicine.svg" alt="Medication" className="mx-auto h-20 mb-4" />
            <h3 className="text-xl font-bold text-red-500">24/7 Medication</h3>
            <p>Access medicines and prescriptions anytime, anywhere.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
