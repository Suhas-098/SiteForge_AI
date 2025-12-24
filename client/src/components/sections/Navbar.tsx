import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../navbar_data/navLinks";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { SignOutButton, SignedIn } from "@clerk/clerk-react";

export default function Navbar() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleGenerate = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/my-projects');
        }, 1000);
    };

    return (
        <nav className="fixed top-0 z-50 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-slate-200 bg-white/40 backdrop-blur">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img
                        className="h-9 w-auto shrink-0"
                        src={logo}
                        alt="Logo"
                        width={140}
                        height={40}
                    />
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-8 lg:gap-9 font-medium lg:pl-20">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className="hover:text-indigo-600"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/sign-in')}
                        disabled={loading}
                        className="hover:bg-slate-100 transition px-4 py-2 border border-indigo-600 rounded-md">
                        Sign in
                    </button>
                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 transition px-8 py-3 rounded-md text-white font-medium flex items-center justify-center min-w-[160px]"
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : "Get Started"}
                    </button>
                    {/* When user is signed IN */}
                    <SignedIn>
                        <SignOutButton>
                            <button>Logout</button>
                        </SignOutButton>
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
}
