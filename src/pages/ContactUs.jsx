import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function ContactUs() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_5lufwfd",
        "template_bifar38",
        form.current,
        "baBoRXnoCfsMnVFWY",
      )
      .then(() => {
        setLoading(false);
        setMessage("✅ Your message has been sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        setLoading(false);
        setMessage("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24"
    >
      {/* Background */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-40"></div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-20 text-center">
          <h2 className="mt-4 text-5xl font-bold">Let's Build Together</h2>

          <div className="mx-auto mt-4 h-1 w-32 rounded bg-blue-500"></div>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT */}

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

            <div className="mt-12 space-y-8">
              {/* Phone */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <FaPhoneAlt className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <h4 className="font-semibold">+234 701 319 1227</h4>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <FaEnvelope className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <h4 className="font-semibold">nomikltdng@gmail.com</h4>
                </div>
              </div>

              {/* Address */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <FaMapMarkerAlt className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Office</p>
                  <h4 className="font-semibold">Lagos, Nigeria</h4>
                </div>
              </div>

              {/* Hours */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <FaClock className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Working Hours</p>
                  <h4 className="font-semibold">Monday - Friday</h4>

                  <p className="text-gray-500">8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="text-3xl font-bold">Send Us a Message</h3>

            <p className="mt-3 text-gray-600">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                  className="rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                  className="rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-500"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-500 py-4 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <FaArrowRight />}
              </button>

              {message && <p className="text-center font-medium">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
