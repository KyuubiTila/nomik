import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-4xl text-center">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Welcome to Nomik Ltd
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight text-gray-900">
          Building the Future with Precision & Excellence
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          We deliver innovative construction, architecture and interior
          solutions that transform ideas into reality.
        </p>
        <a href="#contact">
          <button className="mt-10 inline-flex items-center gap-3 rounded-lg bg-blue-400 px-8 py-4 font-semibold hover:bg-blue-500 transition">
            Contact Us
            <FaArrowRight />
          </button>
        </a>
        

      </div>
    </section>
  );
}

export default Hero;