import { BookOpen, GraduationCap, FileText } from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import Timeline from "../components/Timeline";
import Card from "../components/Card";

const educationItems = [
  {
    icon: GraduationCap,
    period: "2016 - 2017",
    title: "MSc Environmental Policy and Regulation",
    subtitle: "London School of Economics and Political Science",
    description:
      "Graduate specialization in climate policy, environmental regulation, and economic instruments for sustainability.",
  },
  {
    icon: GraduationCap,
    period: "2010 - 2015",
    title: "Economics",
    subtitle: "Universidad Simon Bolivar",
    description:
      "Undergraduate training in development economics, econometrics, and public policy analysis.",
  },
];

const researchItems = [
  {
    icon: BookOpen,
    title: "Climate Finance for Urban Transitions",
    description:
      "Research on financing mechanisms and institutional gaps for municipal climate implementation in Latin America.",
  },
  {
    icon: FileText,
    title: "Circular Economy and Emerging Markets",
    description:
      "Analysis of policy mechanisms linking circular models with industrial productivity and social co-benefits.",
  },
  {
    icon: BookOpen,
    title: "Carbon Pricing in Emerging Economies",
    description:
      "Comparative perspective on policy design, implementation constraints, and effectiveness of carbon pricing tools.",
  },
];

export default function EducationResearch() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="bg-deep-green py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-soft-green">Education & Research</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-light-neutral md:text-5xl">
            Academic background and publications
          </h1>
        </div>
      </section>

      <SectionContainer bgColor="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-serif text-2xl font-semibold text-dark-gray md:text-3xl">Education</h2>
            <Timeline items={educationItems} />
          </div>

          <div>
            <h2 className="mb-8 font-serif text-2xl font-semibold text-dark-gray md:text-3xl">Research</h2>
            <div className="space-y-5">
              {researchItems.map((item) => (
                <Card
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
