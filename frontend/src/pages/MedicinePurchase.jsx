import React, { useState, useEffect } from "react";
import axios from "axios";

const MedicationPage = () => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); 
  const [orderProcessing, setOrderProcessing] = useState(false);

  useEffect(() => {
    
    axios.get("http://localhost:5000/api/medicines")
      .then((response) => {
        setMedicines(response.data);
      })
      .catch((error) => console.error("Error fetching medicines", error));
  }, []);

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  const handleOrder = async () => {
    if (!user) {
      alert("Please log in to complete your purchase");
      return;
    }

    setOrderProcessing(true);

    try {
      
      const orderData = {
        userId: user.id,
        medicines: cart,
        totalAmount: cart.reduce((acc, med) => acc + med.price, 0),
      };

      await axios.post("http://localhost:5000/api/orders", orderData);
      alert("Order placed successfully!");
      setCart([]); // Clear the cart after the order
    } catch (error) {
      console.error("Error placing order", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setOrderProcessing(false);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-indigo-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        24/7 Medication
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines.map((medicine) => (
          <div key={medicine._id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">{medicine.name}</h3>
            <p className="text-gray-600">{medicine.description}</p>
            <p className="text-lg font-bold text-green-600">₹ {medicine.price}</p>
            <button
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-4"
              onClick={() => addToCart(medicine)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold text-indigo-600">Your Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-600">No items in your cart</p>
        ) : (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between py-2">
                  <span>{item.name}</span>
                  <span>₹ {item.price}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold mt-4">
              Total: ₹ {cart.reduce((acc, item) => acc + item.price, 0)}
            </p>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              onClick={handleOrder}
              disabled={orderProcessing}
            >
              {orderProcessing ? "Processing..." : "Place Order"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicationPage;
