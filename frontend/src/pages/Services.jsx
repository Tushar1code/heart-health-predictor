import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate(); 

  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
        Our Services
      </h2>
      <p className="text-center text-lg mb-8">
        Explore the medical services we provide to ensure your health and well-being.
      </p>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-red-600">Find a Doctor</h3>
          <p>Connect with specialists and book appointments.</p>
          <button 
            onClick={() => navigate("/doctors")} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Book Now
          </button>
        </div>

        {/* Heart Care */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-red-600">Heart Care</h3>
          <p>AI-powered risk analysis and expert consultations.</p>
          <button 
            onClick={() => navigate("/heart-care")} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Learn More
          </button>
        </div>

        {/* 24/7 Medication */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-red-600">24/7 Medication</h3>
          <p>Access medicines and prescriptions anytime.</p>
          <button 
            onClick={() => navigate("/medication")} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Order Now
          </button>
        </div>

        {/* Virtual Consultations */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-red-600">Lab Tests at Home</h3>
          <p>book lab tests from the comfort of home.</p>
          <button 
            onClick={() => navigate("/lab-consult")} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Start Now
          </button>
        </div>

        {/* Diet & Nutrition Plans */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-red-600">Diet & Nutrition Plans</h3>
          <p>Tailored food plans for heart wellness and overall health.</p>
          <button 
            onClick={() => navigate("/nutrition")} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            View Plans
          </button>
        </div>

        {/* Emergency Support */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-red-600">Emergency Support</h3>
          <p>Quick help in case of cardiac and health emergencies.</p>
          <button 
            onClick={() => navigate("/emergency")} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Get Help
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
