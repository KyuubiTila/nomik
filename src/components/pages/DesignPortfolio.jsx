import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPalette,
  FaHome,
} from "react-icons/fa";

const projects = [
  {
    title: "Modern Luxury Living Room",
    category: "Residential",
    location: "Lekki, Lagos",
    service: "Interior Design",
    image: "/images/projects/design-1.jpg",
  },
  {
    title: "Executive Office Interior",
    category: "Commercial",
    location: "Victoria Island",
    service: "Workspace Design",
    image: "/images/projects/design-2.jpg",
  },
  {
    title: "Luxury Bedroom Suite",
    category: "Residential",
    location: "Ikoyi",
    service: "Interior Styling",
    image: "/images/projects/design-3.jpg",
  },
  {
    title: "Restaurant Interior",
    category: "Hospitality",
    location: "Abuja",
    service: "Space Planning",
    image: "/images/projects/design-4.jpg",
  },
  {
    title: "Contemporary Kitchen",
    category: "Residential",
    location: "Banana Island",
    service: "Kitchen Design",
    image: "/images/projects/design-5.jpg",
  },
  {
    title: "Luxury Reception Area",
    category: "Commercial",
    location: "Lekki Phase 1",
    service: "Interior Architecture",
    image: "/images/projects/design-6.jpg",
  },
];

function DesignPortfolio() {
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

          <h2 className="mt-4 text-5xl font-bold">Interior Design Portfolio</h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Every space tells a story. Explore our portfolio of thoughtfully
            designed interiors where creativity, functionality, and timeless
            aesthetics come together.
          </p>
        </div>

        {/* Projects */}

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

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>

                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow">
                  {project.category}
                </span>
              </div>

              {/* Content */}

              <div className="flex flex-col p-8">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span>{project.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <FaPalette className="text-blue-500" />
                    <span>{project.service}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <FaHome className="text-blue-500" />
                    <span>{project.category}</span>
                  </div>
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

export default DesignPortfolio;
