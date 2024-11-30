"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ImagePanel } from "./ImagePanel";
import { InfoPanel } from "./InfoPanel";
import { ProductResponse, ProductState } from "./states";
import { DescriptionPanel } from "./DescriptionPanel";
import { HighlightsPanel } from "./Highlights";
import { ReviewsPanel } from "@/components/reviews/ReviewsPanel";

export const ProductDisplay = ({ id }: { id: string }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductState>({
    id: "",
    name: "",
    description: "",
    features: [],
    price: 0,
    quantity: 0,
    category: "",
    brand: "",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "",
    },
    originalPrice: 0,
    imageUrl: [],
    reviews: [],
  });

  const fetchProduct = async () => {
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
        method: "GET",
      });

      const response = (await result.json()) as ProductResponse;

      setProduct({
        id: response.data.id,
        name: response.data.name,
        description: response.data.description,
        features: response.data.features,
        price: response.data.price,
        quantity: response.data.quantity,
        category: response.data.category,
        brand: response.data.brand,
        specs: {
          processor: response.data.specs.processor || "",
          graphics: response.data.specs.graphics || "",
          memory: response.data.specs.memory || "",
          storage: response.data.specs.storage || "",
          displayType: response.data.specs.displayType || "",
          screenSize: response.data.specs.screenSize || "",
          screenResolution: response.data.specs.screenResolution || "",
          color: response.data.specs.color || "",
        },
        originalPrice: response.data.originalPrice,
        imageUrl: response.data.imageUrl,
        reviews: response.data.reviews,
      });

      if (!result.ok) {
        router.push("/not-found");
        throw new Error("Error fetching");
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      router.push("/not-found");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return isLoading ? (
    <div></div>
  ) : (
    <div className="px-48 py-32">
      <div className="flex flex-row items-start gap-x-[400px]">
        <ImagePanel imageUrls={product.imageUrl} />
        <InfoPanel
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          quantity={product.quantity}
          brand={product.brand}
          specs={product.specs}
          reviews={product.reviews}
        />
      </div>
      <div className="mt-20">
        {product.category === "Computers" || product.category === "Tablets" ? (
          <div className="my-4">
            <span className="font-semibold text-lg">Highlights</span>
            <div className="p-8 flex flex-row gap-x-4">
              <HighlightsPanel specs={product.specs} type="processor" category={product.category} />
              <HighlightsPanel specs={product.specs} type="graphics" category={product.category} />
              <HighlightsPanel specs={product.specs} type="memory" category={product.category} />
              <HighlightsPanel specs={product.specs} type="storage" category={product.category} />
              <HighlightsPanel specs={product.specs} type="screenSize" category={product.category} />
            </div>
          </div>
        ) : product.category === "Phones" ? (
          <div className="my-4">
            <span className="font-semibold text-lg">Highlights</span>
            <div className="p-8 flex flex-row gap-x-4">
              <HighlightsPanel specs={product.specs} type="processor" category={product.category} />
              <HighlightsPanel specs={product.specs} type="graphics" category={product.category} />
              <HighlightsPanel specs={product.specs} type="memory" category={product.category} />
              <HighlightsPanel specs={product.specs} type="storage" category={product.category} />
              <HighlightsPanel specs={product.specs} type="screenSize" category={product.category} />
            </div>
          </div>
        ) : (
          ""
        )}

        <DescriptionPanel description={product.description} features={product.features} specs={product.specs} />
      </div>
      <div className="mt-10">
        <span className="text-lg font-semibold">Reviews</span>
        <ReviewsPanel reviews={product.reviews} />
      </div>
    </div>
  );
};
