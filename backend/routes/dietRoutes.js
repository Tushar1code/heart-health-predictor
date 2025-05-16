
import express from 'express';
const router = express.Router();


const generateDietPlan = (age, weight, conditions, activityLevel) => {
  
  let breakfast = 'Oatmeal with fruits';
  let lunch = 'Grilled chicken with veggies';
  let dinner = 'Salmon with quinoa';
  let snacks = 'Nuts and fruits';

  if (activityLevel === 'high') {
    lunch = 'Chicken salad with avocado';
    dinner = 'Lean beef with rice';
  } else if (activityLevel === 'low') {
    lunch = 'Vegetable soup';
    dinner = 'Vegetable stir-fry';
  }

  return {
    breakfast,
    lunch,
    dinner,
    snacks,
  };
};

// POST route to generate diet plan
router.post("/diet-plan", (req, res) => {
  const { age, weight, conditions, activityLevel } = req.body;

  if (!age || !weight || !activityLevel) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Generate diet plan based on inputs
  const dietPlan = generateDietPlan(age, weight, conditions, activityLevel);
  

  res.json(dietPlan);
});

export default router;
