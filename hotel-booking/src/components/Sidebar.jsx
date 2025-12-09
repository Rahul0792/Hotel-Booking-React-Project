import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(true);

  const linkClasses = (path) =>
    `block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
      pathname === path
        ? "bg-blue-600 text-white shadow-lg"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <>
      {/* ==== MOBILE TOGGLE BUTTON ==== */}
      <button
        className="lg:hidden fixed top-5 left-5 z-50 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition"
        onClick={() => setOpen(!open)}
      >
        <FaBars size={20} />
      </button>

      {/* ==== SIDEBAR ==== */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white/90 backdrop-blur-xl shadow-2xl p-6 w-64 transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* ==== LOGO / TITLE ==== */}
        <h2 className="text-3xl font-extrabold mb-10 text-blue-600 tracking-wide text-center">
          AMOUNT
        </h2>

        {/* ==== NAV LINKS ==== */}
        <nav className="space-y-3">
          <Link to="/dashboard" className={linkClasses("/dashboard")}>
            Dashboard
          </Link>
          <Link to="/hotels" className={linkClasses("/hotels")}>
            Hotels
          </Link>
          <Link to="/restaurants" className={linkClasses("/restaurants")}>
            Restaurants
          </Link>
          <Link to="/my-bookings" className={linkClasses("/my-bookings")}>
            My Bookings
          </Link>
          <Link to="/profile" className={linkClasses("/profile")}>
            Profile
          </Link>
          <Link to="/login" className={linkClasses("/login")}>
            Logout
          </Link>
        </nav>
      </div>
    </>
  );
}
