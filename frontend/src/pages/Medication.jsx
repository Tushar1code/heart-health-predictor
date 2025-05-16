import React from "react";
import { useCart } from "../Context/CartContext";

const Medication = () => {
  const { addToCart, removeFromCart, cart } = useCart();

  const medicines = [
    { name: "Aspirin", description: "Prevents clots & reduces heart attack risk", type: "Antiplatelet", price: 50 },
    { name: "Statins", description: "Lowers cholesterol", type: "Lipid-lowering", price: 120 },
    { name: "Lisinopril", description: "Reduces blood pressure", type: "ACE Inhibitor", price: 90 },
    { name: "Metoprolol", description: "Controls heart rate", type: "Beta-Blocker", price: 110 },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-4">24/7 Medication</h1>
      <p className="text-lg text-center text-gray-700 mb-10">Get access to reliable heart medications anytime.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {medicines.map((medicine) => (
          <div key={medicine.name} className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-600">{medicine.name}</h2>
              <p className="text-gray-600 mt-2">{medicine.description}</p>
              <p className="text-sm text-gray-500 mt-1 italic">Type: {medicine.type}</p>
              <p className="text-green-600 font-semibold mt-3">₹ {medicine.price}</p>
            </div>
            <button
              onClick={() => addToCart(medicine)}
              className="mt-6 self-center bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-all"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="bg-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">No items in cart.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center py-2">
                  <span>{item.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-green-600">₹ {item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-right mt-4 font-semibold text-lg">
              Total: ₹ {cart.reduce((acc, item) => acc + item.price, 0)}
            </div>
            <div className="text-center">
              <button
                onClick={() => alert("Proceeding to Checkout...")}
                className="mt-6 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Medication;
