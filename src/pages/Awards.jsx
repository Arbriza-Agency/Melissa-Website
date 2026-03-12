import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import SectionContainer from "../components/SectionContainer";

const awards = [
  {
    title: "Becaria Chevening",
    organization: "Gobierno del Reino Unido",
    year: "2016",
    description:
      "Beca de excelencia del gobierno britÃ¡nico otorgada a lÃ­deres con potencial para generar cambio positivo en sus paÃ­ses. FinanciÃ³ la MaestrÃ­a en LSE.",
    color: "bg-amber-50 border-amber-100 text-amber-700",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    title: "Premio a la InnovaciÃ³n en PolÃ­tica ClimÃ¡tica",
    organization: "ICLEI Latin America",
    year: "2022",
    description:
      "Reconocimiento al trabajo de liderazgo e innovaciÃ³n en el diseÃ±o del Plan de AcciÃ³n ClimÃ¡tica de BogotÃ¡ y su metodologÃ­a de co-creaciÃ³n con actores locales.",
    color: "bg-primary-50 border-primary-100 text-primary-700",
    iconBg: "bg-primary-100 text-primary-700",
  },
  {
    title: "Premio a la InvestigaciÃ³n en EconomÃ­a Ambiental",
    organization: "FundaciÃ³n BBVA",
    year: "2021",
    description:
      "Reconocimiento por la publicaciÃ³n del artÃ­culo sobre economÃ­a circular en economÃ­as emergentes y su impacto en la discusiÃ³n de polÃ­tica regional.",
    color: "bg-primary-50 border-primary-100 text-primary-700",
    iconBg: "bg-primary-100 text-primary-700",
  },
];

const certifications = [
  {
    title: "LEED Green Associate",
    issuer: "U.S. Green Building Council (USGBC)",
    year: "2023",
    description: "CertificaciÃ³n en diseÃ±o, construcciÃ³n y operaciÃ³n de edificios verdes bajo el sistema LEED.",
  },
  {
    title: "Climate Finance Professional",
    issuer: "Frankfurt School of Finance & Management",
    year: "2022",
    description: "CertificaciÃ³n avanzada en instrumentos de financiamiento climÃ¡tico, GCF y mercados de carbono.",
  },
  {
    title: "Experta en EconomÃ­a Circular",
    issuer: "Ellen MacArthur Foundation",
    year: "2021",
    description: "FormaciÃ³n en principios, modelos de negocio y polÃ­ticas de economÃ­a circular a escala sistÃ©mica.",
  },
  {
    title: "Project Management Professional (PMP)",
    issuer: "Project Management Institute (PMI)",
    year: "2020",
    description: "CertificaciÃ³n internacional en gestiÃ³n de proyectos aplicada a programas de cooperaciÃ³n y desarrollo.",
  },
  {
    title: "Sostenibilidad Corporativa y RSE",
    issuer: "GRI â€” Global Reporting Initiative",
    year: "2020",
    description: "FormaciÃ³n en elaboraciÃ³n de reportes de sostenibilidad bajo estÃ¡ndares GRI para organizaciones.",
  },
  {
    title: "Negociaciones ClimÃ¡ticas Internacionales",
    issuer: "UNFCCC / Carbon Market Institute",
    year: "2019",
    description: "FormaciÃ³n en negociaciones multilaterales del clima, Acuerdo de ParÃ­s y mecanismos del ArtÃ­culo 6.",
  },
];

export default function Awards() {
  return (
    <div className="pt-20">
      {/* Page Banner */}
      <section className="bg-primary-900 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
            Reconocimientos
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Premios y Certificaciones
          </h1>
          <p className="text-primary-200/70 text-lg max-w-xl leading-relaxed">
            Distinciones acadÃ©micas, reconocimientos profesionales y certificaciones internacionales.
          </p>
        </div>
      </section>

      {/* Awards */}
      <SectionContainer bgColor="bg-white">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Premios</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
            Reconocimientos Profesionales
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border p-8 transition-shadow hover:shadow-lg ${award.color}`}
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 ${award.iconBg}`}>
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-semibold text-gray-900 mb-1 leading-snug">
                {award.title}
              </h3>
              <p className="text-xs font-semibold text-primary-700 mb-3">
                {award.organization} Â· {award.year}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Certifications */}
      <SectionContainer bgColor="bg-earth-50">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Certificaciones</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
            Certificaciones Profesionales
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.07)" }}
              className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-primary-200 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-gray-900 leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-primary-700 font-semibold mb-2">
                    {cert.issuer} <span className="text-gray-400 font-normal">Â· {cert.year}</span>
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {cert.description}
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
