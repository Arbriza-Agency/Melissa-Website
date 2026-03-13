import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import ContactForm from "../components/ContactForm";

const awards = [
  {
    title: "Chevening Scholar",
    issuer: "UK Government",
    year: "2016",
    description:
      "Merit-based scholarship supporting graduate studies in environmental policy and climate governance.",
  },
  {
    title: "Climate Policy Innovation Recognition",
    issuer: "ICLEI Latin America",
    year: "2022",
    description:
      "Recognition for methodological contribution in climate action planning and local policy integration.",
  },
  {
    title: "Environmental Economics Research Award",
    issuer: "Academic Foundation Program",
    year: "2021",
    description:
      "Award for applied research contributions in sustainability and circular economy policy analysis.",
  },
];

const certifications = [
  "LEED Green Associate",
  "Climate Finance Professional",
  "Circular Economy Specialist",
  "Project Management Professional",
  "GRI Sustainability Reporting",
  "International Climate Negotiations",
];

export default function AwardsCertifications() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="bg-deep-green py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-soft-green">Awards & Certifications</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-light-neutral md:text-5xl">
            Recognition and professional credentials
          </h1>
        </div>
      </section>

      <SectionContainer bgColor="bg-white">
        <h2 className="mb-8 font-serif text-2xl font-semibold text-dark-gray md:text-3xl">Awards</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {awards.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-primary-100 bg-light-neutral p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary-50 p-2.5 text-primary-700">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-dark-gray">{item.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
                {item.issuer} · {item.year}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer bgColor="bg-light-neutral">
        <h2 className="mb-8 font-serif text-2xl font-semibold text-dark-gray md:text-3xl">Certifications</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item) => (
            <div key={item} className="rounded-2xl border border-primary-100 bg-white p-5">
              <div className="mb-3 inline-flex rounded-lg bg-primary-50 p-2 text-primary-700">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="contact-form" bgColor="bg-white">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-green">Contact</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-dark-gray">Let's work together</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              For consulting opportunities, strategic partnerships, and research collaboration,
              please send a message through the form.
            </p>
          </div>

          <div className="lg:col-span-3 rounded-3xl border border-primary-100 bg-light-neutral p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
