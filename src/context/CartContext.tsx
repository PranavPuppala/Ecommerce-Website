"use client";

import React, { createContext, useContext, useState, useMemo } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  totalCost: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i));
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, Math.min(quantity, 99)) } : item))
    );
  };

  const totalCost = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
