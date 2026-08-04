import ProjectCard from "./ProjectCard";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";

function Projects() {
  const projects = [
    {
      id: "01",
      title: "Interior Design Portfolio",
      image: project1,
      link: "#",
    },
    {
      id: "02",
      title: "Real Estate Dashboard",
      image: project2,
      link: "#",
    },
    {
      id: "03",
      title: "Interior Projects",
      image: project3,
      link: "#",
    },
    {
      id: "04",
      title: "Construction Management",
      image: project4,
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className=" py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Projects
          </h2>

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