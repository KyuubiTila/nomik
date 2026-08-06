import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaBuilding,
  FaKey,
} from "react-icons/fa";

const properties = [
  {
    title: "Emerald Heights Apartments",
    type: "Residential",
    location: "Lekki Phase 1, Lagos",
    service: "Property Management",
    image: "/images/projects/estate-1.jpg",
  },
  {
    title: "Victoria Business Hub",
    type: "Commercial",
    location: "Victoria Island, Lagos",
    service: "Facility Management",
    image: "/images/projects/estate-2.jpg",
  },
  {
    title: "The Palms Residences",
    type: "Luxury Apartments",
    location: "Ikoyi, Lagos",
    service: "Estate Management",
    image: "/images/projects/estate-3.jpg",
  },
  {
    title: "Prime Office Towers",
    type: "Commercial",
    location: "Abuja",
    service: "Asset Management",
    image: "/images/projects/estate-4.jpg",
  },
  {
    title: "Maple Gardens Estate",
    type: "Residential Estate",
    location: "Port Harcourt",
    service: "Property Maintenance",
    image: "/images/projects/estate-5.jpg",
  },
  {
    title: "The Grand Plaza",
    type: "Mixed-Use Development",
    location: "Lekki, Lagos",
    service: "Real Estate Management",
    image: "/images/projects/estate-6.jpg",
  },
];

function RealEstateManagement() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-white to-gray-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">
        {/* Heading */}

        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold">Real Estate Management</h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Managing residential, commercial, and mixed-use developments with a
            focus on operational efficiency, tenant satisfaction, asset value,
            and long-term property performance.
          </p>
        </div>

        {/* Property Grid */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  {property.type}
                </span>
              </div>

              {/* Content */}

              <div className="flex flex-col p-8">
                <h3 className="text-2xl font-bold">{property.title}</h3>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span>{property.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <FaBuilding className="text-blue-500" />
                    <span>{property.service}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <FaKey className="text-blue-500" />
                    <span>{property.type}</span>
                  </div>
                </div>

                <button className="mt-8 flex items-center gap-3 font-semibold text-blue-600 transition hover:gap-5">
                  View Property
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

export default RealEstateManagement;
