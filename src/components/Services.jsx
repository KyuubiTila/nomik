import {
  FaBuilding,
  FaHome,
  FaHardHat,
  FaFileContract,
  FaDraftingCompass,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: FaBuilding,
    title: "Building Construction",
    text: "Residential, commercial and industrial construction.",
  },
  {
    icon: FaHome,
    title: "Renovation & Remodeling",
    text: "Transforming existing buildings into modern spaces.",
  },
  {
    icon: FaHardHat,
    title: "Civil Engineering",
    text: "Roads, drainage and infrastructure projects.",
  },
  {
    icon: FaFileContract,
    title: "Project Management",
    text: "Planning, scheduling and execution.",
  },
  {
    icon: FaDraftingCompass,
    title: "Consultation & Planning",
    text: "Professional guidance from concept to completion.",
  },
  {
    icon: FaTools,
    title: "Maintenance Services",
    text: "Keeping properties in excellent condition.",
  },
];

function Services() {
  return (
    <section id="services" className=" py-24 ">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Services
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            What We Do
          </h2>

          <div className="mx-auto mt-4 h-1 w-40 rounded bg-blue-500" />

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-xl"
              >
                <Icon className="mb-8 text-5xl text-blue-500 transition group-hover:scale-110" />

                <h3 className="mb-4 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {service.text}
                </p>

                <button className="mt-8 text-3xl text-blue-500 transition group-hover:translate-x-2">
                  →
                </button>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Services;