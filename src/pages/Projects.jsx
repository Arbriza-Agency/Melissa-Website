import { motion } from "framer-motion";
import SectionContainer from "../components/SectionContainer";
import ProjectCard from "../components/ProjectCard";
import InteractiveMap from "../components/InteractiveMap";

const projects = [
  {
    title: "Plan de AcciÃ³n ClimÃ¡tica de BogotÃ¡",
    organization: "AlcaldÃ­a Mayor de BogotÃ¡ / PNUD",
    description:
      "Liderazgo tÃ©cnico en el diseÃ±o del Plan de AcciÃ³n ClimÃ¡tica 2020â€“2050 de BogotÃ¡, incluyendo metas de reducciÃ³n de emisiones, estrategias sectoriales de adaptaciÃ³n y lineamientos de financiamiento verde.",
    location: "BogotÃ¡, Colombia",
    year: "2022â€“2023",
    coordinates: [-74.0721, 4.711],
  },
  {
    title: "Estrategia de Ciudades Resilientes",
    organization: "ONU-HÃ¡bitat",
    description:
      "Desarrollo de la Estrategia de Resiliencia Urbana para cinco municipios de la Zona Metropolitana del Valle de MÃ©xico, con enfoque en vulnerabilidad climÃ¡tica, infraestructura verde y gobernanza local.",
    location: "Ciudad de MÃ©xico, MÃ©xico",
    year: "2021â€“2022",
    coordinates: [-99.1332, 19.4326],
  },
  {
    title: "EvaluaciÃ³n de Vulnerabilidad ClimÃ¡tica",
    organization: "Banco Mundial",
    description:
      "AnÃ¡lisis de vulnerabilidad climÃ¡tica y evaluaciÃ³n de riesgos para cuencas hidrogrÃ¡ficas estratÃ©gicas de la costa peruana, con recomendaciones de polÃ­tica de adaptaciÃ³n para el Ministerio del Ambiente.",
    location: "Lima, PerÃº",
    year: "2020â€“2021",
    coordinates: [-77.0428, -12.0464],
  },
  {
    title: "ActualizaciÃ³n NDC Ecuador",
    organization: "PNUD Ecuador / MAAE",
    description:
      "Apoyo tÃ©cnico para la actualizaciÃ³n de la ContribuciÃ³n Determinada a Nivel Nacional (NDC) de Ecuador, incluyendo modelamiento de escenarios de emisiones, anÃ¡lisis de co-beneficios y diseÃ±o de medidas de implementaciÃ³n.",
    location: "Quito, Ecuador",
    year: "2020",
    coordinates: [-78.4678, -0.1807],
  },
  {
    title: "Plan Nacional de EconomÃ­a Circular",
    organization: "Ministerio para la TransiciÃ³n EcolÃ³gica de EspaÃ±a",
    description:
      "ConsultorÃ­a para el diagnÃ³stico de brechas y la hoja de ruta de implementaciÃ³n del Plan de AcciÃ³n de EconomÃ­a Circular 2021â€“2030 de EspaÃ±a, con anÃ¡lisis comparado de polÃ­ticas europeas.",
    location: "Madrid, EspaÃ±a",
    year: "2019â€“2020",
    coordinates: [-3.7038, 40.4168],
  },
  {
    title: "Financiamiento ClimÃ¡tico Urbano â€” BID",
    organization: "Banco Interamericano de Desarrollo",
    description:
      "EstructuraciÃ³n de un programa de financiamiento climÃ¡tico para municipios de la RegiÃ³n Metropolitana de SÃ£o Paulo, incluyendo emisiÃ³n de bonos verdes y acceso a fondos del Fondo Verde para el Clima (GCF).",
    location: "SÃ£o Paulo, Brasil",
    year: "2018â€“2019",
    coordinates: [-46.6333, -23.5505],
  },
];

export default function Projects() {
  return (
    <div className="pt-20">
      {/* Page Banner */}
      <section className="bg-primary-900 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
            Proyectos
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Portafolio de Proyectos
          </h1>
          <p className="text-primary-200/70 text-lg max-w-xl leading-relaxed">
            Iniciativas internacionales en estrategia climÃ¡tica, polÃ­tica pÃºblica y desarrollo
            urbano sostenible en tres continentes.
          </p>
          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[["6+", "Proyectos destacados"], ["3", "Continentes"], ["10+", "PaÃ­ses"], ["5", "Organismos internacionales"]].map(([val, lbl]) => (
              <div key={lbl} className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-white">{val}</span>
                <span className="text-sm text-primary-200/60">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <SectionContainer bgColor="bg-white">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Mapa Global</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mt-2 mb-3">
            Impacto Internacional
          </h2>
          <p className="text-gray-500 text-sm">
            Haz clic en los marcadores del mapa para explorar cada proyecto.
          </p>
        </div>
        <InteractiveMap
          markers={projects.map((p) => ({
            coordinates: p.coordinates,
            title: p.title,
            organization: p.organization,
            description: p.description,
            location: `${p.location} Â· ${p.year}`,
          }))}
        />
      </SectionContainer>

      {/* Project Cards */}
      <SectionContainer bgColor="bg-earth-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                organization={project.organization}
                description={project.description}
                location={project.location}
                year={project.year}
              />
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
