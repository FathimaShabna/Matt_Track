import { NextRequest, NextResponse } from "next/server";
import prismadb from "../../../../../prisma/prisma";

export async function PATCH(
  req: Request,
  // res: NextResponse,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const UpdatexcistingProject = params.id;

  const { name, code } = body;

  if (req.method === "PATCH") {
    try {
      const updateProject = await prismadb.project.findUnique({
        where: { id: Number(UpdatexcistingProject) },
      });

      // console.log(updateProject,"kkkk")

      const updateProjectDetails = await prismadb.project.update({
        where: { id: Number(UpdatexcistingProject) },
        data: {
          name,
          code,
          // startDate,
          // endDate,
        },
      });

      return NextResponse.json(updateProjectDetails);
    } catch (error) {
      console.error("Error Updating in Projects", error);
      return new NextResponse("Failed to Update Data", { status: 500 });
    }
  }
}
