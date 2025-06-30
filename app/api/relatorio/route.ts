import { NextResponse } from "next/server";
import { generateReport } from "@/lib/reportGenerate";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const report = await generateReport(body);

    return NextResponse.json({
      success: true,
      data: report,
    });
  } catch (error: any) {
    console.error('Erro na API /api/relatorio:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
