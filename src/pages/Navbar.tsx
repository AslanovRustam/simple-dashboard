import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkStyle = (path: string) =>
    `block px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition ${
      pathname === path ? "bg-blue-600 text-white" : "bg-blue-100 text-gray-800"
    }`;

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="text-2xl font-bold text-black-700">🏭 ManufDash</div>
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-2xl text-gray-700"
        >
          ☰
        </button>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link to="/dashboard" className={linkStyle("/dashboard")}>
            Dashboard
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            to="/"
            className={linkStyle("/")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={linkStyle("/dashboard")}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
