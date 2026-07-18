import app from "./app.js";
import prisma from "./config/db.js";
import { env } from "./config/env.js";

async function startServer() {
  try {
    await prisma.$connect();

    console.log("✅ PostgreSQL Connected");

    app.listen(env.PORT, () => {
      console.log(`🚀 Server running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error);

    process.exit(1);
  }
}

startServer();