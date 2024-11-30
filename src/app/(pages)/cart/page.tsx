"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalCost } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                      disabled={item.quantity <= 1} // Disable button if quantity is 1
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                      disabled={item.quantity >= 99} // Disable button if quantity is 99
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-lg font-bold">Total: ${totalCost.toFixed(2)}</h2>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;