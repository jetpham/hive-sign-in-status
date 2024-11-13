// app/api/updateSheet/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { updatedData } = await request.json(); // Extract updated data from the request body

        // Process the updated data (e.g., cache it, update state, etc.)
        console.log('Received updated data:', updatedData);

        // Respond with a success message
        return NextResponse.json({ message: 'Data received successfully' });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
    }
}
