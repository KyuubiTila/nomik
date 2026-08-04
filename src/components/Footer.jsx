import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

function Footer() {
  const quickLinks = [
    { name: "Home", to: "/#home" },
    { name: "About Us", to: "/#about" },
    { name: "Services", to: "/#services" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/#contact" },
  ];

  const services = [
    "Building Construction",
    "Renovation & Remodeling",
    "Civil Engineering",
    "Project Management",
    "Facility Maintenance",
  ];

  return (
    <footer id="footer" className="bg-blue-100 text-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-6">

        {/* Main Footer */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <HashLink
              smooth
              to="/#hero"
              className="text-4xl font-extrabold text-blue-600"
            >
              NOMIK LTD
            </HashLink>

            <p className="mt-6 leading-8 text-gray-600">
              NOMIK LTD is committed to delivering innovative, high-quality
              construction, engineering, architecture and project management
              solutions that stand the test of time.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://www.instagram.com/nomikltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <HashLink
                    smooth
                    to={link.to}
                    className="transition duration-300 hover:pl-2 hover:text-blue-600"
                  >
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="transition duration-300 hover:pl-2 hover:text-blue-600"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white p-3 shadow">
                  <FaPhoneAlt className="text-blue-600" />
                </div>

                <div>
                  <p className="font-semibold">
                    Phone
                  </p>

                  <p className="text-gray-600">
                    +234 701 319 1227
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white p-3 shadow">
                  <FaEnvelope className="text-blue-600" />
                </div>

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="text-gray-600">
                    info@nomikltd.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white p-3 shadow">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>

                <div>
                  <p className="font-semibold">
                    Office
                  </p>

                  <p className="text-gray-600">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-4 border-t border-blue-200"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-600">
              NOMIK LTD
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">

            <HashLink
              smooth
              to="/#home"
              className="text-sm transition hover:text-blue-600"
            >
              Privacy Policy
            </HashLink>

            <HashLink
              smooth
              to="/#home"
              className="text-sm transition hover:text-blue-600"
            >
              Terms & Conditions
            </HashLink>

            <HashLink
              smooth
              to="/#home"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
            >
              <FaArrowUp />
            </HashLink>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;