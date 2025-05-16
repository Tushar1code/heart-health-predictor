import React from "react";
import { useCart } from "../Context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    alert("Checkout successful! Thank you for your purchase.");
    clearCart();
  };

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-100 to-purple-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Checkout</h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between py-3">
                  <span>{item.name}</span>
                  <span>₹ {item.price}</span>
                </li>
              ))}
            </ul>
            <p className="text-right font-bold text-lg mb-4">
              Total: ₹ {cart.reduce((acc, item) => acc + item.price, 0)}
            </p>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-all"
            >
              Complete Purchase
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
