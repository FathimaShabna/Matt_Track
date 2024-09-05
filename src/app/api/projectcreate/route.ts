import { NextResponse } from "next/server";
import prismadb from "../../../../prisma/prisma"; 

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Request Body:", body);

        const { name,  releaseDate, duration, resource, projectType, approvalStatus, projectStatus, noofsprint } = body;

        const isoReleaseDate = new Date(releaseDate).toISOString()

        const projectData = await prismadb.project.create({
            data: {
                name,
                releaseDate: isoReleaseDate,
                duration,
                resource,
                projectType,
                approvalStatus,
                projectStatus,
                noofsprint,
            },
        });

        console.log("Project Data:", projectData);
        return NextResponse.json(projectData);
    } catch (error) {
        console.error("Data Fetching Error:", error);
        return new NextResponse("Failed to create data", { status: 500 });
    }
}
