import { ChevronRightIcon, SparklesIcon, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";
import heroDots from "../assets/hero-section-dot-image.png";
import heroCard from "../assets/hero-section-card-image.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleGenerate = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/my-projects');
        }, 2000);
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center text-center bg-cover bg-center h-screen w-full relative" style={{ backgroundImage: `url(${heroDots})` }}>
                <a href="#" className="flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition">
                    <span className="bg-indigo-600 text-white text-xs px-3.5 py-1 rounded-full">
                        NEW
                    </span>
                    <p className="flex items-center gap-1 text-sm font-medium">
                        <span>Try 7 days free trial option </span>
                        <ChevronRightIcon size={16} />
                    </p>
                </a>
                <h1 className="text-[40px]/12 md:text-[54px]/16 font-semibold max-w-3xl mt-4 text-slate-900">
                    Build, launch and scale{" "}
                    <span className="bg-linear-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                        your Website
                    </span>
                    {" "}faster
                </h1>
                <p className="text-base text-slate-600 max-w-lg mt-5">Workflows that never miss. automation that helps your team do more, effortlessly.</p>
                <div className="flex items-center gap-4 mt-6">
                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 transition px-8 py-3 rounded-md text-white font-medium flex items-center justify-center min-w-[160px]"
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : "Get Started"}
                    </button>
                    <button
                        onClick={() => navigate('/pricing')}
                        className="flex items-center justify-center gap-2 border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition px-5 py-3 rounded-md text-indigo-600 font-medium bg-white"
                    >
                        <SparklesIcon size={16} />
                        <span>AI Features</span>
                    </button>
                </div>
                <img className="w-full max-w-xl mt-16 drop-shadow-2xl drop-shadow-blue-500/15 mx-auto rounded-lg" src={heroCard} alt="Hero Section Card Image" width={1000} height={500} fetchPriority="high" />
            </div>
        </>
    )
}

export default HomePage;