import { Link } from 'react-router-dom'

const awardsRecognition = [
  {
    title: 'Future Leaders Fellow',
    institution: 'Tufts University',
    year: '2022',
    description:
      'Recognition for academic excellence within the Urban and Environmental Policy and Planning program.',
  },
  {
    title: 'Claude Stinneford Award in Economics',
    institution: 'Earlham College',
    year: '2022',
    description:
      'Awarded for outstanding academic achievement in economics.',
  },
  {
    title: 'Arthur M. Charles Service Award',
    institution: 'Earlham College',
    year: '2022',
    description:
      'Recognition for service and contributions to the Department of Languages and intercultural engagement.',
  },
]

const certifications = [
  {
    title: 'Just Communities Professional Certification',
    institution: 'Southern Equity & Just Communities',
    year: '2024',
    note: 'Equity-centered training for more just and community-led decision-making.',
  },
  {
    title: 'Sustainability Metrics Certification',
    institution: 'Tufts University',
    year: '2023',
    note: 'Methods and tools for measuring sustainability performance and impact.',
  },
  {
    title: 'Human Subjects Research Certification (CITI Program)',
    institution: 'Research ethics and data protection',
    year: '2023',
    note: 'Training in responsible research conduct, ethics, and data safeguards.',
  },
  {
    title: 'Yale Young Global Scholars',
    institution: 'Yale University',
    year: '2016',
    note: 'Early international academic enrichment focused on global issues and leadership.',
  },
]

function LaurelIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 6C6.4 6.6 5 8.5 5 10.8C5 13.6 6.9 16 9.5 17.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 6C17.6 6.6 19 8.5 19 10.8C19 13.6 17.1 16 14.5 17.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 6.2L13.2 9H16.2L13.8 10.8L14.8 13.8L12 12L9.2 13.8L10.2 10.8L7.8 9H10.8L12 6.2Z" fill="currentColor" />
    </svg>
  )
}

function CertificateIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="4.5" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 11.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 15.5V20L12 18.7L14 20V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RecognitionCard({ item, index }) {
  return (
    <article
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-forest/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-soft-green/30"
      style={{ boxShadow: '0 26px 54px rgba(0,0,0,0.22)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(circle at top right, rgba(196,168,130,0.12) 0%, rgba(196,168,130,0.0) 48%)' }}
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-soft-green/20 bg-soft-green/10 text-soft-green">
            <LaurelIcon />
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-body font-semibold tracking-[0.18em] text-dark/45">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="rounded-full border border-soft-green/20 bg-soft-green/10 px-3 py-1 text-[11px] font-body font-semibold tracking-[0.16em] text-soft-green">
              {item.year}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-display text-[28px] leading-[1.05] text-dark">{item.title}</h3>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-soft-green/80 font-body">
            {item.institution}
          </p>
          <p className="mt-4 text-sm leading-7 text-dark/68 font-body">
            {item.description}
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-soft-green/50 via-soft-green/10 to-transparent" />
      </div>
    </article>
  )
}

function CertificationCard({ item, featured = false }) {
  return (
    <article
      className={`relative overflow-hidden rounded-[26px] border p-6 ${
        featured
          ? 'border-soft-green/22 bg-soft-green/[0.08]'
          : 'border-white/10 bg-white/[0.03]'
      }`}
      style={{ boxShadow: featured ? '0 22px 50px rgba(0,0,0,0.2)' : 'none' }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-soft-green/18 bg-deep-green/60 text-soft-green">
          <CertificateIcon />
        </div>
        <span className="rounded-full border border-white/10 bg-deep-green/60 px-3 py-1 text-[11px] font-body font-semibold tracking-[0.16em] text-dark/55">
          {item.year}
        </span>
      </div>

      <h3 className="mt-5 font-display text-2xl leading-tight text-dark">{item.title}</h3>
      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-soft-green/75 font-body">
        {item.institution}
      </p>
      <p className="mt-4 text-sm leading-7 text-dark/62 font-body">
        {item.note}
      </p>
    </article>
  )
}

export default function Awards() {
  return (
    <div className="pt-20 bg-light">
      <section data-reveal className="bg-deep-green text-dark py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-up">
          <p className="section-label text-soft-green">Awards & Certifications</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Recognition & Achievements
          </h1>
          <p className="text-dark/70 font-body max-w-2xl mx-auto leading-relaxed">
            Awards, fellowships, and certifications that reflect academic rigor,
            service, interdisciplinary learning, and a continued commitment to
            meaningful climate and policy work.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 bg-light">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-8">
              <p className="section-label">Awards & Recognition</p>
              <h2 className="mt-3 font-display text-4xl text-dark">Academic excellence with a human dimension</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-dark/62 font-body">
                These distinctions highlight a blend of analytical strength, service,
                and interdisciplinary engagement across economics, planning, and intercultural work.
              </p>
            </div>

            <div className="space-y-5">
              {awardsRecognition.map((item, index) => (
                <RecognitionCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div
              className="relative overflow-hidden rounded-[34px] border border-white/10 p-7"
              style={{
                background:
                  'linear-gradient(180deg, rgba(24,24,23,0.98) 0%, rgba(15,15,14,1) 100%)',
                boxShadow: '0 30px 70px rgba(0,0,0,0.22)',
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(circle at top right, rgba(196,168,130,0.12) 0%, rgba(196,168,130,0) 38%)' }}
              />
              <div className="relative z-10">
                <p className="section-label">Certifications</p>
                <h2 className="mt-3 font-display text-4xl text-dark">Tools, ethics, and continuous learning</h2>
                <p className="mt-4 text-sm leading-7 text-dark/62 font-body">
                  Professional certifications and academic programs that reinforce a practice grounded
                  in metrics, justice, research integrity, and global perspective.
                </p>

                <div className="mt-8 space-y-4">
                  {certifications.map((item, index) => (
                    <CertificationCard
                      key={item.title}
                      item={item}
                      featured={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 bg-light">
        <div
          className="mx-auto max-w-6xl rounded-[32px] border border-white/10 px-8 py-10"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(196,168,130,0.08) 100%)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.18)',
          }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="section-label">Looking Ahead</p>
              <h2 className="mt-3 font-display text-3xl text-dark">Recognition is most meaningful when it supports future work.</h2>
              <p className="mt-4 text-sm leading-7 text-dark/62 font-body">
                Available for collaborations, policy advisory work, and research engagements
                where academic rigor and practical implementation need to move together.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
