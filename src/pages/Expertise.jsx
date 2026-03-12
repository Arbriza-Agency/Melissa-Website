import { motion } from "framer-motion";
import {
  Leaf,
  BarChart3,
  Globe,
  Landmark,
  Recycle,
  Building2,
  TrendingUp,
  FileSearch,
} from "lucide-react";
import SectionContainer from "../components/SectionContainer";

const expertiseAreas = [
  {
    icon: Leaf,
    title: "Estrategia ClimÃ¡tica",
    description:
      "DiseÃ±o de Planes de AcciÃ³n ClimÃ¡tica (PAC), Contribuciones Determinadas a Nivel Nacional (NDC) y marcos de adaptaciÃ³n y mitigaciÃ³n para gobiernos subnacionales y nacionales.",
    tags: ["NDC", "AdaptaciÃ³n", "MitigaciÃ³n"],
  },
  {
    icon: Building2,
    title: "Desarrollo Urbano Sostenible",
    description:
      "PlanificaciÃ³n de ciudades resilientes, movilidad sostenible, infraestructura verde y estrategias de resiliencia para municipios y Ã¡reas metropolitanas.",
    tags: ["Resiliencia Urbana", "ONU-HÃ¡bitat", "Infraestructura Verde"],
  },
  {
    icon: Landmark,
    title: "PolÃ­tica Ambiental y RegulaciÃ³n",
    description:
      "DiseÃ±o de marcos normativos ambientales, evaluaciÃ³n de impacto regulatorio y asesorÃ­a para la implementaciÃ³n de legislaciÃ³n climÃ¡tica nacional e internacional.",
    tags: ["RegulaciÃ³n", "EvaluaciÃ³n de Impacto", "Normativa"],
  },
  {
    icon: Globe,
    title: "CooperaciÃ³n Internacional",
    description:
      "GestiÃ³n de proyectos con organismos multilaterales: PNUD, BID, ONU-HÃ¡bitat, GEF y agencias de cooperaciÃ³n al desarrollo. FormulaciÃ³n de propuestas y coordinaciÃ³n interinstitucional.",
    tags: ["PNUD", "BID", "GEF"],
  },
  {
    icon: BarChart3,
    title: "EconomÃ­a Ambiental",
    description:
      "ValoraciÃ³n econÃ³mica de servicios ecosistÃ©micos, anÃ¡lisis costo-beneficio ambiental, instrumentos econÃ³micos para la polÃ­tica climÃ¡tica y evaluaciÃ³n de externalidades.",
    tags: ["ValoraciÃ³n", "Costo-Beneficio", "Mercados de Carbono"],
  },
  {
    icon: TrendingUp,
    title: "Financiamiento ClimÃ¡tico",
    description:
      "EstructuraciÃ³n de mecanismos de financiamiento verde, acceso a fondos climÃ¡ticos (GCF, GEF, BID) y diseÃ±o de instrumentos de deuda sostenible para proyectos urbanos y sectoriales.",
    tags: ["GCF", "Bonos Verdes", "Blended Finance"],
  },
  {
    icon: Recycle,
    title: "EconomÃ­a Circular",
    description:
      "DiseÃ±o de estrategias de transiciÃ³n hacia modelos de producciÃ³n y consumo sostenibles, gestiÃ³n integral de residuos, simbiosis industrial y eficiencia de recursos.",
    tags: ["Ellen MacArthur", "Residuos", "Simbiosis Industrial"],
  },
  {
    icon: FileSearch,
    title: "Sostenibilidad Corporativa (ESG)",
    description:
      "Desarrollo de estrategias ESG, elaboraciÃ³n de reportes de sostenibilidad bajo frameworks GRI, TCFD y CDP, y asesorÃ­a en due diligence ambiental para empresas e inversores.",
    tags: ["GRI", "TCFD", "CDP"],
  },
];

export default function Expertise() {
  return (
    <div className="pt-20">
      {/* Page Banner */}
      <section className="bg-primary-900 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
            Especialidades
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Ãreas de Experiencia
          </h1>
          <p className="text-primary-200/70 text-lg max-w-xl leading-relaxed">
            Combinando economÃ­a, polÃ­tica pÃºblica y ciencia ambiental para impulsar soluciones
            sostenibles con impacto en el mundo real.
          </p>
        </div>
      </section>

      <SectionContainer bgColor="bg-earth-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-2xl border border-gray-100 p-7 flex flex-col hover:border-primary-200 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 text-primary-700 mb-5">
                <area.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-semibold text-gray-900 mb-2">
                {area.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {area.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 text-xs font-medium bg-primary-50 text-primary-700 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
