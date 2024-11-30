"use client";
import { Banner } from "@/components/Banner";
import { ProductCard } from "@/components/products/ProductCard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ProductState = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

type ProductResponse = {
  message: string;
  data: ProductState[];
};

export default async function Home() {
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  // const session = await getServerSession(authOptions);
  // console.log(session)
  const fetchProducts = async () => {
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
        method: "GET",
      });

      const response = (await result.json()) as ProductResponse;

      setProducts(response.data);

      if (!result.ok) {
        router.push("/not-found");
        throw new Error("Error fetching donor");
      }
    } catch (error) {
      console.error(error);
      router.push("/not-found");
    }
  };

  const [products, setProducts] = useState<ProductState[]>([]);

  return (
    <div className="px-4 my-8">
      <Banner />
      {/* New Arrivals*/}
      <div className="text-center my-8">
        <h2 className="text-3xl font-semibold text-gray-800">New Arrivals</h2>
        <p className="text-lg text-gray-500">Explore the latest products</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            //description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
