import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre Mí" },
  { to: "/expertise", label: "Especialidades" },
  { to: "/projects", label: "Proyectos" },
  { to: "/education", label: "Educación" },
  { to: "/awards", label: "Reconocimientos" },
  { to: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-primary-800 font-serif text-xl font-semibold">
          <Leaf className="h-5 w-5 text-primary-600" />
          <span>Melissa</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === to
                    ? "text-primary-700 bg-primary-50"
                    : "text-gray-600 hover:text-primary-700 hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === to
                      ? "text-primary-700 bg-primary-50"
                      : "text-gray-600 hover:text-primary-700 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
