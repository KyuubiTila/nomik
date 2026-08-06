import { FaLinkedinIn, FaEnvelope, FaAward, FaLink } from "react-icons/fa";

import team from "../data/teams";

function MeetOurTeam() {
  return (
    <section className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Team
          </p>

          <h1 className="mt-4 text-5xl font-bold">Meet Our Experts</h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Our success is driven by an experienced team of architects,
            engineers, project managers and construction professionals committed
            to delivering exceptional projects.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h2 className="text-2xl font-bold">{member.name}</h2>

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

                <div className="mt-auto flex gap-4 pt-8">
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

                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 transition hover:bg-blue-500 hover:text-white"
                  >
                    <FaLink />
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
