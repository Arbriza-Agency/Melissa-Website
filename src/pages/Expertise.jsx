import {
  Leaf,
  BarChart3,
  Globe,
  Landmark,
  Recycle,
  Sun,
  Droplets,
  BookOpen,
} from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const expertiseAreas = [
  {
    icon: Leaf,
    title: "Estrategia Climática",
    description:
      "Diseño e implementación de estrategias de mitigación y adaptación al cambio climático para organizaciones y gobiernos.",
  },
  {
    icon: BarChart3,
    title: "Economía Ambiental",
    description:
      "Análisis económico aplicado a la valoración de servicios ecosistémicos, externalidades ambientales e instrumentos de mercado.",
  },
  {
    icon: Globe,
    title: "Cooperación Internacional",
    description:
      "Gestión de proyectos de desarrollo sostenible en colaboración con organismos internacionales y agencias multilaterales.",
  },
  {
    icon: Landmark,
    title: "Política Pública",
    description:
      "Asesoría en diseño de políticas públicas ambientales, regulación climática y marco normativo para la sostenibilidad.",
  },
  {
    icon: Recycle,
    title: "Economía Circular",
    description:
      "Transición hacia modelos de producción y consumo sostenibles, gestión de residuos y eficiencia de recursos.",
  },
  {
    icon: Sun,
    title: "Energías Renovables",
    description:
      "Evaluación y promoción de proyectos de energía limpia, transición energética y descarbonización.",
  },
  {
    icon: Droplets,
    title: "Gestión de Recursos Naturales",
    description:
      "Planificación y manejo sostenible de recursos hídricos, forestales y biodiversidad.",
  },
  {
    icon: BookOpen,
    title: "Investigación y Análisis",
    description:
      "Investigación académica y consultoría basada en datos para informar la toma de decisiones en materia ambiental.",
  },
];

export default function Expertise() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-earth-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            subtitle="Especialidades"
            title="Áreas de Experiencia"
            description="Combinando economía, política pública y ciencia ambiental para impulsar soluciones sostenibles a escala global."
          />
        </div>
      </section>

      <SectionContainer bgColor="bg-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
