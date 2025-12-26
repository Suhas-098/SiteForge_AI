import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const SyncUser = () => {
    const { isSignedIn, getToken } = useAuth();
    console.log("🟡 SyncUser rendered");

    useEffect(() => {
        if (!isSignedIn) return;

        const syncUser = async () => {
            const token = await getToken();

            await fetch("http://localhost:3000/api/user/sync", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
        };

        syncUser();
    }, [isSignedIn]);

    return null;
};

export default SyncUser;
