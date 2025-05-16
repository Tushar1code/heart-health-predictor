import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-16 min-h-screen"
      style={{
        background: "linear-gradient(to right, #dff2fd, #fdefe5)",
      }}
    >
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Your Heart's Health, <br />
          Our Priority.
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Our expert cardiologists provide cutting-edge treatments to help you
          lead a heart-healthy life. From early diagnosis to personalized care,
          we ensure your well-being with state-of-the-art cardiac solutions.
        </p>
        <Link to="/predict" className="inline-block">
          <button className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300">
            Check Health
          </button>
        </Link>

       
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="/images/heartmoving.gif"
          alt="Heart Care Specialist"
          className="w-10/12 sm:w-8/12 md:w-full max-w-xs md:max-w-md mx-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
