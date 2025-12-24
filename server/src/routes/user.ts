import { Router } from "express";
import { requireAuth } from "@clerk/express";
import prisma from "../lib/prisma.js";

const router = Router();

/**
 * Sync Clerk user with database
 */
router.post("/sync", requireAuth(), async (req, res) => {
    const clerkId = req.auth.userId;

    let user = await prisma.user.findUnique({
        where: { clerkId },
    });

    if (!user) {
        const { email, name } = req.body;

        user = await prisma.user.create({
            data: {
                clerkId,
                email,
                name,
                credits: 10,
                totalCreation: 0,
            },
        });
    }

    return res.json(user);
});

/**
 * Get current logged-in user
 */
router.get("/me", requireAuth(), async (req, res) => {
    const clerkId = req.auth.userId;

    const user = await prisma.user.findUnique({
        where: { clerkId },
    });

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
});

export default router;
