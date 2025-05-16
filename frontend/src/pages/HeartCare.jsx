import React from "react";

const HeartCare = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-indigo-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        Heart Care: Exercise and Cardiovascular Health
      </h1>

      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
          Types of Exercise That Are Beneficial for Heart Health:
        </h2>
        <div className="overflow-x-auto space-x-6 flex animate-scroll">
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Aerobic Exercise (Cardio)
            </h3>
            <p>
              Walking, running, cycling, swimming, dancing. These activities
              increase your heart rate and improve blood circulation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Strength Training (Resistance Exercise)
            </h3>
            <p>
              Weight lifting, bodyweight exercises, resistance bands. Helps to
              build muscle and boost metabolism.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Flexibility and Balance Exercises
            </h3>
            <p>
              Yoga, Pilates, stretching routines. Improves overall body
              movement and reduces stress.
            </p>
          </div>
        </div>
      </section>

      {/* Section: How Exercise Helps */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
          How Regular Physical Activity Can Help Prevent Cardiovascular Diseases:
        </h2>
        <div className="overflow-x-auto space-x-6 flex animate-scroll">
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Strengthens the Heart
            </h3>
            <p>
              Exercise helps the heart pump more efficiently, reducing the
              workload on the heart.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Reduces High Blood Pressure
            </h3>
            <p>
              Physical activity improves blood vessel function, leading to
              lower blood pressure.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Improves Cholesterol Levels
            </h3>
            <p>
              Regular exercise can boost HDL (good) cholesterol and lower LDL
              (bad) cholesterol and triglycerides.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Getting Started with Exercise */}
      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
          Tips for Getting Started with Heart-Healthy Exercises:
        </h2>
        <div className="overflow-x-auto space-x-6 flex animate-scroll">
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <strong>Start Slow:</strong> Begin with low-impact activities like
            walking or light stretching. Gradually increase intensity as your
            fitness improves.
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <strong>Set Realistic Goals:</strong> Aim for 150 minutes of
            moderate-intensity aerobic activity or 75 minutes of
            vigorous-intensity activity each week.
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <strong>Incorporate Variety:</strong> Mix aerobic exercises,
            strength training, and flexibility exercises to target different
            aspects of fitness.
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <strong>Listen to Your Body:</strong> Stop if you experience any
            chest pain, dizziness, or shortness of breath and consult a healthcare
            provider.
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72 min-w-[300px]">
            <strong>Consistency is Key:</strong> Make exercise part of your daily
            routine. Consistency leads to long-term heart health benefits.
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeartCare;
