import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ViewPage from './pages/ViewPage';
import MyProjectsPage from './pages/MyProjectsPage';
import PricingPage from './pages/PricingPage';
import PreviewPage from './pages/PreviewPage';
import CommuntiyPage from './pages/CommuntiyPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-projects" element={<MyProjectsPage />} />
          <Route path="/projects/:Id" element={<ProjectsPage />} />
          <Route path="/view/:Id" element={<ViewPage />} />
          <Route path="/preview/:Id" element={<PreviewPage />} />
          <Route path="/preview/:Id/:VersionId" element={<PreviewPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/community" element={<CommuntiyPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
