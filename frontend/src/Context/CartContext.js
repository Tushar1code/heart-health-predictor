import React, { createContext, useState, useContext } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (medicine) => {
    setCart((prevCart) => [...prevCart, medicine]);
  };

  const removeFromCart = (medicineName) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== medicineName));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
