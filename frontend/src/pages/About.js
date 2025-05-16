import React from "react";

function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">About CardioHealthCare</h1>
      <p className="text-gray-700 mb-4">
        Welcome to <span className="font-semibold">CardioHealthCare</span>, your trusted partner in 
        heart health. We are committed to providing advanced cardiac care, personalized treatment 
        plans, and expert medical guidance to help you lead a healthier life.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Mission</h2>
      <p className="text-gray-700">
        Our mission is to revolutionize cardiovascular care through innovation, research, 
        and a patient-centered approach. We strive to empower individuals with the knowledge 
        and tools needed to prevent and manage heart disease effectively.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Why Choose Us?</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Expert team of cardiologists and healthcare professionals</li>
        <li>State-of-the-art diagnostic and treatment facilities</li>
        <li>Personalized care plans tailored to each patient</li>
        <li>Comprehensive heart health education and resources</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Contact Us</h2>
      <p className="text-gray-700">
        Have questions or need assistance? Feel free to reach out to us at:
      </p>
      <p className="text-blue-500 font-semibold">Email: support@cardiohealthcare.com</p>
      <p className="text-blue-500 font-semibold">Phone: +1 800-555-1234</p>
    </div>
  );
}

export default About;
