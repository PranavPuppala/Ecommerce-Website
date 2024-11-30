import prisma from "@/db/db";
import { NextRequest, NextResponse } from "next/server";

// Fetch single product based on id, Ex. http://localhost:3000/api/product/[id]
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  try {
    const data = await prisma.product.findUnique({
      where: {
        id: id,
      },
      include: {
        specs: true,
      },
    });

    if (!data) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: `Successfully fetched product with ID: ${id}`, data: data }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching product with ID: ${id}\n`, error);
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}

// Update a single product based on id, and only fields that require updating
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  console.log(id);
}

// Delete single product based on id
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const data = await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ message: "Deleted data: ", data: data }, { status: 200 });
  } catch (error) {
    console.error(`Error deleting product with ID: ${id}`, error);
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}
