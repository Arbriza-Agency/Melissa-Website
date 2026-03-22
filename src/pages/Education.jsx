import SectionContainer from '../components/SectionContainer'
import Timeline from '../components/Timeline'
import { education } from '../data'

const writing = [
  {
    title: 'East Boston’s Climate Resilience: A Resident-Centered Analysis of Coastal Preparedness, Challenges, and Needs',
    type: 'Master’s Thesis',
    institution: 'Tufts University',
    year: '2024',
    abstract:
      'Resident-centered analysis of coastal preparedness, lived challenges, and community needs to inform more effective and equitable resilience planning.',
    image: '/media/gallery/pjg-7454.jpg',
  },
  {
    title: 'Mutual Aid Lessons from COVID-19 in East Boston',
    type: 'Contribution',
    institution: 'Research / Writing',
    year: '2024',
    abstract:
      'Contribution exploring civic infrastructure and community-based resilience during the COVID-19 pandemic in East Boston.',
    image: '/media/gallery/candid-2.jpg',
  },
  {
    title: 'South Boston Waterfront District 2.0',
    type: 'Co-author',
    institution: 'Massachusetts Port Authority (with collaborators)',
    year: '2023',
    abstract:
      'Co-authored work advancing a next-phase vision for the South Boston Waterfront District, supporting climate resilience and urban development priorities.',
    image: '/media/gallery/img-3698.jpg',
  },
  {
    title: 'Climate Action Plan — Richmond, Indiana',
    type: 'Co-author',
    institution: 'City of Richmond, Indiana (with collaborators)',
    year: '2022',
    abstract: 'Co-authored support for the development of the city’s first Climate Action Plan.',
    image: '/media/gallery/detalle-2.jpg',
  },
]

export default function Education() {
  return (
    <div className="pt-20">
      <section data-reveal className="bg-deep-green text-dark py-14 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3 animate-fade-up">
          <p className="section-label text-soft-green">Education & Research</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Academic Background
          </h1>
          <p className="text-dark/70 font-body max-w-2xl mx-auto leading-relaxed">
            Academic training in economics and urban & environmental policy and planning,
            combined with applied research and writing on climate resilience and urban development.
          </p>
        </div>
      </section>

      <SectionContainer
        label="Academic History"
        title="Education"
        subtitle="Degrees and academic programs in economics and urban & environmental policy and planning."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <Timeline items={education} />
          </div>
          <aside className="lg:col-span-5 space-y-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-forest/60 shadow-sm">
              <img
                src="/media/home/feature-1.jpg"
                alt="Fieldwork and project collaboration"
                className="w-full h-56 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-soft-green/80 font-semibold">
                  Academic + Applied
                </p>
                <p className="mt-3 text-sm font-body text-dark/70 leading-relaxed">
                  Research-informed work grounded in local realities, with deliverables designed for implementation.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10 bg-forest/60 shadow-sm">
              <img
                src="/media/raw/dsc3985.jpg"
                alt="Urban landscape and resilience context"
                className="w-full h-56 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-soft-green/80 font-semibold">
                  Global perspective
                </p>
                <p className="mt-3 text-sm font-body text-dark/70 leading-relaxed">
                  Experience shaped across diverse regional contexts, connecting urban development, climate strategy, and sustainability.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </SectionContainer>

      <section data-reveal className="py-20 px-6 bg-light border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="section-label mb-3">Research & Publications</p>
            <h2 className="font-display text-3xl font-bold text-dark">Writing</h2>
          </div>
          <div className="space-y-5">
            {writing.map((item, index) => (
              <div
                key={item.title}
                className="bg-forest/80 rounded-2xl p-7 border border-white/10 card-hover animate-fade-up flex flex-col sm:flex-row gap-5"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="sm:w-28 shrink-0 text-center sm:text-left">
                  <p className="text-xs font-body font-medium text-soft-green">{item.year}</p>
                  <span className="inline-block mt-1 text-xs font-body px-2 py-0.5 rounded-full bg-soft-green/10 text-soft-green border border-soft-green/20">
                    {item.type}
                  </span>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                  <div className="md:col-span-4">
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-deep-green/40">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 md:h-36 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-display font-semibold text-dark text-lg mb-1">{item.title}</h3>
                    <p className="text-xs font-body text-dark/55 mb-3">{item.institution}</p>
                    <p className="text-sm font-body text-dark/70 leading-relaxed">{item.abstract}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
