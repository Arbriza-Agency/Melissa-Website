import { Link } from 'react-router-dom'
import SectionContainer from '../components/SectionContainer'
import { stats } from '../data'

const values = [
  { icon: '🔬', title: 'Evidence-Based', desc: 'Every recommendation grounded in rigorous economic analysis and empirical research.' },
  { icon: '🤝', title: 'Collaborative', desc: 'Bridging government, civil society, and international organizations through inclusive processes.' },
  { icon: '🌍', title: 'Systems Thinking', desc: 'Understanding climate as an interconnected challenge across economic, social, and institutional dimensions.' },
  { icon: '📐', title: 'Practical Design', desc: 'Translating complex policy frameworks into actionable, implementable solutions.' },
]

export default function About() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section data-reveal className="bg-deep-green text-dark py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-up">
          <p className="section-label text-soft-green">About</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Melissa Velásquez
          </h1>
          <p className="text-dark/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Economist working at the intersection of climate strategy, economic systems,
            and urban development.
          </p>
        </div>
      </section>

      {/* ── BIO ── */}
      <SectionContainer label="Background" title="Professional Profile">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Portrait */}
          <div className="relative">
            <div className="w-full aspect-[4/5] max-w-sm mx-auto rounded-3xl overflow-hidden
                            bg-forest/70 border border-soft-green/20 shadow-lg">
              <img
                src="/media/home/portrait.png"
                alt="Melissa Velásquez"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-4 -right-4 sm:right-8 grid grid-cols-2 gap-3">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-forest/80 rounded-xl px-4 py-3 shadow-lg
                                            border border-white/10 text-center">
                  <p className="font-display font-bold text-xl text-soft-green">{value}</p>
                  <p className="text-xs font-body text-dark/60">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 font-body text-dark/70 leading-relaxed text-base">
            <p>
              Melissa Velásquez is an economist with over 8 years of experience supporting governments,
              international organizations, and development banks in designing evidence-based policies
              at the intersection of climate change, sustainability, and urban development.
            </p>
            <p>
              Her professional trajectory spans Colombia's leading think tanks and universities,
              multilateral organizations such as the World Bank, UNDP, and IDB, as well as
              bilateral cooperation programs focused on green transitions and urban resilience.
            </p>
            <p>
              She holds a Master's degree in Environmental Economics from the London School of
              Economics, where she focused on carbon pricing mechanisms and their distributional
              implications for emerging economies.
            </p>
            <p>
              Melissa is fluent in Spanish, English, and French, and brings multicultural
              experience from working across Latin America, Europe, and multilateral forums
              including COP negotiations.
            </p>
            <div className="flex gap-4 pt-4">
              <Link to="/projects" className="btn-primary">View Projects</Link>
              <Link to="/contact"  className="btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ── VALUES ── */}
      <SectionContainer label="Approach" title="How I Work" className="bg-forest">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={v.title}
              className="p-6 rounded-2xl bg-forest/80 border border-white/10 card-hover
                         animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}>
              <div className="text-3xl mb-4 text-soft-green">{v.icon}</div>
              <h3 className="font-display font-semibold text-dark mb-2">{v.title}</h3>
              <p className="text-sm font-body text-dark/70 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ── CONTACT STRIP ── */}
      <section data-reveal className="bg-forest/40 border-y border-white/10 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center
                        justify-between gap-6">
          <div>
            <p className="font-display font-semibold text-dark text-xl">
              Interested in collaborating?
            </p>
            <p className="text-sm font-body text-dark/55 mt-1">
              Open to consulting projects, research partnerships, and speaking engagements.
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
