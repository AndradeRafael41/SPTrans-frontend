import { PrismaClient } from "@prisma/client";
import TableRelationships from "./table-relationships";


const prisma  = new PrismaClient();
const relationships = TableRelationships;

interface ReportParams {
    tables : string[],
    filters ?: Record<string,any>,
    fields ?:Record <string,string[]>
}


export async function generateReport({tables ,filters = {},fields = {}}:ReportParams){
    
    // check selected tables
    if(!Array.isArray(tables) || tables.length ===0){
        throw new Error('Select any table !');
    }

    const base_table = tables[0];
    const include : Record <string,any> = {};


    if(relationships[base_table]){
        for (const [relationship,related_table] of Object.entries(relationships[base_table])){
            if(tables.includes(related_table)){
                include[relationship] = true;
            }
        }
    }

    const select: Record<string,any> = {};
    if (fields[base_table]){
        for (const field of fields[base_table]){
            select[field]=true;
        }
    }

    const where = filters[base_table] || {};

    const result = await(prisma as any)[base_table.toLowerCase()].findMany({
        where,
        select: Object.keys(select).length > 0 || Object.keys(include).length > 0
            ?{
                ...select,
                ...include,
            }
            : undefined,

    });

    return result;

}