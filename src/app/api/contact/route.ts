



import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log('Contact form submission:', data);

  // In a real application, you would send an email or save the data to a database here.

  return NextResponse.json({ message: 'Message received' }, { status: 200 });
}
