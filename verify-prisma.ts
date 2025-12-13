
import { PrismaClient } from "./src/generated/prisma/client";

try {
  const prisma = new PrismaClient({ log: [] });
  console.log("Successfully instantiated PrismaClient");
  process.exit(0);
} catch (e) {
  console.error("Failed to instantiate PrismaClient:");
  console.error(e);
  process.exit(1);
}
