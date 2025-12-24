import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import router from "./routes/user.js";


dotenv.config();

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

app.use(express.json());

// ✅ Clerk middleware 
app.use(clerkMiddleware());


app.use("/api/user", router);



const PORT = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
    res.send("Hello Welcome to SiteForge!")
});

app.listen(PORT, () => {
    console.log(`server is alive and running on http://localhost:${PORT}`)
});

export default app;