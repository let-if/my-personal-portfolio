// import app from "./app.js";
// import prisma from "./config/db.js";
// import { env } from "./config/env.js";

// async function startServer() {
//   try {
//     await prisma.$connect();

//     console.log("✅ PostgreSQL Connected");

//    const PORT = process.env.PORT || 5000;

// app.listen(PORT,()=>{
//     console.log(`Server running on port ${PORT}`);
// });
//   } catch (error) {
//     console.error("❌ Database Connection Failed");
//     console.error(error);

//     process.exit(1);
//   }
// }

// startServer();
import app from "./app.js";
import prisma from "./config/db.js";
import { env } from "./config/env.js";

async function startServer() {
  try {
    await prisma.$connect();
    console.log("✅ PostgreSQL Connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error);
  }
}

// Only run local server if not executing in a serverless environment (like Vercel)
if (process.env.NODE_ENV !== "production") {
  startServer();
}

export default app;