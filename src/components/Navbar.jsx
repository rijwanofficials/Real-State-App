import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";
import { useAuthContext } from "../context/useAuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, handleLogout } = useAuthContext();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/buy", label: "Buy" },
    { to: "/rent", label: "Rent" },
    { to: "/sell", label: "Sell" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-[80px] py-[18px] bg-white shadow-sm">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="h-10 w-auto object-contain cursor-pointer" />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-[16px] font-medium">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `relative transition after:block after:h-[2px] after:bg-[#2563EB] after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#2563EB] after:w-full"
                    : "text-black hover:text-[#2563EB] after:w-0 hover:after:w-full"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop Auth Button */}
      <div className="hidden md:flex items-center gap-4">
        {!isLoggedIn ? (
          <Link
            to="/login"
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full text-[16px] font-semibold hover:bg-blue-700 transition"
          >
            Login / Register <FiArrowRight />
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-full text-[16px] font-semibold hover:bg-red-700 transition"
          >
            Logout
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-lg font-medium">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block transition ${isActive ? "text-[#2563EB]" : "text-black hover:text-[#2563EB]"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}

            {/* Mobile Auth Button */}
            <li>
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
                >
                  Login / Register <FiArrowRight />
                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition"
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export { Navbar };
