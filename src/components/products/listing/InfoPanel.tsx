import Link from "next/link";
import { Rating } from "../../rating/Rating";
import { CardboardBox, CartFill } from "./icons/ProductIcons";
import { handleShippingDate } from "./ShippingDate";
import { ProductState, ReviewState, SpecState } from "./states";
import { useCart } from "@/context/CartContext";
import { useRef } from "react";
import SaveProductButton from "../SaveButton";
import { useSession } from "next-auth/react";

export const InfoPanel = ({
  name,
  price,
  originalPrice,
  quantity,
  stock,
  brand,
  specs,
  reviews,
  product,
}: {
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  stock: number;
  brand: string;
  specs: SpecState;
  reviews: ReviewState[];
  product: ProductState;
}) => {
  const { addToCart } = useCart();
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const { data: session } = useSession();

  const shippingDateRef = useRef<string>("");

  if (!shippingDateRef.current) {
    shippingDateRef.current = handleShippingDate();
  }

  return (
    <div className="flex flex-col w-1/3 min-w-[300px]">
      <span className="text-sm">
        <Link href={`/search?q=${brand}`} className="text-blue-600 hover:underline">
          <span className="font-normal"> {brand}</span>
        </Link>
      </span>
      <h1 className="text-2xl font-semibold text-wrap">{name}</h1>
      <div className="flex flex-row gap-x-3 items-center my-6">
        <Rating ratingInPercent={averageRating * 20} iconSize="l" showOutOf={true} enableUserInteraction={false} />
        <h1 className="text-sm">
          <Link href="#reviews" className="text-blue-600 font-semibold hover:underline">
            {averageRating.toFixed(1)} <span className="font-normal"> {`(${reviews.length} reviews)`}</span>
          </Link>
        </h1>
      </div>
      <div className="flex flex-col border-y border-gray-300">
        <span className="text-3xl font-semibold">${price.toFixed(2)}</span>
        {price < originalPrice ? (
          <div className="flex flex-col">
            <span className="bg-red-500 inline-block text-white font-semibold max-w-fit px-1">
              Save ${(originalPrice - price).toFixed(2)}
            </span>
            <span className="text-sm">Was ${originalPrice.toFixed(2)}</span>
          </div>
        ) : (
          <span></span>
        )}
      </div>
      <div className="mt-2">
        <div>
          {specs.screenSize ? (
            <span className="text-sm">
              Screen Size: <span className="font-semibold">{specs.screenSize}"</span>
            </span>
          ) : (
            <span></span>
          )}
        </div>
        <div>
          {specs.storage ? (
            <span className="text-sm">
              Total Storage Capacity: <span className="font-semibold">{specs.storage}</span>
            </span>
          ) : (
            <span></span>
          )}
        </div>
        <div>
          {specs.color ? (
            <span className="text-sm">
              Color: <span className="font-semibold">{specs.color}</span>
            </span>
          ) : (
            <span></span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 my-4">
        <div className="flex flex-row items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path
              fill={stock > 25 ? "#1c8c00" : stock >= 1 ? "#d0d602" : "#e00202"}
              fillRule="evenodd"
              d={
                stock >= 1
                  ? "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  : "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              }
              clipRule="evenodd"
            />
          </svg>

          <span>
            {stock > 25 ? (
              <span className="text-lime-700">IN STOCK</span>
            ) : stock >= 1 ? (
              <span className="text-yellow-500">LOW IN STOCK</span>
            ) : (
              <span className="text-red-500">0 IN STOCK</span>
            )}
          </span>
        </div>
        <div className="border-y border-gray-300">
          <div className="flex gap-x-1">
            <CardboardBox />
            <span className="font-semibold">FREE SHIPPING</span>
          </div>
          <div>
            <span>Get it by </span>
            <span className="font-semibold">{shippingDateRef.current}</span>
          </div>
        </div>

        <div className="flex gap-x-4 my-1">
          <button
            type="button"
            className="bg-blue-600 text-white font-semibold w-3/4 py-2 px-4 gap-x-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
            onClick={() => {
              addToCart(product);
            }}
          >
            <CartFill />
            <span>Add to Cart</span>
          </button>
          <SaveProductButton userId={session?.user.id} productId={product.id} />
        </div>
      </div>
    </div>
  );
};
