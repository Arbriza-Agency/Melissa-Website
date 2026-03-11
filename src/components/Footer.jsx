import { Link } from "react-router-dom";
import { Leaf, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-serif text-xl font-semibold mb-4">
              <Leaf className="h-5 w-5 text-primary-400" />
              <span>Melissa</span>
            </Link>
            <p className="text-primary-200/70 text-sm leading-relaxed max-w-xs">
              Economista y especialista en sostenibilidad comprometida con estrategias climáticas y desarrollo global.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "Sobre Mí" },
                { to: "/expertise", label: "Especialidades" },
                { to: "/projects", label: "Proyectos" },
                { to: "/education", label: "Educación" },
                { to: "/contact", label: "Contacto" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-primary-200/70 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contacto@melissa.com" className="flex items-center gap-2 text-sm text-primary-200/70 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  contacto@melissa.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-200/70 hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800/50 text-center">
          <p className="text-xs text-primary-200/50">
            &copy; {new Date().getFullYear()} Melissa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
