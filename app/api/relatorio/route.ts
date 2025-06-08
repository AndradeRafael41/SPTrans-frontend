import { generateReport } from "@/lib/reportGenerate";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const dados = await generateReport(body);
    return NextResponse.json({ dados });
  } catch (error: any) {
    return NextResponse.json(
        { error: error.message }, 
        { status: 500 }
    );
  }
}