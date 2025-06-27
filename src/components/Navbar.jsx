import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="font-extrabold text-2xl text-emerald-700 tracking-tight">
        Atha's Crafty Creations
      </Link>
      <ul className="flex gap-6 text-base font-semibold">
        <li>
          <Link
            to="/"
            className={pathname === "/" ? "text-emerald-700 underline" : "text-gray-700 hover:text-emerald-700"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className={pathname === "/cart" ? "text-emerald-700 underline" : "text-gray-700 hover:text-emerald-700"}
          >
            Cart
          </Link>
        </li>
        <li>
          <Link
            to="/admin"
            className={pathname.startsWith("/admin") ? "text-emerald-700 underline" : "text-gray-700 hover:text-emerald-700"}
          >
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}
