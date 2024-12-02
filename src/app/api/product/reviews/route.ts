import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const newReview = await prisma.review.create({
      data,
    });
    return NextResponse.json(newReview);
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json({ message: "Failed to create review" }, { status: 500 });
  }
}

export async function GET() {
  const reviews = await prisma.review.findMany();
  return NextResponse.json(reviews);
}
