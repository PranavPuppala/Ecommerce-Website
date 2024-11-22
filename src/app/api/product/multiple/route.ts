import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

// Create a product
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.product.createMany({
      data: body,
    });
    return NextResponse.json(
      {
        message: "Successfully created products",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating multiple products", error);
    return NextResponse.json({ message: "Failed to create products" }, { status: 500 });
  }
}
