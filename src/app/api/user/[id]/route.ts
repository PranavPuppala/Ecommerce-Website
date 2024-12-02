import prisma from "@/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  try {
    const data = await prisma.user.findUnique({
      where: { id: id },
      include: { reviews: true, orders: true, savedProducts: true },
    });

    if (!data) {
      return NextResponse.json({ message: "not found" }, { status: 404 });
    }

    return NextResponse.json({ message: `Successfully fetched`, data: data }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching\n`, error);
    return NextResponse.json({ message: "not found" }, { status: 404 });
  }
}
