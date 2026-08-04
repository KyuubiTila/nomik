import { FaArrowRight } from "react-icons/fa";

function ProjectCard({ project, reverse }) {
  return (
    <div
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="overflow-hidden rounded-3xl">


         <img href={project.link}
          className="inline-flex items-center gap-3 border-b-2 border-black pb-1 font-semibold transition hover:text-blue-500 hover:border-blue-500"
        
          src={project.image}
          alt={project.title}
          className="h-125 w-full object-cover transition duration-500 hover:scale-105"
        />
        
      </div>

      {/* Content */}
      <div className="relative">

        <span className="absolute -left-2 -top-15 text-6xl font-black text-blue-400">
          {project.id}
        </span>


        <h3 className="mb-2 text-5xl font-bold">
          {project.title}
        </h3>

        <a
          href={project.link}
          className="inline-flex items-center mt-2 gap-3 border-b-2 border-black pb-1 font-semibold transition hover:text-blue-500 hover:border-blue-500"
        >
          EXPLORE PROJECT
          <FaArrowRight />
        </a>

      </div>
    </div>
  );
}

export default ProjectCard;