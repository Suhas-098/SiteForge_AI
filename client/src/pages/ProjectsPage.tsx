import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const ProjectsPage = () => {
    return (
        <>
            <SignedIn>
                <div>ProjectsPage</div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    )
}

export default ProjectsPage;