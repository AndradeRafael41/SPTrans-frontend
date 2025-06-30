// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Declaração global para evitar que o Next.js crie novas instâncias do PrismaClient
// a cada hot reload em desenvolvimento.
declare global {
  var prisma: PrismaClient | undefined;
}

// Inicializa a instância do PrismaClient.
// Reutiliza a instância global existente em desenvolvimento, ou cria uma nova.
const prisma = global.prisma || new PrismaClient();

// Em ambiente de desenvolvimento, armazena a instância no objeto global
// para que seja reutilizada em futuros hot reloads.
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
