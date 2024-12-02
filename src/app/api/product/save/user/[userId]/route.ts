import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  const { userId } = await params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        savedProducts: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ savedProducts: user.savedProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "User not found" }, { status: 500 });
  }
}
