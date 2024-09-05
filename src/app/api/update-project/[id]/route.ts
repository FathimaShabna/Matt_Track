import { NextResponse } from "next/server";
import prismadb from "../../../../../prisma/prisma";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();

  const updateExistingProject = params.id;

  const {
    name,
    resource,
    projectType,
    approvalStatus,
    projectStatus,
    duration,
    noofsprint,
    releaseDate,
  } = body;

  if (req.method === "POST") {
    try {
      // Validate releaseDate
      const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/;
      if (releaseDate && !isoDateRegex.test(releaseDate)) {
        return NextResponse.json({ message: "Invalid releaseDate format. Use ISO-8601 format (YYYY-MM-DDTHH:MM:SSZ)" }, {
          status: 400, // Bad request
        });
      }

      const updateProject = await prismadb.project.findUnique({
        where: { id: Number(updateExistingProject) },
      });

      if (!updateProject) {
        return NextResponse.json({ message: "Project not found" }, { status: 404 });
      }

      const updatedProject = await prismadb.project.update({
        where: { id: Number(updateExistingProject) },
        data: {
          name,
          resource,
          projectType,
          approvalStatus,
          projectStatus,
          duration,
          noofsprint,
          releaseDate,
        },
      });

      return NextResponse.json(updatedProject);
    } catch (error) {
      console.error("Error updating project:", error);
      return new NextResponse("Failed to update data", { status: 500 });
    }
  }
}
