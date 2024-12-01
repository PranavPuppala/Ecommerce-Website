import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

// Create a product
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.product.create({
      data: body,
    });
    return NextResponse.json(
      {
        message: "Successfully created product",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ message: "Failed to create product" }, { status: 500 });
  }
}

// Get all products
export async function GET() {
  try {
    const data = await prisma.product.findMany({
      include: {
        specs: true,
        reviews: true,
      },
    });

    if (!data) {
      return NextResponse.json({ message: "Products not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Successfully fetched all products: ", data: data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products: ", error);
    return NextResponse.json({ message: "Products not found" }, { status: 404 });
  }
}
