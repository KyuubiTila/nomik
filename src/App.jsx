import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import MeetUs from "./pages/MeetUs";

function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/meet-us" element={<MeetUs />} />
      </Routes>
    </>
  );
}

export default App;