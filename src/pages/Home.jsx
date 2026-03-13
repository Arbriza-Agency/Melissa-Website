import { Link } from 'react-router-dom'
import { stats, partners, projects, expertise } from '../data'
import ProjectCard from '../components/ProjectCard'
import MapComponent from '../components/MapComponent'

const StarIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="#2D6A4F">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function Home() {
  return (
    <div className="bg-light">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-light">

        {/* Subtle bg radial */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #95D5B2 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1B4332 0%, transparent 40%)',
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 pt-28 pb-16
            grid grid-cols-12 items-center gap-6">

          {/* ── LEFT – Testimonial & Stats ── */}
          <div className="col-span-3 space-y-6">
            {/* Quote */}
            <div className="text-6xl font-black leading-none text-forest">"</div>
            <p className="text-sm md:text-[15px] text-dark/70 leading-6 md:leading-7 font-body">
              Sustainability and climate action are among the defining priorities of our time,
              shaping how cities grow, how economies evolve, and how institutions operate.
              Melissa Velásquez works at the intersection of climate strategy, economic systems,
              and urban development to support resilient and sustainable communities.
            </p>

            {/* Stars */}
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-xs text-dark/50 font-body">8+ Years Expertise</p>
            </div>

            {/* Projects led */}
            <div className="pt-4" style={{ borderTop: '1px solid #E9ECEF' }}>
              <p className="text-4xl font-black text-dark">20+</p>
              <p className="text-sm text-dark/50 mt-1 font-body">Projects Led</p>
            </div>

            {/* Partners */}
            <div className="pt-4" style={{ borderTop: '1px solid #E9ECEF' }}>
              <p className="text-xs text-dark/50 uppercase tracking-widest mb-3 font-body">Worked with</p>
              <div className="flex flex-col gap-1.5">
                {partners.slice(0, 4).map(p => (
                  <span key={p} className="text-xs font-medium text-dark/50 font-body">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── CENTER – Name + Photo + CTAs ── */}
          <div className="col-span-6 flex flex-col items-center text-center relative">

            

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl font-black leading-tight tracking-tight text-dark mb-1">
              I'm <span className="text-forest">Melissa,</span>
            </h1>
            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-dark mb-8">
              Climate Economist
            </h2>

            {/* Photo with circle */}
            <div className="relative flex items-end justify-center overflow-visible"
                 style={{ height: '500px', width: '660px' }}>
              {/* Semicircle background */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{
                  width: '600px',
                  height: '350px',
                  background: '#95D5B2',
                  borderTopLeftRadius: '500px',
                  borderTopRightRadius: '500px',
                }}
              />
              <div
                className="relative z-10 flex items-end justify-center -mb-1"
                style={{ width: '460px', height: '540px' }}
              >
                <img
                  src="/Perfil.png"
                  alt="Melissa Velásquez portrait"
                  className="w-full h-full object-contain object-bottom"
                  style={{ filter: 'drop-shadow(0 20px 26px rgba(27,67,50,0.25))' }}
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-5">
              <Link
                to="/projects"
                className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white text-sm shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: '#1B4332' }}
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-deep-green text-sm border-2 border-deep-green transition-all hover:bg-deep-green hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* ── RIGHT – Stats ── */}
          <div className="col-span-3 flex flex-col items-end space-y-6">
            {/* Stars + years */}
            <div className="text-right">
              <div className="flex justify-end gap-1 mb-1">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-5xl font-black text-dark">8+</p>
              <p className="text-sm text-dark/50 uppercase tracking-widest font-body">Years</p>
              <p className="text-xs text-dark/50 font-body">Expertise</p>
            </div>

            {/* Countries */}
            <div className="text-right w-full" style={{ borderTop: '1px solid #E9ECEF', paddingTop: '1.5rem' }}>
              <p className="text-4xl font-black text-dark">12</p>
              <p className="text-sm text-dark/50 mt-1 font-body">Countries</p>
            </div>

            {/* Core domains */}
            <div className="text-right w-full" style={{ borderTop: '1px solid #E9ECEF', paddingTop: '1.5rem' }}>
              <p className="text-4xl font-black text-forest">3</p>
              <p className="text-sm text-dark/50 mt-1 font-body">Core Domains</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE AREAS ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-10" style={{ background: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-center uppercase tracking-widest text-dark/50 mb-2 font-body">
            Core Areas
          </p>
          <h3 className="text-4xl font-black text-center text-dark mb-14">
            Policy-oriented sustainability expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.slice(0, 3).map((item, i) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm
                           hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 bg-soft-green/25"
                >
                  {item.icon}
                </div>
                <h4 className="font-black text-lg text-dark mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-dark/60 leading-relaxed mb-4 font-body">{item.description}</p>
                <div
                  className="h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ background: '#2D6A4F' }}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium border-2 border-deep-green text-deep-green hover:bg-deep-green hover:text-white transition-all duration-200 font-body"
            >
              View All Expertise Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────────────────── */}
      <section className="py-20 px-10 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-dark/50 mb-2 font-body">Selected Work</p>
              <h3 className="text-4xl font-black text-dark">
                Featured Projects
              </h3>
            </div>
            <Link
              to="/projects"
              className="text-sm font-medium hover:underline text-forest font-body"
            >
              All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-10" style={{ background: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-dark/50 mb-2 text-center font-body">
            Global Reach
          </p>
          <h3 className="text-4xl font-black text-center text-dark mb-4">
            Project Locations
          </h3>
          <p className="text-sm text-center text-dark/50 mb-10 max-w-xl mx-auto font-body">
            From national climate plans in Colombia to COP side events in Dubai.
          </p>
          <MapComponent />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-10 text-center" style={{ background: '#1B4332' }}>
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-xs uppercase tracking-widest text-soft-green font-body">
            Let's Collaborate
          </p>
          <h3 className="text-3xl md:text-4xl font-black text-white">
            Ready to advance your climate or sustainability initiative?
          </h3>
          <p className="text-soft-green/80 leading-relaxed text-sm font-body">
            Whether you're designing a national policy, planning a resilient city,
            or seeking evidence-based strategy — let's build something that lasts.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg"
            style={{ background: '#95D5B2', color: '#1B4332' }}
          >
            Start a Conversation →
          </Link>
        </div>
      </section>

    </div>
  )
}
