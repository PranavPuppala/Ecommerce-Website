"use client";

import { ProductState } from "@/components/products/listing/states";
import React, { createContext, useContext, useState, useMemo } from "react";

interface CartContextType {
  cartItems: ProductState[];
  addToCart: (item: ProductState) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  totalCost: number;
  totalOriginalCost: number;
  totalSavings: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductState[]>([]);

  const addToCart = (item: ProductState) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, Math.min(quantity, 99)) } : item))
    );
  };

  const totalCost = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const totalOriginalCost = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
  }, [cartItems]);

  const totalSavings = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.originalPrice - item.price) * item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalCost, totalOriginalCost, totalSavings }}
    >
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
