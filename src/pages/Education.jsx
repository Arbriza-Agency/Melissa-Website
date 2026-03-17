import SectionContainer from '../components/SectionContainer'
import Timeline from '../components/Timeline'
import { education } from '../data'

const research = [
  {
    title: 'Carbon Pricing and Fiscal Equity in Emerging Economies',
    type: 'Master\'s Thesis',
    institution: 'London School of Economics',
    year: '2020',
    abstract: 'Analysis of distributional impacts of carbon pricing instruments in five Latin American countries, with policy recommendations for progressive implementation.',
  },
  {
    title: 'Urban Fiscal Decentralization and Climate Resilience',
    type: 'Working Paper',
    institution: 'Universidad de los Andes',
    year: '2022',
    abstract: 'Empirical study on the relationship between municipal fiscal autonomy and capacity to implement climate adaptation policies in Colombian cities.',
  },
  {
    title: 'Climate Finance Gaps in Latin America — COP28 Brief',
    type: 'Policy Brief',
    institution: 'UNDP LAC',
    year: '2023',
    abstract: 'Assessment of concessional finance needs and blended finance opportunities to close the adaptation finance gap in the LAC region.',
  },
]

export default function Education() {
  return (
    <div className="pt-20">

      {/* Header */}
      <section data-reveal className="bg-deep-green text-dark py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-up">
          <p className="section-label text-soft-green">Education & Research</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Academic Background
          </h1>
          <p className="text-dark/70 font-body max-w-2xl mx-auto leading-relaxed">
            Formal training in economics and environmental policy, combined with
            applied research publications in climate finance and urban development.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <SectionContainer label="Academic History" title="Education & Certifications"
                        subtitle="Degrees and professional certificates in economics, environmental policy, and climate finance.">
        <Timeline items={education} />
      </SectionContainer>

      {/* Research */}
      <section data-reveal className="py-20 px-6 bg-light border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="section-label mb-3">Publications</p>
            <h2 className="font-display text-3xl font-bold text-dark">Research & Writing</h2>
          </div>
          <div className="space-y-5">
            {research.map((r, i) => (
              <div key={r.title}
                className="bg-forest/80 rounded-2xl p-7 border border-white/10 card-hover
                           animate-fade-up flex flex-col sm:flex-row gap-5"
                style={{ animationDelay: `${i * 80}ms` }}>
                <div className="sm:w-28 shrink-0 text-center sm:text-left">
                  <p className="text-xs font-body font-medium text-soft-green">{r.year}</p>
                  <span className="inline-block mt-1 text-xs font-body px-2 py-0.5 rounded-full
                                   bg-soft-green/10 text-soft-green border border-soft-green/20">
                    {r.type}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-dark text-lg mb-1">{r.title}</h3>
                  <p className="text-xs font-body text-dark/55 mb-3">{r.institution}</p>
                  <p className="text-sm font-body text-dark/70 leading-relaxed">{r.abstract}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
