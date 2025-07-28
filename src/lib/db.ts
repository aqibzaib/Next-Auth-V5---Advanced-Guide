// src/lib/db.ts

import { PrismaClient } from "@prisma/client";

declare global {
  // Make sure this matches: no `!` or stray `{}` braces
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
