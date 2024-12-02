"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalCost, totalOriginalCost, totalSavings } = useCart();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div>
      {!isHydrated ? (
        <div>Loading...</div>
      ) : (
        <div className="p-6 flex flex-row gap-x-32">
          <div className="w-3/4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col">
                <span className="text-gray-600">Your cart is empty.</span>
                <span className="text-gray-600">Need a few ideas? Check out our top deals.</span>
              </div>
            ) : (
              <div>
                <ul className="space-y-4">
                  {cartItems.map((product) => (
                    <li key={product.id} className="flex justify-between items-center border p-4 bg-white rounded">
                      {/* Product Image container*/}
                      <div className="flex flex-row gap-x-8">
                        <div className="w-32 h-32 flex-shrink-0">
                          {typeof window !== "undefined" && (
                            <Image
                              src={product.imageUrl[0]}
                              alt={"Product"}
                              className="object-contain w-full h-full"
                              width={500}
                              height={500}
                              priority
                            />
                          )}
                        </div>

                        {/* Product Info container*/}
                        <div>
                          <Link href={"/product/[id]"} as={`/product/${encodeURIComponent(product.id)}`}>
                            <span className="text-blue-600 hover:underline">{product.name}</span>
                          </Link>
                          <div className="flex flex-col">
                            <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                            {product.price < product.originalPrice ? (
                              <div className="flex flex-col">
                                <span className="text-sm bg-red-500 inline-block text-white font-semibold max-w-fit px-1">
                                  Save ${(product.originalPrice - product.price).toFixed(2)}
                                </span>
                                <span className="text-sm">Was ${product.originalPrice.toFixed(2)}</span>
                              </div>
                            ) : (
                              <span></span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Cart Buttons */}
                      <div className="flex flex-col items-center px-8 gap-y-4 ml-4">
                        {/* Quantity Buttons */}
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, product.quantity - 1)}
                            className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                            disabled={product.quantity <= 1} // Disable button if quantity is 1
                          >
                            -
                          </button>
                          <span className="mx-2">{product.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                            className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                            disabled={product.quantity >= 99} // Disable button if quantity is 99
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                          className="text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="w-1/4 border p-6 bg-white rounded items-center flex flex-col gap-y-4">
            <div>
              <span className="font-semibold">Order Summary</span>
            </div>
            {cartItems.length === 0 ? (
              ""
            ) : (
              <div className="border-y w-full border-gray-300 flex flex-col justify-between">
                <div className="w-full flex flex-row justify-between">
                  <span className="">Original Price</span>
                  <span className="">${totalOriginalCost.toFixed(2)}</span>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <span className="">Total Savings</span>
                  <span className="">-${totalSavings.toFixed(2)}</span>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <span className="">Shipping</span>
                  <span className="">FREE</span>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <span className="">Estimated Sales Tax</span>
                  <span className="">${(totalCost * 0.0825).toFixed(2)}</span>
                </div>
              </div>
            )}

            <div className="flex flex-row justify-between w-full">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-lg font-bold">${totalCost.toFixed(2)}</span>
            </div>
            <button
              type="button"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => {}}
            >
              <Link href={cartItems.length === 0 ? "/" : ""}>
                {cartItems.length === 0 ? "Continue Shopping" : "Checkout"}
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
