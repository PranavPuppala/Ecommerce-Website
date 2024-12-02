import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";
import { ReviewState } from "@/components/products/listing/states";

// Create a product
export async function POST(req: NextRequest) {
  try {
    const { products } = await req.json();

    for (const product of products) {
      await prisma.product.create({
        data: {
          ...product,
          specs: {
            create: product.specs,
          },
          reviews: {
            create: product.reviews.map((review: ReviewState) => ({
              ...review,
              user: {
                connect: { id: product.userId },
              },
            })),
          },
        },
      });
    }
    return NextResponse.json(
      {
        message: "Successfully created products",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating multiple products", error);
    return NextResponse.json({ message: "Failed to create products" }, { status: 500 });
  }
}
