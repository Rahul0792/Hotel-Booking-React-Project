// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg px-8 py-4 flex items-center justify-between">

      {/* ✅ LOGO */}
      <Link
        to="/"
        className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide"
      >
        HotelBooking
      </Link>

      {/* ✅ NAV LINKS */}
      <div className="hidden md:flex items-center space-x-10 font-medium text-gray-700">

        <NavLink
          to="/hotels"
          className={({ isActive }) =>
            `relative group transition ${
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }`
          }
        >
          Hotels
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
        </NavLink>

        <NavLink
          to="/restaurants"
          className={({ isActive }) =>
            `relative group transition ${
              isActive ? "text-green-600" : "hover:text-green-600"
            }`
          }
        >
          Restaurants
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all"></span>
        </NavLink>

        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            `relative group transition ${
              isActive ? "text-purple-600" : "hover:text-purple-600"
            }`
          }
        >
          Bookings
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all"></span>
        </NavLink>
      </div>

    </nav>
  );
}
