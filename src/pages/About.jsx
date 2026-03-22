import { Link } from 'react-router-dom'
import SectionContainer from '../components/SectionContainer'
import { stats } from '../data'

const values = [
  { icon: '🔬', title: 'Evidence-Based', desc: 'Recommendations grounded in analysis, field context, and implementation realities.' },
  { icon: '🤝', title: 'Collaborative', desc: 'Working across governments, organizations, and communities through inclusive processes.' },
  { icon: '🌍', title: 'Systems Thinking', desc: 'Connecting climate, institutions, economies, and urban systems to design durable solutions.' },
  { icon: '🧭', title: 'Actionable', desc: 'Turning complex priorities into strategies, programs, and partnerships that can be delivered.' },
]

const focusCards = [
  { title: 'Climate Strategy', desc: 'Adaptation planning, risk analysis, and actionable roadmaps.' },
  { title: 'Sustainable Urban Development', desc: 'Resilient territorial strategies that connect systems and delivery.' },
  { title: 'ESG & Corporate Sustainability', desc: 'Risk, standards alignment, and performance frameworks.' },
  { title: 'International Cooperation', desc: 'Coordination across partners, institutions, and programs.' },
]

export default function About() {
  return (
    <div className="pt-20">
      <section data-reveal className="bg-deep-green text-dark py-14 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3 animate-fade-up">
          <p className="section-label text-soft-green">About</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Melissa Velásquez
          </h1>
          <p className="text-dark/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Economist and environmental planner advancing climate action, urban resilience,
            and sustainable development across Latin America, the Caribbean, and the United States.
          </p>
        </div>
      </section>

      <SectionContainer label="Background" title="Professional Profile">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="relative">
            <div className="w-full aspect-[4/5] max-w-sm mx-auto rounded-3xl overflow-hidden bg-forest/70 border border-soft-green/20 shadow-lg">
              <img
                src="/media/home/portrait.png"
                alt="Melissa Velásquez"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 sm:right-8 grid grid-cols-2 gap-3">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-forest/80 rounded-xl px-4 py-3 shadow-lg border border-white/10 text-center"
                >
                  <p className="font-display font-bold text-xl text-soft-green">{value}</p>
                  <p className="text-xs font-body text-dark/60">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="font-body text-base">
            <div className="rounded-2xl border border-white/10 bg-forest/50 p-7 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-soft-green/80 font-semibold">
                Overview
              </p>
              <div className="mt-4 space-y-5 text-dark/70 leading-relaxed">
                <p>
                  Economist and environmental planner with over six years of experience advancing climate action,
                  urban resilience, sustainable development, and institutional strengthening across Latin America,
                  the Caribbean, and the United States.
                </p>
                <p>
                  I have worked with local and national governments, private-sector actors, multilateral and international organizations,
                  academic institutions, and NGOs to design and implement projects that address complex environmental, social, and
                  institutional challenges — from technical assistance and strategic planning to climate risk analysis, stakeholder engagement,
                  monitoring and evaluation, and policy- and implementation-oriented deliverables.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-display text-2xl text-dark">What I bring</h3>
              <div className="mt-4 space-y-5 text-dark/70 leading-relaxed">
                <p>
                  I bring experience in identifying funding opportunities and helping projects and organizations align with broader climate and
                  development priorities, as well as in corporate sustainability and ESG, including socio-environmental risk assessment,
                  performance framework development, and the alignment of business strategies with global sustainability standards and long-term
                  climate resilience goals.
                </p>
                <p>
                  I specialize in turning complex climate and development priorities into actionable strategies, programs, and partnerships that
                  strengthen institutions, support more inclusive and sustainable economies, and help communities become more resilient.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.22em] text-soft-green/80 font-semibold">
                Areas of focus
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusCards.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-forest/45 p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-soft-green/75 font-semibold">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-dark/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-forest/45 p-7">
              <h3 className="font-display text-2xl text-dark">Education & languages</h3>
              <p className="mt-4 text-dark/70 leading-relaxed">
                I hold a Master of Science in Urban and Environmental Policy and Planning from Tufts University. My perspective is shaped by
                living and working across diverse regional contexts, including the United States, El Salvador, France, and Armenia. I am fluent in
                Spanish and English and have working proficiency in French.
              </p>
              <div className="mt-6 flex gap-4 flex-wrap">
                <Link to="/projects" className="btn-primary">View Projects</Link>
                <Link to="/contact" className="btn-outline">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer label="Approach" title="How I Work" className="bg-forest">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-forest/80 border border-white/10 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="text-3xl mb-4 text-soft-green">{item.icon}</div>
              <h3 className="font-display font-semibold text-dark mb-2">{item.title}</h3>
              <p className="text-sm font-body text-dark/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <section data-reveal className="bg-forest/40 border-y border-white/10 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-semibold text-dark text-xl">
              Interested in collaborating?
            </p>
            <p className="text-sm font-body text-dark/55 mt-1">
              Consulting projects, research partnerships, and speaking engagements.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Start a Conversation →
          </Link>
        </div>
      </section>
    </div>
  )
}
