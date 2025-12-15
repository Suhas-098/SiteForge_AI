import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ViewPage from './pages/ViewPage';
import MyProjectsPage from './pages/MyProjectsPage';
import PricingPage from './pages/PricingPage';
import PreviewPage from './pages/PreviewPage';
import CommuntiyPage from './pages/CommuntiyPage';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/edit" element={<MyProjectsPage />} />
          <Route path="/edit" element={<PricingPage />} />
          <Route path="/edit" element={<PreviewPage />} />
          <Route path="/edit" element={<CommuntiyPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
