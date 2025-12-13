import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connection = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(connection);
const prisma = new PrismaClient({ adapter });

export default prisma;
