import {
  FaLinkedinIn,
  FaEnvelope,
  FaAward,
} from "react-icons/fa";

import ceo from "../assets/images/team1.jpg";
import architect from "../assets/images/team2.jpg";
import engineer from "../assets/images/team3.jpg";
import pm from "../assets/images/team4.jpg";
import qs from "../assets/images/team5.png";
import interior from "../assets/images/team6.jpg";

const team = [
  {
    image: ceo,
    name: "OnumaraNatty Michael ",
    role: "Managing Director / CEO",
    qualification: "B.Tech Building Technology • COREN • PMP • NIOB",
    description:
      "Over 7 years of experience leading large-scale residential, commercial and infrastructure projects across Nigeria.",
  },
  {
    image: architect,
    name: "Bldr. Akingbade Ayotunde Jospeh",
    role: "Creative Director",
    qualification: "M.Sc Project Management • PMP ",
    description:
      "Specializes in innovative architectural design, sustainable development and BIM implementation.",
  },
  {
    image: engineer,
    name: "Blessing Adelanke",
    role: "Senior Structural Engineer",
    qualification: "B.Eng Structural Engineering • COREN",
    description:
      "Expert in reinforced concrete, steel structures and complex foundation engineering.",
  },
  {
    image: pm,
    name: "Akinola Oluwaseyi",
    role: "Project Manager",
    qualification: "B.Tech Building • PMP",
    description:
      "Coordinates multidisciplinary teams, ensuring projects are delivered on time and within budget.",
  },
  {
    image: qs,
    name: "Oseni Kunle",
    role: "Quantity Surveyor",
    qualification: "B.Sc Quantity Surveying • NIQS",
    description:
      "Responsible for project costing, procurement planning and financial control.",
  },
  {
    image: interior,
    name: "Ayenuro Adeola",
    role: "Interior Designer",
    qualification: "B.A Interior Design",
    description:
      "Creates functional and elegant interior spaces that combine aesthetics with practicality.",
  },
];

function MeetOurTeam() {
  return (
    <section className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Team
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Meet Our Experts
          </h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Our success is driven by an experienced team of architects,
            engineers, project managers and construction professionals
            committed to delivering exceptional projects.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {team.map((member) => (

            <div
              key={member.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h2 className="text-2xl font-bold">
                  {member.name}
                </h2>

                <p className="mt-2 font-semibold text-blue-500">
                  {member.role}
                </p>

                <div className="mt-5 flex items-center gap-2 rounded-xl bg-blue-50 p-3">

                  <FaAward className="text-blue-500" />

                  <span className="text-sm font-medium">
                    {member.qualification}
                  </span>

                </div>

                <p className="mt-6 leading-7 text-gray-600">
                  {member.description}
                </p>

                <div className="mt-8 flex gap-4">

                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 transition hover:bg-blue-500 hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 transition hover:bg-blue-500 hover:text-white"
                  >
                    <FaEnvelope />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default MeetOurTeam;