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
        project: updatedData["What Project(s)/Class are you working on?"],
        areas: updatedData["Area(s) of use"],
        name: updatedData["Name"],
        major: updatedData["Major"],
        opinion: updatedData["Opinions about this form? Let us know"],
        duration: updatedData["Anticipated duration of use"],
        timestamp: new Date(updatedData["Timestamp"]),
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
