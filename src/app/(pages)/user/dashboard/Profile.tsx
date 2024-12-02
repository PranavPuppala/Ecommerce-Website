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

type OrderDiffState = {
  id: string;
  products?: ProductDiffState[];
  total: number;
  createdAt: Date;
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
          </span>
        </span>
      </div>
    </div>
  );
};
