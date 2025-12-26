import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import router from "./routes/user.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();

const app = express();

/* ------------------- utils ------------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ------------------- middlewares ------------------- */
app.use(express.json());

// Clerk middleware 
app.use(
    clerkMiddleware({
        publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
        secretKey: process.env.CLERK_SECRET_KEY,
    })
);

/* ------------------- API routes ------------------- */
app.use("/api/user", router);

/* ------------------- Frontend (Vite build) ------------------- */
app.use(express.static(path.join(__dirname, "../client/dist")));

// SPA fallback (MUST be after API routes)
app.get("*", (req: Request, res: Response) => {
    res.sendFile(
        path.join(__dirname, "../../client/dist/index.html")
    );
});

/* ------------------- server ------------------- */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

export default app;
