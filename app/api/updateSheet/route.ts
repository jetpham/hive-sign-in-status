import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { updatedData } = await request.json();

    console.log("Received updated data:", updatedData);

    await prisma.updatedData.create({
      data: {
        name: updatedData.name,
        duration: updatedData.duration,
        areas: updatedData.areas,
        major: updatedData.major,
        project: updatedData.project,
        opinion: updatedData.opinion,
      },
    });

    // Revalidate the home page
    revalidatePath("/");

    return NextResponse.json({
      message: "Data received and page revalidated successfully",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 },
    );
  }
}
