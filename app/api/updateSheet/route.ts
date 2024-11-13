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
        project: updatedData["What Project(s)/Class are you working on?"][0],
        areas: updatedData["Area(s) of use"],
        name: updatedData["Name"][0],
        major: updatedData["Major"][0],
        opinion: updatedData["Opinions about this form? Let us know"][0],
        duration: updatedData["Anticipated duration of use"][0],
        timestamp: new Date(updatedData["Timestamp"][0]),
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
