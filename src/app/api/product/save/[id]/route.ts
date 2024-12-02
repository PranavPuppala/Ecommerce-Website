import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export async function POST(req: NextRequest, { params }: { params: { id: string; productId: string } }) {
  const { id } = await params;
  const { productId } = await req.json();

  try {
    // Check if the product is already saved by the user
    const user = await prisma.user.findUnique({
      where: { id: id },
      include: { savedProducts: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not fount" }, { status: 404 });
    }

    const productExists = user.savedProducts.some((product) => product.id === productId);

    if (productExists) {
      // If the product is already saved, unsave it
      await prisma.user.update({
        where: { id: id },
        data: {
          savedProducts: {
            disconnect: { id: productId },
          },
        },
      });
    } else {
      // If the product is not saved, save it
      await prisma.user.update({
        where: { id: id },
        data: {
          savedProducts: {
            connect: { id: productId },
          },
        },
      });
    }

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save/unsave product" }, { status: 500 });
  }
}
