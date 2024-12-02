import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export async function POST(req: NextRequest) {
  try {
    const { products, total, status, timeEstimate, createdAt, userId } = await req.json();

    if (!products || !total || !status || !timeEstimate || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const newOrder = await prisma.order.create({
      data: {
        total,
        status,
        timeEstimate,
        createdAt: new Date(createdAt),
        userId,
        products: {
          create: products.map((product: any) => ({
            productId: product.productId,
            quantity: product.quantity,
            originalPrice: product.originalPrice,
            totalPrice: product.totalPrice,
            image: product.image,
          })),
        },
      },
    });

    // Return the created order as a response
    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
