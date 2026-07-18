import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import cookieParser from "cookie-parser";
import contactRoutes from "./routes/contact.routes.js";
import { env } from "./config/env.js";
import githubRoutes 
from "./routes/github.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import authRoutes from "./routes/auth.routes.js";
import dashboardRoutes 
from "./routes/dashboard.routes.js";
import adminAuthRoutes from "./routes/adminAuth.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import projectRoutes
from "./routes/project.routes.js";
import adminProfileRoutes 
from "./routes/adminProfile.routes.js";
import adminProjectRoutes
from "./routes/adminProject.routes.js";
import messageRoutes
from "./routes/message.routes.js";
import path from "path";
import adminMessageRoutes 
from "./routes/adminMessage.routes.js";
import aiRoutes from "./routes/ai.routes.js";

import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();


// app.use(
// cors({

// origin:[
// "http://localhost:5173",
// "http://127.0.0.1:5173"
// ],

// credentials:true

// })
// );
app.use(
  cors({
    origin:[
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      env.CLIENT_URL
    ],
    credentials:true
  })
);
app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API Running 🚀",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    timestamp: new Date(),
  });
});
app.use(
"/api/contact",
contactRoutes
);
app.use(
"/api/github",
githubRoutes
);
app.use(
"/api/analytics",
analyticsRoutes
);
app.use(
"/api/auth",
authRoutes
);

// app.use(

// "/uploads",

// express.static(
// "uploads"
// )

// );

app.use(
"/uploads",
express.static(
path.join(__dirname,"../uploads"),
{
extensions:["png","jpg","jpeg","webp"],

setHeaders:(res)=>{

res.setHeader(
"Cross-Origin-Resource-Policy",
"cross-origin"
);

}
}
)
);
app.use(
"/api/admin",
adminAuthRoutes
);
app.use("/api/projects", projectRoutes);
app.use(

"/api/admin/projects",

adminProjectRoutes

);
app.use(

"/api/admin/messages",

adminMessageRoutes

);
app.use(

"/api/admin/profile",

adminProfileRoutes

);
app.use(

"/api/profile",

profileRoutes

);
app.use(
  "/api/dashboard",
  dashboardRoutes
);
app.use(
"/api/ai",
aiRoutes
);
export default app;