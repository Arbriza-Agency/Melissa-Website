import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Leaf, TrendingUp, BookOpen } from "lucide-react";
import SectionContainer from "../components/SectionContainer";

const highlights = [
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Estrategias climáticas y políticas ambientales para un desarrollo sostenible.",
  },
  {
    icon: Globe,
    title: "Desarrollo Global",
    description: "Experiencia internacional en proyectos de cooperación y desarrollo.",
  },
  {
    icon: TrendingUp,
    title: "Economía",
    description: "Análisis económico aplicado a la sostenibilidad y política pública.",
  },
  {
    icon: BookOpen,
    title: "Investigación",
    description: "Publicaciones académicas y contribuciones a la política climática.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-earth-50">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-earth-100/30 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-600 mb-4">
                Economista & Especialista en Sostenibilidad
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight mb-6">
                Melissa
              </h1>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mb-10">
                Impulsando estrategias climáticas, políticas sostenibles y desarrollo económico global
                con un enfoque basado en evidencia e impacto internacional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white text-sm font-semibold rounded-xl hover:bg-primary-800 transition-colors"
                >
                  Ver Proyectos <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </motion.div>

            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-earth-200 rounded-3xl rotate-3" />
                <div className="relative w-full h-full bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center border border-gray-200">
                  <div className="text-center text-gray-400">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg className="h-10 w-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Foto Profesional</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <SectionContainer bgColor="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-gray-100 text-primary-600 mb-5 group-hover:bg-primary-100 transition-colors">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
