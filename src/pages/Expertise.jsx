import { Leaf, Building2, Landmark, Globe2, BarChart3, Recycle } from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";

const expertiseAreas = [
  {
    icon: Leaf,
    title: "Climate Strategy",
    description:
      "Design of climate action plans, adaptation frameworks, and implementation pathways for public institutions.",
  },
  {
    icon: Building2,
    title: "Sustainable Urban Development",
    description:
      "Urban resilience planning, mobility transition, and policy tools for sustainable city systems.",
  },
  {
    icon: Landmark,
    title: "Environmental Policy",
    description:
      "Regulatory analysis and policy advisory to align climate goals with institutional and legal frameworks.",
  },
  {
    icon: Globe2,
    title: "International Cooperation",
    description:
      "Technical collaboration with multilateral and development organizations across regional programs.",
  },
  {
    icon: BarChart3,
    title: "Environmental Economics",
    description:
      "Economic valuation, impact analysis, and evidence generation for climate and sustainability decisions.",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description:
      "Design of transition models for resource efficiency, waste management, and circular production systems.",
  },
];

export default function Expertise() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="bg-deep-green py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-soft-green">Expertise</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-light-neutral md:text-5xl">
            Areas of specialization
          </h1>
        </div>
      </section>

      <SectionContainer bgColor="bg-light-neutral">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
