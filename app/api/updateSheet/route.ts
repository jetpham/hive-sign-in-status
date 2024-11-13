// app/api/updateSheet/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(request: Request) {
    try {
        const { updatedData } = await request.json(); // Extract updated data from the request body

        console.log('Received updated data:', updatedData);
        const prisma = new PrismaClient();

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

        // Respond with a success message
        return NextResponse.json({ message: 'Data received successfully' });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
    }
}

