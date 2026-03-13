import SectionContainer from '../components/SectionContainer'
import { expertise, partners } from '../data'
import { Link } from 'react-router-dom'

export default function Expertise() {
  return (
    <div className="pt-20">

      {/* Header */}
      <section className="bg-deep-green text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-up">
          <p className="section-label text-soft-green">Expertise</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Policy-Oriented Sustainability Expertise
          </h1>
          <p className="text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
            Eight years of applied work across climate strategy, urban development,
            environmental economics, and international cooperation.
          </p>
        </div>
      </section>

      {/* Expertise cards */}
      <SectionContainer label="Areas of Practice" title="Core Competencies"
                        subtitle="Specialized knowledge developed through projects with governments, multilateral banks, and international organizations.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <div key={item.title}
              className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm
                         card-hover animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-14 h-14 rounded-2xl bg-deep-green/8 flex items-center
                              justify-center text-3xl mb-5">
                {item.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-dark mb-3">
                {item.title}
              </h3>
              <p className="text-sm font-body text-dark/60 leading-relaxed mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.skills.map(skill => (
                  <span key={skill}
                    className="text-xs font-body px-2.5 py-1 rounded-full
                               bg-deep-green/8 text-deep-green font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-5 h-0.5 w-8 rounded-full bg-soft-green
                              transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Partners */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="section-label text-center mb-8">Organizations & Clients</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {partners.map(p => (
              <span key={p}
                className="text-base font-body font-semibold text-dark/40
                           hover:text-deep-green transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-light text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="font-display text-2xl font-semibold text-dark">
            Need expertise for your project?
          </h2>
          <p className="font-body text-dark/60 text-sm leading-relaxed">
            Available for consulting engagements, technical advisory roles,
            and research collaborations.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </div>
  )
}
