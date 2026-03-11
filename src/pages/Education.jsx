import { GraduationCap, BookOpen, FileText } from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Timeline from "../components/Timeline";

const education = [
  {
    icon: GraduationCap,
    period: "Por definir",
    title: "Maestría en Economía Ambiental",
    subtitle: "Universidad — País",
    description:
      "Especialización en economía ambiental, instrumentos de política climática y valoración de servicios ecosistémicos.",
  },
  {
    icon: GraduationCap,
    period: "Por definir",
    title: "Licenciatura en Economía",
    subtitle: "Universidad — País",
    description:
      "Formación sólida en teoría económica, econometría, política pública y desarrollo sostenible.",
  },
];

const publications = [
  {
    title: "Título de Publicación 1",
    journal: "Revista Académica",
    year: "2024",
    description:
      "Análisis de los instrumentos económicos para la mitigación del cambio climático en economías emergentes.",
  },
  {
    title: "Título de Publicación 2",
    journal: "Revista Académica",
    year: "2023",
    description:
      "Evaluación de políticas de economía circular y su impacto en la productividad industrial sostenible.",
  },
];

const thesis = {
  title: "Tesis de Investigación",
  subtitle: "Título de la tesis por definir",
  description:
    "Investigación académica sobre la intersección entre política económica, acción climática y desarrollo sostenible. La tesis explora marcos teóricos y evidencia empírica para fundamentar recomendaciones de política pública.",
};

export default function Education() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-earth-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            subtitle="Educación & Investigación"
            title="Formación Académica"
            description="Trayectoria académica, publicaciones e investigación en economía, sostenibilidad y política climática."
          />
        </div>
      </section>

      {/* Education Timeline */}
      <SectionContainer bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary-600" />
              Educación
            </h3>
            <Timeline items={education} />
          </div>

          {/* Thesis */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary-600" />
              Tesis
            </h3>
            <div className="bg-gradient-to-br from-primary-50 to-earth-50 rounded-2xl p-8 border border-primary-100">
              <h4 className="font-serif text-lg font-semibold text-gray-900 mb-1">
                {thesis.title}
              </h4>
              <p className="text-primary-600 text-sm font-medium mb-4">
                {thesis.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {thesis.description}
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Publications */}
      <SectionContainer bgColor="bg-gray-50/50">
        <SectionHeader
          subtitle="Publicaciones"
          title="Investigación y Publicaciones"
          description="Contribuciones académicas en revistas especializadas."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-primary-200 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-gray-900 mb-1">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-primary-600 font-medium mb-1">
                    {pub.journal} — {pub.year}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
