import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const apiToken = request.headers.get('Authorization');
    const expectedToken = process.env.SHEETS_APP_SCRIPT_API_KEY;

    if (apiToken !== expectedToken) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/api/updateSheet', // Apply this middleware only to the updateSheet route
};
