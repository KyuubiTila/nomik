import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", hash: "/#home" },
    { name: "About", hash: "/#about" },
    { name: "Services", hash: "/#services" },
    { name: "Projects", route: "/projects" },
    { name: "Contact", hash: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/#home"
          className="text-2xl font-bold text-blue-500"
        >
          NOMIK LTD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">

          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link.name}>
                {link.route ? (
                  <NavLink
                    to={link.route}
                    className={({ isActive }) =>
                      `border-b-2 pb-1 font-medium transition-all duration-300 ${
                        isActive
                          ? "border-blue-500 text-blue-500"
                          : "border-transparent text-gray-700 hover:border-blue-400 hover:text-blue-400"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <HashLink
                    smooth
                    to={link.hash}
                    className="border-b-2 border-transparent pb-1 font-medium text-gray-700 transition-all duration-300 hover:border-blue-400 hover:text-blue-400"
                  >
                    {link.name}
                  </HashLink>
                )}
              </li>
            ))}
          </ul>

          <HashLink
            smooth
            to="/meet-us"
            className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600 hover:shadow-lg"
          >
            MEET OUR TEAM
            <FaArrowRight className="text-sm" />
          </HashLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-gray-700 md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="space-y-4 bg-white px-6 py-6 shadow-lg md:hidden">

          {links.map((link) =>
            link.route ? (
              <NavLink
                key={link.name}
                to={link.route}
                onClick={() => setOpen(false)}
                className="block font-medium text-gray-700 transition hover:text-blue-500"
              >
                {link.name}
              </NavLink>
            ) : (
              <HashLink
                key={link.name}
                smooth
                to={link.hash}
                onClick={() => setOpen(false)}
                className="block font-medium text-gray-700 transition hover:text-blue-500"
              >
                {link.name}
              </HashLink>
            )
          )}

          <HashLink
            smooth
            to="/meet-us"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            MEET OUR TEAM
            <FaArrowRight />
          </HashLink>

        </div>
      )}
    </nav>
  );
}

export default Navbar;