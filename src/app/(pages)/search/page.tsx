"use client";
import { ProductState } from "@/components/products/listing/states";
import { ProductCard } from "@/components/products/ProductCard";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

type ProductResponse = {
  message: string;
  data: ProductState[];
};

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q")?.toLowerCase();

  const [products, setProducts] = useState<ProductState[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const [fuse, setFuse] = useState<Fuse<ProductState> | null>(null);

  const fuseOptions = {
    keys: ["name"], // Fields to search within
    threshold: 0.3, // Match accuracy (0.0 = exact match, 1.0 = match anything)
    ignoreLocation: true, // Ignore where the match occurs in the string
  };

  const fetchProducts = async () => {
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
        method: "GET",
      });

      const response = (await result.json()) as ProductResponse;

      const fuseInstance = new Fuse(response.data, fuseOptions);
      setFuse(fuseInstance);

      setProducts(response.data);

      if (!result.ok) {
        router.push("/not-found");
        throw new Error("Error fetching products");
      }
    } catch (error) {
      console.error(error);
      router.push("/not-found");
    }
  };

  useEffect(() => {
    if (fuse && searchQuery) {
      const results = fuse.search(searchQuery);
      setProducts(results.map((result) => result.item));
    }
  }, [fuse, searchQuery]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 px-48 py-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addButton />
        ))}
      </div>
    </div>
  );
}
