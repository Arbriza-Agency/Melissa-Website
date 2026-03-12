import { Link } from "react-router-dom";
import { Leaf, Linkedin, Mail, MapPin } from "lucide-react";

const sections = [
  { to: "/about", label: "Perfil Profesional" },
  { to: "/expertise", label: "Especialidades" },
  { to: "/projects", label: "Proyectos" },
  { to: "/education", label: "Educación e Investigación" },
  { to: "/awards", label: "Reconocimientos" },
  { to: "/contact", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
                <Leaf className="h-4 w-4 text-primary-300" />
              </div>
              <span className="font-serif text-xl font-semibold text-white">Melissa Velásquez</span>
            </Link>
            <p className="text-primary-200/70 text-sm leading-relaxed max-w-sm mb-6">
              Economista especializada en estrategia climática, desarrollo urbano sostenible y cooperación
              internacional. Impactando políticas públicas a escala global.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:melissa.velasquez@consultoria.com"
                className="flex items-center gap-2 text-sm text-primary-200/70 hover:text-white transition-colors w-fit">
                <Mail className="h-4 w-4 flex-shrink-0" />
                melissa.velasquez@consultoria.com
              </a>
              <a href="https://linkedin.com/in/melissavelasquez" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-200/70 hover:text-white transition-colors w-fit">
                <Linkedin className="h-4 w-4 flex-shrink-0" />
                linkedin.com/in/melissavelasquez
              </a>
              <span className="flex items-center gap-2 text-sm text-primary-200/70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Bogotá, Colombia · Disponible en remoto
              </span>
            </div>
          </div>

          {/* Nav column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-300/80 mb-5">
              Secciones
            </h4>
            <ul className="space-y-2.5">
              {sections.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-primary-200/70 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus areas column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-300/80 mb-5">
              Áreas de Enfoque
            </h4>
            <ul className="space-y-2.5">
              {[
                "Estrategia Climática",
                "Desarrollo Urbano Sostenible",
                "Política Ambiental",
                "Cooperación Internacional",
                "Economía Ambiental",
                "Sostenibilidad Corporativa",
              ].map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm text-primary-200/70">
                  <span className="w-1 h-1 rounded-full bg-primary-400 flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-primary-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-200/40">
            &copy; {new Date().getFullYear()} Melissa Velásquez. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-200/40">
            Economista · Estrategia Climática · Desarrollo Internacional
          </p>
        </div>
      </div>
    </footer>
  );
}
