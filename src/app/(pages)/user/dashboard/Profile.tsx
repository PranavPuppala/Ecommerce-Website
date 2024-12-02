"use client";

import { OrderState, ReviewState } from "@/components/products/listing/states";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type ProductDiffState = {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  quantity: number;
  stock: number;
  category: string;
  brand: string;
  originalPrice: number;
  imageUrl: string[];
  orderId: string | null;
  userId: string | null;
  specs?: string;
  reviews?: string;
};

type ProfileProps = {
  email: string;
  firstName: string;
  lastName: string;
  savedProducts?: ProductDiffState[];
  reviews?: ReviewState[];
  orders?: OrderState[];
};

export const Profile = ({ email, firstName, lastName, orders, savedProducts }: ProfileProps) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="border m-32 my-16 w-1/3">
        <span className="text-lg flex flex-col gap-y-4 m-4">
          <p className="font-semibold">Hi {firstName.toUpperCase()}</p>
          <span className="text-left border-t-2 mx-2 pt-2">
            <button
              onClick={() =>
                signOut({
                  callbackUrl: "/", //go back to sign in page
                })
              }
              className="text-lg text-red-500 hover:text-red-700"
            >
              Sign Out
            </button>
            <p></p>
          </span>
        </span>
      </div>

      <div className="border m-32 my-16 w-2/3">
        <span className="text-lg flex flex-col gap-y-4 m-4">
          <p className="font-semibold">Recent Activity</p>
          <span className="text-left border-t-2 mx-2 pt-2 flex flex-col">
            <p>Saved Products</p>
            <div className="grid grid-cols-6 gap-4">
              {savedProducts
                ? savedProducts.map((product) => (
                    <div key={product.id} className="w-full h-48 w-48 flex items-center justify-center rounded">
                      <Link href={"/product/[id]"} as={`/product/${encodeURIComponent(product.id)}`}>
                        <Image
                          src={product.imageUrl[0]}
                          alt={product.name}
                          className="object-contain"
                          width={500}
                          height={500}
                          style={{
                            objectFit: "contain",
                            maxHeight: "100%",
                            maxWidth: "100%",
                          }}
                        />
                      </Link>
                    </div>
                  ))
                : null}
            </div>
            <div className="text-left border-t-2 mx-2 pt-2 flex flex-col">
              <p>Orders</p>
              <ul className="space-y-6">
                {orders
                  ? orders.map((order: any, index) => (
                      <li key={order.id} className="p-6 border-b flex flex-col space-y-4 bg-white">
                        <h2 className="text-2xl font-semibold">Order #{index + 1}</h2>
                        <p className="text-lg">Status: {order.status}</p>
                        <p className="text-lg">Time Estimate: {order.timeEstimate}</p>
                        <div className="gap-4 flex flex-row">
                          {order.products.map((item: any) => (
                            <div key={item.productId} className="flex items-center space-x-4">
                              {item.image && item.image.length > 0 && (
                                <Image
                                  src={item.image}
                                  alt={"Product"}
                                  className="w-20 h-20 object-contain"
                                  width={500}
                                  height={500}
                                  priority
                                />
                              )}
                              <div>
                                <p className="text-lg font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-xl font-bold text-green-600">Total: ${order.total.toFixed(2)}</p>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </span>
        </span>
      </div>
    </div>
  );
};
