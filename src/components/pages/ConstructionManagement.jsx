import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

const projects = [
  {
    title: "Mixed-Use Commercial Development",
    type: "Commercial",
    location: "Victoria Island, Lagos",
    duration: "18 Months",
    image: "/images/projects/construction-1.jpg",
  },
  {
    title: "Luxury Residential Estate",
    type: "Residential",
    location: "Lekki, Lagos",
    duration: "14 Months",
    image: "/images/projects/construction-2.jpg",
  },
  {
    title: "Corporate Office Complex",
    type: "Commercial",
    location: "Ikoyi, Lagos",
    duration: "12 Months",
    image: "/images/projects/construction-3.jpg",
  },
  {
    title: "Private Luxury Residence",
    type: "Residential",
    location: "Banana Island",
    duration: "10 Months",
    image: "/images/projects/construction-4.jpg",
  },
  {
    title: "Educational Facility",
    type: "Institutional",
    location: "Abuja",
    duration: "16 Months",
    image: "/images/projects/construction-5.jpg",
  },
  {
    title: "Hospital Renovation",
    type: "Healthcare",
    location: "Port Harcourt",
    duration: "9 Months",
    image: "/images/projects/construction-6.jpg",
  },
];

function ConstructionManagement() {
  return (
    <section
      id="projects"
      className="bg-linear-to-b from-white to-gray-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">
        {/* Heading */}

        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Construction Management Projects
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Delivering construction projects with excellence through effective
            planning, coordination, quality control, and on-site leadership.
          </p>
        </div>

        {/* Projects */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

                <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  {project.type}
                </span>
              </div>

              {/* Content */}

              <div className="flex flex-col p-8">
                <h3 className="text-2xl font-bold leading-snug">
                  {project.title}
                </h3>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span>{project.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <FaCalendarAlt className="text-blue-500" />
                    <span>{project.duration}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <FaBuilding className="text-blue-500" />
                    <span>{project.type} Development</span>
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

export default ConstructionManagement;
