import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Leaf, Landmark, BookOpen, Users } from "lucide-react";
import SectionContainer from "../components/SectionContainer";

const stats = [
  { value: "8+", label: "Años de experiencia" },
  { value: "20+", label: "Proyectos liderados" },
  { value: "3", label: "Continentes" },
  { value: "10+", label: "Países" },
];

const highlights = [
  {
    icon: Leaf,
    title: "Estrategia Climática",
    description: "Diseño de Planes de Acción Climática, NDC y marcos de adaptación para gobiernos y organismos internacionales.",
  },
  {
    icon: Globe,
    title: "Desarrollo Urbano",
    description: "Planificación de ciudades resilientes, movilidad sostenible e infraestructura verde en América Latina.",
  },
  {
    icon: Landmark,
    title: "Política Pública",
    description: "Asesoría normativa ambiental y regulatoria con el PNUD, BID y ONU-Hábitat.",
  },
  {
    icon: BookOpen,
    title: "Investigación",
    description: "Publicaciones en CEPAL, Sustainability Journal y presentaciones en COP y Foro Urbano Mundial.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background: deep green left panel */}
        <div className="absolute inset-0 flex">
          <div className="w-full lg:w-1/2 bg-primary-900" />
          <div className="hidden lg:block w-1/2 bg-earth-50" />
        </div>

        {/* Subtle texture dots on green side */}
        <div className="absolute inset-0 lg:w-1/2 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-40 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Text on dark green */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-white leading-[1.08] mb-6">
                Melissa<br />Velásquez
              </h1>
              <p className="text-base md:text-lg text-primary-200/80 leading-relaxed max-w-md mb-4 font-medium">
                Economist | Climate Strategy | Sustainability & Urban Development
              </p>
              <p className="text-sm md:text-base text-primary-200/70 leading-relaxed max-w-lg mb-10">
                Sustainability and climate action are among the defining priorities of our time,
                shaping how cities grow, how economies evolve, and how institutions operate.
                Melissa Velásquez works at the intersection of climate strategy, economic systems,
                and urban development to support resilient and sustainable communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-900 text-sm font-bold rounded-xl hover:bg-primary-50 transition-colors"
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </motion.div>

            {/* Right — Photo + Stats on light bg */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start gap-8"
            >
              {/* Photo placeholder */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-3xl bg-primary-200/30 rotate-3" />
                <div className="relative w-full h-full rounded-3xl bg-earth-100 border-2 border-earth-200 overflow-hidden flex items-center justify-center">
                  <div className="text-center text-earth-400">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-earth-200 flex items-center justify-center">
                      <svg className="h-10 w-10 text-earth-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Foto Profesional</p>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {stats.map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-earth-200 px-5 py-4 text-center">
                    <p className="font-serif text-3xl font-bold text-primary-900">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Highlights ───────────────────────────────────── */}
      <SectionContainer bgColor="bg-white">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Áreas de Enfoque</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
            Impacto en lo que importa
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-700 mb-5 group-hover:bg-primary-100 transition-colors">
                <item.icon className="h-5 w-5" />
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

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section className="bg-primary-900">
        <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2">
              ¿Trabajemos juntos?
            </h3>
            <p className="text-primary-200/70 text-sm max-w-lg">
              Abierta a colaboraciones en consultoría, investigación aplicada y proyectos de política climática.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-900 text-sm font-bold rounded-xl hover:bg-primary-50 transition-colors"
          >
            Enviar mensaje <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
