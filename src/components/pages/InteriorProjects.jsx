import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const projects = [
  {
    title: "Luxury Living Room",
    category: "Residential Interior",
    location: "Lekki, Lagos",
    image: "/images/projects/interior-1.jpg",
  },
  {
    title: "Modern Office Space",
    category: "Commercial Interior",
    location: "Victoria Island, Lagos",
    image: "/images/projects/interior-2.jpg",
  },
  {
    title: "Contemporary Bedroom",
    category: "Residential Interior",
    location: "Ikoyi, Lagos",
    image: "/images/projects/interior-3.jpg",
  },
  {
    title: "Restaurant Interior",
    category: "Hospitality",
    location: "Abuja",
    image: "/images/projects/interior-4.jpg",
  },
  {
    title: "Luxury Kitchen",
    category: "Residential Interior",
    location: "Banana Island",
    image: "/images/projects/interior-5.jpg",
  },
  {
    title: "Executive Office",
    category: "Commercial Interior",
    location: "Lekki Phase 1",
    image: "/images/projects/interior-6.jpg",
  },
];

function InteriorProjects() {
  return (
    <section
      id="projects"
      className="bg-linear-to-b from-gray-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-8">
        {/* Heading */}

        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold">Interior Design Projects</h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Explore a selection of our completed interior projects, carefully
            designed to blend functionality, elegance and timeless aesthetics.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

                <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow">
                  {project.category}
                </span>
              </div>

              {/* Content */}

              <div className="flex flex-col p-8">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <div className="mt-3 flex items-center gap-2 text-gray-500">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span>{project.location}</span>
                </div>

                <button className="mt-8 flex items-center gap-3 font-semibold text-blue-600 transition hover:gap-5">
                  View Project
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InteriorProjects;
