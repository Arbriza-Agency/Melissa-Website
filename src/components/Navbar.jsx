import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Perfil" },
  { to: "/expertise", label: "Especialidades" },
  { to: "/projects", label: "Proyectos" },
  { to: "/education", label: "Educación" },
  { to: "/awards", label: "Reconocimientos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100/60"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-900 text-white">
            <Leaf className="h-4 w-4" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold text-primary-900 tracking-tight">Melissa Velásquez</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-primary-600 hidden sm:block">Economista · Sostenibilidad</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === to
                    ? "text-primary-900 bg-primary-50 font-semibold"
                    : "text-gray-500 hover:text-primary-900 hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="px-5 py-2 bg-primary-900 text-white text-sm font-semibold rounded-lg hover:bg-primary-800 transition-colors"
          >
            Contacto
          </Link>
        </div>

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
            {[...navLinks, { to: "/contact", label: "Contacto" }].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === to
                      ? "text-primary-900 bg-primary-50 font-semibold"
                      : "text-gray-600 hover:text-primary-900 hover:bg-gray-50"
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
