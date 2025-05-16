import React, { useState } from "react";

const Nutrition = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [conditions, setConditions] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [dietPlan, setDietPlan] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("http://localhost:5000/api/diet-plan", {
        method: "POST",
        body: JSON.stringify({ age, weight, conditions, activityLevel }),
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => response.json())
      .then((data) => setDietPlan(data));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Your Nutrition Plan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="weight">
              Weight (kg)
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="conditions">
              Medical Conditions (optional)
            </label>
            <input
              id="conditions"
              type="text"
              value={conditions}
              onChange={(e) => setConditions(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="activityLevel">
              Activity Level
            </label>
            <select
              id="activityLevel"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="">Select Activity Level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600"
          >
            Generate Plan
          </button>
        </form>

        {dietPlan && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Your Customized Diet Plan</h3>
            <ul className="list-disc pl-5 mt-3">
              <li><strong>Breakfast:</strong> {dietPlan.breakfast}</li>
              <li><strong>Lunch:</strong> {dietPlan.lunch}</li>
              <li><strong>Dinner:</strong> {dietPlan.dinner}</li>
              <li><strong>Snacks:</strong> {dietPlan.snacks}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nutrition;
