import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { isLoaded, isSignedIn } = useUser();

    // Prevent flicker
    if (!isLoaded) return null;

    // Not logged in → redirect
    if (!isSignedIn) {
        return <Navigate to="/sign-in" replace />;
    }

    // Logged in → render child routes
    return <Outlet />;
};

export default ProtectedRoute;
