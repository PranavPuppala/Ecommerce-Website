"use client";

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/product/${id}`}>
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
          <p className="text-xl font-bold text-gray-900 mt-2">${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};