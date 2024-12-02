"use client";

import { ProductState } from "@/components/products/listing/states";
import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

interface CartContextType {
  cartItems: ProductState[];
  addToCart: (item: ProductState) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  totalCost: number;
  totalOriginalCost: number;
  totalSavings: number;
  totalQuantity: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductState[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: ProductState) => {
    // Calculate the max quantity based on the item's price
    const priceLimitQuantity = item.price > 1000 ? 3 : Math.floor(1000 / item.price);

    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      const currentQuantity = existingItem ? existingItem.quantity : 0;

      // If adding more than the price-based quantity limit, show an alert
      if (currentQuantity + 1 > priceLimitQuantity) {
        return prev;
      }

      // Check if the quantity exceeds available stock
      if (currentQuantity + 1 > item.stock) {
        return prev;
      }

      // Update cart items
      const updatedItems = existingItem
        ? prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...prev, { ...item, quantity: 1 }];

      // Update localStorage immediately
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));

      alert("added to cart");

      return updatedItems;
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) => {
      const updatedItems = prev.map((item) => {
        if (item.id === id) {
          // Calculate the max quantity based on the item's price
          const priceLimitQuantity = item.price > 1000 ? 3 : Math.floor(1000 / item.price);

          // Ensure the quantity is within bounds
          const updatedQuantity = Math.max(1, Math.min(quantity, 99));

          // Check if the updated quantity exceeds the price-based limit
          if (updatedQuantity > priceLimitQuantity) {
            return item;
          }

          // Check if the updated quantity exceeds available stock
          if (updatedQuantity > item.stock) {
            return item;
          }

          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });

      localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Update localStorage immediately
      return updatedItems;
    });
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

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalCost,
        totalOriginalCost,
        totalSavings,
        totalQuantity,
      }}
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
