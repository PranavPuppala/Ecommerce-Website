import Image from "next/image";
import Link from "next/link";
import { Rating } from "../rating/Rating";
import { ProductState } from "./listing/states";
import { useCart } from "@/context/CartContext";
import { CartFill } from "./listing/icons/ProductIcons";

type ProductProps = {
  product: ProductState;
  href?: string;
  addButton?: boolean;
};

export const ProductCard = ({ product, addButton }: ProductProps) => {
  const { addToCart } = useCart();

  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col h-90 m-4">
      {/* Image Container */}
      <Link href={"/product/[id]"} as={`/product/${encodeURIComponent(product.id)}`}>
        <div className="relative w-full h-60 flex justify-center items-center">
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
        </div>
      </Link>

      {/* Text Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* Title */}
        <Link href={"/product/[id]"} as={`/product/${encodeURIComponent(product.id)}`}>
          <span className="text-sm text-blue-600 hover:underline overflow-hidden text-ellipsis">{product.name}</span>
        </Link>

        <div className="mt-auto">
          {/* Star Rating */}
          <div className="flex items-center mt-2">
            <div className="flex items-center gap-x-1">
              <Rating
                ratingInPercent={averageRating * 20}
                iconSize="m"
                showOutOf={true}
                enableUserInteraction={false}
              />
              <span>({product.reviews.length})</span>
            </div>
          </div>
        </div>

        {/* Price and Savings */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
            <span className="text-3xl font-semibold">${product.price.toFixed(2)}</span>
            {product.price < product.originalPrice ? (
              <div className="flex gap-x-2">
                <span className="text-sm text-red-500 font-semibold">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
                <span className="text-sm text-neutral-500">Was ${product.originalPrice.toFixed(2)}</span>
              </div>
            ) : (
              <div className="flex gap-x-2 invisible">
                <span className="text-sm text-red-500 font-semibold">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
                <span className="text-sm text-neutral-500">Was ${product.originalPrice.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>
        {addButton ? (
          <button
            type="button"
            className=" my-2 w-full bg-blue-600 text-white font-semibold w-3/4 py-1    px-4 gap-x-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
            onClick={() => {
              addToCart(product);
              alert("Added item to cart");
            }}
          >
            <CartFill />
            <span>Add to Cart</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
