import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className=" py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold">Featured Projects</h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
