import { motion } from "framer-motion";
import { Award, Medal, ShieldCheck, Star } from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";

const awards = [
  {
    icon: Award,
    title: "Premio / Reconocimiento 1",
    organization: "Organización",
    year: "2024",
    description: "Descripción del reconocimiento recibido por contribuciones en sostenibilidad y acción climática.",
  },
  {
    icon: Medal,
    title: "Premio / Reconocimiento 2",
    organization: "Organización",
    year: "2023",
    description: "Descripción del reconocimiento recibido por excelencia en investigación económica ambiental.",
  },
  {
    icon: Star,
    title: "Premio / Reconocimiento 3",
    organization: "Organización",
    year: "2022",
    description: "Descripción del reconocimiento recibido por liderazgo en proyectos de desarrollo sostenible.",
  },
];

const certifications = [
  {
    icon: ShieldCheck,
    title: "Certificación 1",
    issuer: "Institución",
    year: "2024",
    description: "Certificación profesional en estrategia climática y gestión ambiental.",
  },
  {
    icon: ShieldCheck,
    title: "Certificación 2",
    issuer: "Institución",
    year: "2023",
    description: "Certificación en evaluación de impacto ambiental y sostenibilidad corporativa.",
  },
  {
    icon: ShieldCheck,
    title: "Certificación 3",
    issuer: "Institución",
    year: "2022",
    description: "Certificación en finanzas verdes y mecanismos de financiamiento climático.",
  },
];

export default function Awards() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-earth-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            subtitle="Reconocimientos"
            title="Premios y Certificaciones"
            description="Reconocimientos profesionales y certificaciones que avalan mi experiencia y compromiso."
          />
        </div>
      </section>

      {/* Awards */}
      <SectionContainer bgColor="bg-white">
        <SectionHeader
          subtitle="Premios"
          title="Reconocimientos Profesionales"
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-primary-200 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 text-amber-600 mb-5">
                <award.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1">
                {award.title}
              </h3>
              <p className="text-sm text-primary-600 font-medium mb-1">
                {award.organization} — {award.year}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Certifications */}
      <SectionContainer bgColor="bg-gray-50/50">
        <SectionHeader
          subtitle="Certificaciones"
          title="Certificaciones Profesionales"
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-primary-200 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-5">
                <cert.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-primary-600 font-medium mb-1">
                {cert.issuer} — {cert.year}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
