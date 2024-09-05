import { NextResponse } from "next/server";
import prismadb from "../../../../../prisma/prisma";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  const email = params.email;

  try {
    const getUserData = await prismadb?.user?.findUnique({
      where: {
        email,
      },
    });
    return NextResponse.json(getUserData);
  } catch (error) {
    console.error("Data Not Found:", error);
    return new NextResponse("Failed to Fetch Data", { status: 500 });
  }
}
