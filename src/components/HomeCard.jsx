import {
  FaArrowRight,
  FaBuilding,
  FaDraftingCompass,
  FaFileContract,
  FaHardHat,
  FaHome,
} from "react-icons/fa";
import heroImage from "../assets/images/project1.jpg";

function HomeCard() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background Blur */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-40"></div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Welcome to Nomik Ltd
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
            Building the Future With <br />
            <span className="block text-blue-500">Precision & Excellence</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Nomik Ltd delivers world-class architecture, construction, interior
            design, project management and real estate solutions tailored to
            residential and commercial developments.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">
            <a href="#contact">
              <button className="flex items-center gap-3 rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-600">
                Contact Us
                <FaArrowRight />
              </button>
            </a>

            <a href="/projects">
              <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-500">
                View Projects
              </button>
            </a>
          </div>

          {/* Services */}

          <div className="mt-12 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow">
              <FaDraftingCompass className="text-blue-500" />
              <span>Architecture</span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow">
              <FaHardHat className="text-blue-500" />
              <span>Construction</span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow">
              <FaHome className="text-blue-500" />
              <span>Interior Design</span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow">
              <FaFileContract className="text-blue-500" />
              <span>Project Management</span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow">
              <FaBuilding className="text-blue-500" />
              <span>Real Estate</span>
            </div>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">23+</h2>

              <p className="mt-2 text-slate-500">Projects Delivered</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900">6+</h2>

              <p className="mt-2 text-slate-500">Years Experience</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900">50+</h2>

              <p className="mt-2 text-slate-500">Professionals</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative">
          <img
            src={heroImage}
            alt="Nomik Ltd"
            className="h-175 w-full rounded-[40px] object-cover shadow-2xl"
          />

          <div className="absolute bottom-8 left-8 rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur">
            <p className="text-sm uppercase tracking-widest text-blue-500">
              Excellence in Every Project
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Designing. Building. Managing.
            </h3>

            <p className="mt-3 max-w-sm text-slate-600">
              Delivering exceptional spaces through innovation, collaboration
              and uncompromising quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCard;
