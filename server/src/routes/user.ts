import { Router } from "express";
import { clerkClient, requireAuth } from "@clerk/express";
import prisma from "../lib/prisma.js";

const router = Router();

/**
 * Sync Clerk user with database
 */
router.post("/sync", requireAuth(), async (req, res) => {
    try {
        const clerkId = req.auth.userId;

        const clerkUser = await clerkClient.users.getUser(clerkId);

        const email = clerkUser.emailAddresses[0]?.emailAddress;
        const name =
            clerkUser.firstName ||
            clerkUser.username ||
            "User";

        if (!email) {
            return res.status(400).json({ error: "Email not found in Clerk" });
        }

        const user = await prisma.user.upsert({
            where: { clerkId },
            update: {},
            create: {
                clerkId,
                email,
                name,
                credits: 10,
                totalCreation: 0,
            },
        });

        return res.json(user);
    } catch (err: any) {
        console.error("❌ SYNC ERROR:", err);
        return res.status(500).json({ error: err.message });
    }
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
