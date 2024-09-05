import { NextRequest, NextResponse } from "next/server";
import prismadb from "../../../../prisma/prisma";



export async function GET(req:NextRequest){

    if(req.method === 'GET'){
        try{
            const getprojectData= await prismadb?.project?.findMany();
            return NextResponse.json(getprojectData)
        } catch (error) {
                console.error('Error fetching projects:', error);
                return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
              }
  
}
}



