import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Expertise", to: "/expertise" },
  { label: "Projects", to: "/projects" },
  { label: "Education", to: "/education-research" },
  { label: "Awards", to: "/awards-certifications" },
];

function DesktopLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-[#E8410A] text-white"
            : "text-gray-400 hover:text-white"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function MobileLink({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-[#E8410A] text-white"
            : "text-gray-300 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-0">
      <nav className="mx-0 md:mx-6 mt-4 rounded-full bg-[#111] shadow-2xl">
        <div className="hidden md:flex items-center justify-between px-10 py-3">
          <span className="text-white font-bold text-sm tracking-widest uppercase opacity-60">
            Hello!
          </span>

          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <DesktopLink to={item.to} label={item.label} />
              </li>
            ))}
          </ul>

          <Link
            to="/"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs bg-[#E8410A]"
          >
            MV
          </Link>
        </div>

        <div className="md:hidden flex items-center justify-between px-5 py-3">
          <span className="text-white font-bold text-xs tracking-widest uppercase opacity-70">
            Hello!
          </span>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 px-4 pb-4">
            <ul className="space-y-1 pt-3">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <MobileLink to={item.to} label={item.label} onClick={() => setOpen(false)} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
