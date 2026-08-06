import mainImage from "../assets/images/project1.jpg";
import topImage from "../assets/images/project2.jpg";
import bottomImage from "../assets/images/project3.jpg";
import { FaUsers } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 py-24"
    >
      {/* Background Blur */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-40"></div>

      <div className="mb-16 text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
          About Us
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          What We Stand For At Nomik Ltd
        </h2>

        <div className="mx-auto mt-4 h-1 w-100 rounded bg-blue-500" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-8 text-5xl font-bold leading-tight">
            Building Structures.
            <br />
            Building <span className="text-blue-500">Relationships.</span>
          </h2>

          <p className="mb-10 text-lg leading-8 text-gray-600">
            NOMIK LTD is a trusted construction company committed to turning
            ideas into lasting structures. We specialize in building,
            renovation, remodeling and civil engineering works with quality,
            integrity and innovation.
          </p>
          <a href="/blog">
            <button className="w-fit rounded-lg border border-blue-400 px-8 py-4 font-semibold transition hover:bg-blue-500 hover:text-white">
              LEARN MORE ABOUT US →
            </button>
          </a>
        </div>

        {/* Right */}
        <div className="relative grid grid-cols-3 gap-4">
          <img
            src={mainImage}
            alt=""
            className="col-span-2 h-full rounded-3xl object-cover"
          />

          <div className="space-y-4">
            <img
              src={topImage}
              alt=""
              className="h-48 w-full rounded-3xl object-cover"
            />

            <img
              src={bottomImage}
              alt=""
              className="h-48 w-full rounded-3xl object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-10 rounded-2xl bg-blue-500 p-6 text-white shadow-xl">
            <FaUsers className="mb-3 text-3xl" />

            <h4 className="text-xl font-bold">Our Mission</h4>

            <p className="mt-2 max-w-xs text-sm">
              To deliver exceptional construction services that improve lives
              and stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
