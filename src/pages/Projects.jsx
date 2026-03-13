import { motion } from "framer-motion";
import SectionContainer from "../components/SectionContainer";
import ProjectCard from "../components/ProjectCard";
import MapComponent from "../components/MapComponent";

const projects = [
  {
    title: "Municipal Climate Action Plan",
    organization: "City Government / UNDP",
    description:
      "Technical leadership in the design of climate action targets, adaptation priorities, and implementation pathways.",
    location: "Bogota, Colombia",
    year: "2022-2023",
    coordinates: [-74.0721, 4.711],
  },
  {
    title: "Urban Resilience Strategy",
    organization: "UN-Habitat",
    description:
      "Support for metropolitan resilience strategies integrating risk assessment, governance, and infrastructure planning.",
    location: "Mexico City, Mexico",
    year: "2021-2022",
    coordinates: [-99.1332, 19.4326],
  },
  {
    title: "Climate Vulnerability Assessment",
    organization: "World Bank Program",
    description:
      "Assessment of climate risks and adaptation policy options for regional and local institutional planning.",
    location: "Lima, Peru",
    year: "2020-2021",
    coordinates: [-77.0428, -12.0464],
  },
  {
    title: "National NDC Update Support",
    organization: "UNDP / Environment Ministry",
    description:
      "Technical assistance for mitigation scenarios, co-benefit analysis, and implementation mechanisms.",
    location: "Quito, Ecuador",
    year: "2020",
    coordinates: [-78.4678, -0.1807],
  },
  {
    title: "Circular Economy Policy Roadmap",
    organization: "Ecological Transition Program",
    description:
      "Gap analysis and implementation roadmap for circular economy policy aligned with European standards.",
    location: "Madrid, Spain",
    year: "2019-2020",
    coordinates: [-3.7038, 40.4168],
  },
  {
    title: "Urban Climate Finance Structuring",
    organization: "Inter-American Development Bank",
    description:
      "Design of financing structures for municipal climate investment and green project pipelines.",
    location: "Sao Paulo, Brazil",
    year: "2018-2019",
    coordinates: [-46.6333, -23.5505],
  },
];

export default function Projects() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="bg-deep-green py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-soft-green">Projects</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-light-neutral md:text-5xl">
            International project portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-light-neutral/75 md:text-base">
            Work across climate strategy, public policy, and sustainability implementation in multiple regions.
          </p>
        </div>
      </section>

      <SectionContainer bgColor="bg-white">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-dark-gray md:text-4xl">Geographic footprint</h2>
          <p className="mt-2 text-sm text-gray-500">Click on map markers to see project details.</p>
        </div>

        <MapComponent
          markers={projects.map((project) => ({
            coordinates: project.coordinates,
            title: project.title,
            organization: project.organization,
            description: project.description,
            location: `${project.location} · ${project.year}`,
          }))}
        />
      </SectionContainer>

      <SectionContainer bgColor="bg-light-neutral">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
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
