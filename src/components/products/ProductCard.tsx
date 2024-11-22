import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  href?: string;
};

export const ProductCard = ({ id, name, description, price, imageUrl }: ProductProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <Link href={"/product/[id]"} as={`/product/${encodeURIComponent(id)}`}>
        <div className="relative w-full h-60 flex justify-center items-center">
          <Image
            src={imageUrl}
            alt={name}
            className="object-contain"
            width={190}
            height={160}
            style={{ height: "auto", width: "auto" }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">${price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
