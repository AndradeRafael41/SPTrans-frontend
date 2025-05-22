import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try{
        const corredorList = await prisma.corredor.findMany()
        return NextResponse.json(corredorList);
    }catch(err){
        return NextResponse.json(
            {error:"Erro ao buscar"},
            {status: 500}
        )
    }

}