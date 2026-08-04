import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function CTA() {
  return (
    <section
      id="contact"
      className="  py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Build Together
          </h2>

          <div className="mx-auto mt-4 h-1 w-50 rounded bg-blue-500"></div>
        </div>

        {/* CTA Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              <FaCheckCircle />
              Trusted by clients across Nigeria
            </span>

            <p className="mt-6 uppercase tracking-[0.3em] text-blue-500">
              Let's Build Something Great Together
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Have a <span className="text-blue-500">Project</span> in Mind?
              <br />
              Let's Bring Your Vision to Life.
            </h2>

            <p className="mt-8 max-w-xl leading-8 text-gray-600">
              Whether you're planning a residential, commercial, or industrial
              project, our experienced team is ready to transform your vision
              into reality. From concept to completion, we deliver quality,
              innovation, and excellence every step of the way.
            </p>

            <div className="flex flex-wrap gap-2">

              <div className="rounded-xl bg-white px-6 py-4 shadow">
                <h3 className="text-3xl font-bold text-blue-500">18+</h3>
                <p className="text-sm text-gray-500">
                  Projects Delivered
                </p>
              </div>

              <div className="rounded-xl bg-white px-6 py-4 shadow">
                <h3 className="text-3xl font-bold text-blue-500">100%</h3>
                <p className="text-sm text-gray-500">
                  Client Satisfaction
                </p>
              </div>

              

            </div>
          </div>

            {/* Contact Details */}
          <div className="w-full">

            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-xs font-semibold text-green-700">
              ● Available for New Projects
            </span>

            <h3 className="mt-5 text-3xl font-bold text-gray-900">
              Contact Details
            </h3>

            <p className="mt-3 max-w-md leading-7 text-gray-600">
              Speak with our team today and receive a free consultation for your
              next residential, commercial, or industrial project.
            </p>

            {/* Contact Grid */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">

              {/* Phone */}
              <div className="group flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition duration-300 group-hover:bg-blue-500">
                  <FaPhoneAlt className="text-xl text-blue-600 transition group-hover:text-white" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Phone
                  </p>

                  <p className="mt-2 font-semibold text-gray-800">
                    +234 701 319 1227
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition duration-300 group-hover:bg-blue-500">
                  <FaEnvelope className="text-xl text-blue-600 transition group-hover:text-white" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Email
                  </p>

                  <p className="mt-2 font-semibold text-gray-800">
                    info@nomikltd.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="group flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition duration-300 group-hover:bg-blue-500">
                  <FaMapMarkerAlt className="text-xl text-blue-600 transition group-hover:text-white" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Office
                  </p>

                  <p className="mt-2 font-semibold text-gray-800">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="group flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition duration-300 group-hover:bg-blue-500">
                  <FaClock className="text-xl text-blue-600 transition group-hover:text-white" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Working Hours
                  </p>

                  <p className="mt-2 font-semibold text-gray-800">
                    Mon – Fri
                  </p>

                  <p className="text-gray-500">
                    8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <button className="mt-12 flex items-center gap-3 rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl">
              GET A FREE QUOTE
              <FaArrowRight />
            </button>

            <p className="mt-5 text-sm text-gray-500">
              We usually respond within
              <span className="font-semibold text-blue-600">
                {" "}24 hours.
              </span>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;