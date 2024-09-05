import { NextResponse } from "next/server";
import prismadb from "../../../../../prisma/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const {
    firstName,
     phoneNumber,
    imageUrl,
    password,
    email,
    role,
    // linkedinAdress,
    // resume,
    // experience
  } = body.userData;
  // console.log('adfadsfasd')
  console.log(body.userData);


  console.log(body.userData.firstName);
  const id = Number(params.id);
  const exisistingUser = await prismadb?.user?.findFirst({
    where: {
      id: id,
    },
  });

  console.log(exisistingUser);
  if (!exisistingUser) {
    throw new NextResponse("User Not Found", { status: 400 });
  }

  try {
    const updatedUser = await prismadb?.user?.update({
      where: { id: id },
      data: {
        firstName:firstName,
        phoneNumber:phoneNumber,
        imageUrl:imageUrl,
        password:password,
        role:role,
        email:email
        ,
        // linkedinAdress,
        // resume,
        // experience
      },
    });
    return NextResponse.json(updatedUser);
  } catch (err) {
    console.error("Updated Error:", err);
    return new NextResponse("Internal Server Error:", { status: 500 });
  }
}
