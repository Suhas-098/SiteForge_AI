import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from '../components/sections/Navbar';

const CommuntiyPage = () => {
    return (
        <>
            <Navbar />
            <SignedIn>
                <div>CommuntiyPage</div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    )
}

export default CommuntiyPage;   