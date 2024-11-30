import Link from "next/link";
import { Rating } from "../../rating/Rating";
import { CardboardBox, CartFill } from "./icons/ProductIcons";
import { handleShippingDate } from "./ShippingDate";
import { SpecState } from "./states";

export const InfoPanel = ({
  name,
  price,
  originalPrice,
  quantity,
  brand,
  specs,
}: {
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  brand: string;
  specs: SpecState;
}) => {
  return (
    <div className="flex flex-col w-1/3 min-w-[300px]">
      <h1 className="text-sm">
        <Link href="/" className="text-blue-600 hover:underline">
          <span className="font-normal"> {brand}</span>
        </Link>
      </h1>
      <h1 className="text-2xl font-semibold text-wrap">{name}</h1>
      <div className="flex flex-row gap-x-3 items-center my-6">
        <Rating ratingInPercent={3.4 * 20} iconSize="m" showOutOf={true} enableUserInteraction={false} />
        <h1 className="text-sm">
          <Link href="/" className="text-blue-600 font-semibold hover:underline">
            {3.4} <span className="font-normal"> {"(0 reviews)"}</span>
          </Link>
        </h1>
      </div>
      <div className="flex flex-col border-y border-gray-300">
        <span className="text-3xl font-semibold">${price}</span>
        {price < originalPrice ? (
          <div className="flex flex-col">
            <span className="bg-red-500 inline-block text-white font-semibold max-w-fit px-1">
              Save ${(originalPrice - price).toFixed(2)}
            </span>
            <span className="text-sm">Was ${originalPrice}</span>
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
              fill={quantity > 25 ? "#1c8c00" : quantity >= 1 ? "#d0d602" : "#e00202"}
              fillRule="evenodd"
              d={
                quantity >= 1
                  ? "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  : "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              }
              clipRule="evenodd"
            />
          </svg>

          <span>
            {quantity > 25 ? (
              <span className="text-lime-700">IN STOCK</span>
            ) : quantity >= 1 ? (
              <span className="text-yellow-500">LOW IN STOCK, ONLY {quantity} REMAINING</span>
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
            <span className="font-semibold">{handleShippingDate()}</span>
          </div>
        </div>

        <div className="flex gap-x-4 my-1">
          <button
            className="bg-blue-600 text-white font-semibold w-3/4 py-2 px-4 gap-x-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
            onClick={() => {
              alert("placeholder");
            }}
          >
            <CartFill />
            <span>Add to Cart</span>
          </button>
          <button
            className="border border-gray-300 text-black font-semibold w-1/4 py-2 px-4 rounded-md flex items-center justify-center gap-x-2 hover:border-gray-400"
            onClick={() => {
              alert("placeholder");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.75}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <span className="font-normal">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};
