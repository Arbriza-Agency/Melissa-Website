import { motion } from "framer-motion";
import { GraduationCap, BookOpen, FileText, ExternalLink } from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import Timeline from "../components/Timeline";

const education = [
  {
    icon: GraduationCap,
    period: "2016 â€“ 2017",
    title: "MSc Environmental Policy and Regulation",
    subtitle: "London School of Economics and Political Science (LSE) Â· Londres, Reino Unido",
    description:
      "EspecializaciÃ³n en polÃ­tica ambiental comparada, regulaciÃ³n climÃ¡tica e instrumentos econÃ³micos para la sostenibilidad. Becaria Chevening del Gobierno del Reino Unido.",
  },
  {
    icon: GraduationCap,
    period: "2010 â€“ 2015",
    title: "Economista",
    subtitle: "Universidad SimÃ³n BolÃ­var Â· Caracas, Venezuela",
    description:
      "Graduada con distinciÃ³n. EspecializaciÃ³n en economÃ­a del desarrollo, econometrÃ­a y polÃ­ticas pÃºblicas. Tesis laureada sobre instrumentos de mercado para la gestiÃ³n ambiental.",
  },
];

const publications = [
  {
    title: "Mecanismos de Financiamiento ClimÃ¡tico para Ciudades en AmÃ©rica Latina: Brechas y Oportunidades",
    journal: "Revista CEPAL",
    year: "2023",
    description:
      "AnÃ¡lisis de los principales mecanismos de financiamiento climÃ¡tico disponibles para gobiernos subnacionales en AmÃ©rica Latina, con estudio de casos en Colombia, Ecuador y Brasil.",
    link: "#",
  },
  {
    title: "EconomÃ­a Circular como Estrategia de Desarrollo en PaÃ­ses Emergentes: Evidencia de AmÃ©rica Latina",
    journal: "Sustainability â€” MDPI",
    year: "2021",
    description:
      "EvaluaciÃ³n del impacto de polÃ­ticas de economÃ­a circular en la productividad industrial y la generaciÃ³n de empleo en cinco economÃ­as emergentes de la regiÃ³n.",
    link: "#",
  },
  {
    title: "Carbon Pricing and Climate Policy Effectiveness in Emerging Economies",
    journal: "Climate Policy Journal",
    year: "2019",
    description:
      "Estudio comparado de mecanismos de fijaciÃ³n del precio del carbono en economÃ­as emergentes, con anÃ¡lisis de efectividad, diseÃ±o institucional y co-beneficios socioeconÃ³micos.",
    link: "#",
  },
];

const thesis = {
  title: "Carbon Pricing Mechanisms and Their Effectiveness in Emerging Economies: A Comparative Analysis",
  institution: "London School of Economics and Political Science Â· 2017",
  description:
    "La investigaciÃ³n analiza la eficacia comparada de los mecanismos de precio al carbono â€” impuestos al carbono y sistemas de comercio de permisos de emisiÃ³n â€” en economÃ­as emergentes seleccionadas de AmÃ©rica Latina, Asia y Ãfrica. A travÃ©s de modelamiento economÃ©trico y anÃ¡lisis de panel, se evalÃºan los determinantes institucionales, econÃ³micos y polÃ­ticos que condicionan el desempeÃ±o de estos instrumentos, y se propone un marco analÃ­tico para orientar el diseÃ±o de polÃ­tica climÃ¡tica.",
};

export default function Education() {
  return (
    <div className="pt-20">
      {/* Page Banner */}
      <section className="bg-primary-900 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
            EducaciÃ³n e InvestigaciÃ³n
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            FormaciÃ³n AcadÃ©mica
          </h1>
          <p className="text-primary-200/70 text-lg max-w-xl leading-relaxed">
            Trayectoria acadÃ©mica, publicaciones e investigaciÃ³n en economÃ­a ambiental,
            polÃ­tica climÃ¡tica y sostenibilidad.
          </p>
        </div>
      </section>

      {/* Education + Thesis */}
      <SectionContainer bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary-700" />
              FormaciÃ³n Universitaria
            </h3>
            <Timeline items={education} />
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary-700" />
              Tesis de InvestigaciÃ³n
            </h3>
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-300 mb-3">
                DisertaciÃ³n de MaestrÃ­a â€” LSE
              </p>
              <h4 className="font-serif text-lg font-semibold text-white mb-3 leading-snug">
                {thesis.title}
              </h4>
              <p className="text-primary-300/70 text-xs font-medium mb-4">
                {thesis.institution}
              </p>
              <p className="text-primary-200/70 text-sm leading-relaxed">
                {thesis.description}
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Publications */}
      <SectionContainer bgColor="bg-earth-50">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Publicaciones</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mt-2 mb-3">
            InvestigaciÃ³n y Publicaciones
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            ArtÃ­culos y working papers publicados en revistas acadÃ©micas especializadas y organismos internacionales.
          </p>
        </div>
        <div className="space-y-5">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-primary-200 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
                    <BookOpen className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h4 className="font-serif font-semibold text-gray-900 leading-snug">
                      {pub.title}
                    </h4>
                    <a href={pub.link} className="flex-shrink-0 p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-primary-700 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="text-sm text-primary-700 font-semibold mb-2">
                    {pub.journal} <span className="text-gray-400 font-normal">&mdash; {pub.year}</span>
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
