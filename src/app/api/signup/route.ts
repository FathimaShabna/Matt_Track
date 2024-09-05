import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import prismadb from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { firstName, phoneNumber, role, email, password } = body.data;

  try {
    const userdata = await prismadb?.user?.create({
      data: {
        firstName,
        email,
        password,
        role: "TEAMLEAD",
        phoneNumber,
      },
    });

    return NextResponse.json(userdata);
  } catch (error) {
    console.error("Error occured:", error);
    return new NextResponse("Failed to create data  ", { status: 500 });
  }
}
