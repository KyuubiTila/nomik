import { useLayoutEffect } from "react";
import Projects from "../components/Projects";

function ProjectsPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="pt-2">
        <Projects />
        </main>
    </>
  );
}

export default ProjectsPage;