import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import MeetUs from "./pages/MeetUs";
import ScrollToHash from "./components/ScrollToHash";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DesignPortfolio from "./components/pages/DesignPortfolio";
import ConstructionManagement from "./components/pages/ConstructionManagement";
import RealEstateManagement from "./components/pages/RealEstateManagement";
import InteriorProjects from "./components/pages/InteriorProjects";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/meet-us" element={<MeetUs />} />
        <Route
          path="/projects/design-portfolio"
          element={<DesignPortfolio />}
        />
        <Route
          path="/projects/construction-management"
          element={<ConstructionManagement />}
        />
        <Route
          path="/projects/real-estate-management"
          element={<RealEstateManagement />}
        />
        <Route
          path="/projects/interior-projects"
          element={<InteriorProjects />}
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
