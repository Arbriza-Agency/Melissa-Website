import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import InteractiveMap from "../components/InteractiveMap";

const projects = [
  {
    title: "Plan de Acción Climática Municipal",
    organization: "Gobierno Local",
    description:
      "Diseño del plan de acción climática con metas de reducción de emisiones, estrategias de adaptación y mecanismos de financiamiento verde.",
    location: "América Latina",
    coordinates: [-74.0721, 4.711],
  },
  {
    title: "Evaluación de Economía Circular",
    organization: "Organismo Internacional",
    description:
      "Análisis de oportunidades de economía circular en sectores productivos clave, incluyendo recomendaciones de política pública.",
    location: "Europa",
    coordinates: [2.3522, 48.8566],
  },
  {
    title: "Estrategia de Transición Energética",
    organization: "Agencia de Desarrollo",
    description:
      "Consultoría para el desarrollo de una hoja de ruta para la transición hacia energías renovables y descarbonización industrial.",
    location: "África",
    coordinates: [36.8219, -1.2921],
  },
  {
    title: "Valoración de Servicios Ecosistémicos",
    organization: "ONG Ambiental",
    description:
      "Valoración económica de servicios ecosistémicos para fundamentar políticas de conservación y uso sostenible del territorio.",
    location: "Sudamérica",
    coordinates: [-43.1729, -22.9068],
  },
  {
    title: "Programa de Financiamiento Climático",
    organization: "Banco de Desarrollo",
    description:
      "Diseño de mecanismos de financiamiento climático para proyectos de infraestructura verde y resiliencia urbana.",
    location: "Asia",
    coordinates: [100.5018, 13.7563],
  },
];

export default function Projects() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-earth-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            subtitle="Proyectos"
            title="Portafolio de Proyectos"
            description="Proyectos internacionales en sostenibilidad, estrategia climática y desarrollo económico."
          />
        </div>
      </section>

      {/* Interactive Map */}
      <SectionContainer bgColor="bg-white">
        <SectionHeader
          subtitle="Mapa Global"
          title="Impacto Internacional"
          description="Explora los proyectos haciendo clic en los marcadores del mapa."
        />
        <InteractiveMap
          markers={projects.map((p) => ({
            coordinates: p.coordinates,
            title: p.title,
            organization: p.organization,
            description: p.description,
            location: p.location,
          }))}
        />
      </SectionContainer>

      {/* Project Cards */}
      <SectionContainer bgColor="bg-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              organization={project.organization}
              description={project.description}
              location={project.location}
            />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
