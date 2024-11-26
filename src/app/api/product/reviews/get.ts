import { NextResponse } from "next/server";
import prisma from "@/db";

export async function GET() {
    const reviews = await prisma.review.findMany();
    return NextResponse.json(reviews);
}
