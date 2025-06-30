// lib/GenerateReport.ts

import prisma from './Prisma'; // Importa a instância do Prisma Client
import TableRelationships from './table-relationships'; // Importa as definições de relacionamento

interface ReportParams {
  tables: string[]; // Array de tabelas a serem consultadas (apenas a primeira será a base)
  fields: { [key: string]: string[] }; // Campos a serem selecionados para cada tabela/relação
  filters?: { [key: string]: any }; // Filtros a serem aplicados à tabela base
  limit?: number; // Limite de registros para a tabela base
}

export async function generateReport(params: ReportParams) {
  const { tables, fields, filters, limit } = params;

  console.log('GenerateReport: Iniciando com params:', JSON.stringify(params, null, 2));

  if (!tables || tables.length === 0) {
    console.error("GenerateReport: Erro - 'tables' está vazio ou inválido.");
    throw new Error("Pelo menos uma tabela deve ser especificada em 'tables'.");
  }

  const baseTableNameInput = tables[0];
  const baseTableNameCapitalized = baseTableNameInput.charAt(0).toUpperCase() + baseTableNameInput.slice(1);
  const prismaModelName = baseTableNameInput.toLowerCase();

  console.log(`GenerateReport: Tabela Base: ${baseTableNameInput}, Capitalizada: ${baseTableNameCapitalized}, Modelo Prisma: ${prismaModelName}`);

  if (!(prisma as any)[prismaModelName]) {
    console.error(`GenerateReport: Erro - Modelo Prisma '${baseTableNameInput}' não encontrado.`);
    throw new Error(`Modelo Prisma '${baseTableNameInput}' não encontrado no cliente Prisma.`);
  }

  const selectOptions: { [key: string]: any } = {};

  // ✅ CORREÇÃO: único bloco que processa campos da tabela principal em lowercase
  if (fields[baseTableNameInput] && fields[baseTableNameInput].length > 0) {
    console.log(`GenerateReport: Processando campos para ${baseTableNameInput}:`, fields[baseTableNameInput]);
    fields[baseTableNameInput].forEach((field: string) => {
      const prismaField = field.toLowerCase();
      selectOptions[prismaField] = true;
    });
  } else {
    console.log(`GenerateReport: Nenhum campo específico para ${baseTableNameInput}.`);
  }

  // Processar campos de tabelas relacionadas (select aninhado)
  for (const fieldKey in fields) {
    if (fieldKey !== baseTableNameInput) {
      console.log(`GenerateReport: Processando chave de campo para relação: ${fieldKey}`);

      const modelRelationships = TableRelationships[baseTableNameCapitalized];
      if (!Array.isArray(modelRelationships) || modelRelationships.length === 0) {
        console.warn(`GenerateReport: Aviso - Nenhuma ou inválida relação definida em TableRelationships para a tabela '${baseTableNameCapitalized}'.`);
        continue;
      }

      let relationshipNameInPrisma: string | undefined;
      let foundRelationshipMapping = false;

      for (const relTableDef of modelRelationships) {
        if (relTableDef.toLowerCase() === fieldKey.toLowerCase()) {
          relationshipNameInPrisma = relTableDef.toLowerCase();
          foundRelationshipMapping = true;
          break;
        }
        if ((relTableDef.toLowerCase() + 's') === fieldKey.toLowerCase()) {
          relationshipNameInPrisma = relTableDef.toLowerCase() + 's';
          foundRelationshipMapping = true;
          break;
        }
      }

      if (foundRelationshipMapping && relationshipNameInPrisma) {
        console.log(`GenerateReport: Relação '${fieldKey}' mapeada para Prisma como '${relationshipNameInPrisma}'.`);
        const relatedSelect: { [key: string]: boolean } = {};
        fields[fieldKey].forEach(relField => {
          relatedSelect[relField.toLowerCase()] = true; // garante lowercase também para relacionamentos
        });
        selectOptions[relationshipNameInPrisma] = { select: relatedSelect };
      } else {
        console.warn(`GenerateReport: Aviso - Chave de campo '${fieldKey}' no JSON não corresponde a um relacionamento conhecido para a tabela '${baseTableNameCapitalized}'.`);
      }
    }
  }

  const whereOptions: { [key: string]: any } = {};
  if (filters && filters[baseTableNameInput]) {
    console.log(`GenerateReport: Aplicando filtros para ${baseTableNameInput}:`, filters[baseTableNameInput]);
    Object.assign(whereOptions, filters[baseTableNameInput]);
  } else {
    console.log(`GenerateReport: Nenhum filtro para ${baseTableNameInput}.`);
  }

  try {
    const queryArgs: any = {
      where: whereOptions,
      take: limit,
    };

    if (Object.keys(selectOptions).length > 0) {
      queryArgs.select = selectOptions;
    }

    console.log(`GenerateReport: Executando consulta Prisma para '${prismaModelName}' com args:`, JSON.stringify(queryArgs, null, 2));

    const result = await (prisma as any)[prismaModelName].findMany(queryArgs);
    console.log('GenerateReport: Consulta Prisma concluída com sucesso.');

    return result;

  } catch (error: any) {
    console.error("GenerateReport: Erro crítico na consulta Prisma:", error);
    throw new Error(`Erro ao executar consulta no banco de dados: ${error.message}`);
  }
}
