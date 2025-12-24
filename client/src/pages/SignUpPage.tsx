import { SignUp } from "@clerk/clerk-react";
import heroDots from '../assets/hero-section-dot-image.png';


const SignUpPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-cover bg-center" style={{ backgroundImage: `url(${heroDots})` }}>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <SignUp />
            </div>
        </div>
    );
};

export default SignUpPage;
