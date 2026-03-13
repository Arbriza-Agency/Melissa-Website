import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Languages } from "lucide-react";
import SectionContainer from "../components/SectionContainer";

const profileItems = [
  { icon: MapPin, label: "Location", value: "Bogota, Colombia · Remote" },
  { icon: Languages, label: "Languages", value: "Spanish, English, Portuguese (intermediate)" },
  { icon: Mail, label: "Email", value: "melissa.velasquez@consultoria.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/melissavelasquez" },
];

export default function About() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="border-b border-earth-200 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-green">About</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-dark-gray md:text-5xl">
            Professional profile in economics, climate strategy, and sustainable development
          </h1>
        </div>
      </section>

      <SectionContainer bgColor="bg-light-neutral">
        <div className="grid gap-10 lg:grid-cols-3">
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-primary-100 bg-white p-6 shadow-sm"
          >
            <div className="mb-6 aspect-square w-full rounded-2xl border border-primary-100 bg-gradient-to-b from-white to-soft-green/20" />

            <div className="space-y-3">
              {profileItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-primary-50 p-2 text-primary-700">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</p>
                    <p className="text-sm text-gray-700">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="lg:col-span-2 space-y-5 text-gray-600"
          >
            <h2 className="font-serif text-2xl font-semibold text-dark-gray md:text-3xl">Melissa Velasquez</h2>
            <p className="leading-relaxed">
              Melissa Velasquez is an economist specialized in sustainability, climate policy,
              and urban development. Her work combines analytical rigor and institutional strategy
              to support actionable climate agendas at local, national, and regional levels.
            </p>
            <p className="leading-relaxed">
              She has collaborated with development institutions, public agencies, and international
              organizations on policy frameworks, resilience roadmaps, and implementation models aligned
              with evidence-based decision making.
            </p>
            <p className="leading-relaxed">
              Her professional approach connects economic systems with environmental priorities,
              with a focus on practical outcomes, institutional coordination, and long-term public value.
            </p>

            <div className="grid gap-4 pt-2 md:grid-cols-2">
              <div className="rounded-2xl bg-deep-green p-6 text-light-neutral">
                <h3 className="font-serif text-lg font-semibold">Mission</h3>
                <p className="mt-2 text-sm text-light-neutral/80">
                  Advance climate and sustainability strategies that are feasible, measurable,
                  and aligned with social and economic priorities.
                </p>
              </div>
              <div className="rounded-2xl border border-primary-100 bg-white p-6">
                <h3 className="font-serif text-lg font-semibold text-dark-gray">Vision</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Strengthen institutions and cities so climate action becomes a structural part
                  of development planning and public policy design.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
