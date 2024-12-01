"use client";

import { ProductState } from "@/components/products/listing/states";
import { ProductCard } from "@/components/products/ProductCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ProductResponse = {
  message: string;
  data: ProductState[];
};

export default function CategoryProducts({ category }: { category: string }) {
  const router = useRouter();
  const [products, setProducts] = useState<ProductState[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
        method: "GET",
      });

      const response = (await result.json()) as ProductResponse;

      const products = response.data.filter((product: ProductState) => product.category === category);
      setProducts(products);

      if (!result.ok) {
        router.push("/not-found");
        throw new Error("Error fetching products");
      }
    } catch (error) {
      console.error(error);
      router.push("/not-found");
    }
  };

  return (
    <div className="">
      <div className="text-center mt-8">
        <h2 className="text-3xl font-semibold text-gray-800">{category}</h2>
        <p className="text-lg text-gray-500">Explore our selection of devices</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-16">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
