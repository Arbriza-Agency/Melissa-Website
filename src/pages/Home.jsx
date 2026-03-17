import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { projects, expertise } from '../data'
import ProjectCard from '../components/ProjectCard'
import MapComponent from '../components/MapComponent'

const HOME_MEDIA = {
  hero: '/media/home/hero.jpg',
  heroAlt: '/media/home/hero-alt.jpg',
  portrait: '/media/home/portrait.png',
  feature: '/media/home/feature-1.jpg',
  reel: '/media/home/reel.mov',
  gallery: [
    '/media/gallery/pjg-7454.jpg',
    '/media/gallery/pjg-7451.jpg',
    '/media/gallery/img-3698.jpg',
    '/media/gallery/candid-1.jpg',
    '/media/gallery/candid-2.jpg',
    '/media/gallery/detalle-1.jpg',
    '/media/gallery/detalle-2.jpg',
  ],
}

const MotionDiv = motion.div

function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

const ExpertiseIcons = {
  'Climate Strategy': ({ color }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="1.5" opacity="0.25"/>
      <path d="M20 6 C20 6 14 13 14 20 C14 27 20 34 20 34 C20 34 26 27 26 20 C26 13 20 6 20 6Z" stroke={color} strokeWidth="1.8" fill="none"/>
      <path d="M6 20 L34 20" stroke={color} strokeWidth="1.5"/>
      <path d="M8 14 L32 14" stroke={color} strokeWidth="1" opacity="0.5"/>
      <path d="M8 26 L32 26" stroke={color} strokeWidth="1" opacity="0.5"/>
    </svg>
  ),
  'Urban Development': ({ color }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <rect x="4" y="18" width="10" height="18" stroke={color} strokeWidth="1.8" rx="1"/>
      <rect x="15" y="10" width="10" height="26" stroke={color} strokeWidth="1.8" rx="1"/>
      <rect x="26" y="14" width="10" height="22" stroke={color} strokeWidth="1.8" rx="1"/>
      <path d="M4 36 L36 36" stroke={color} strokeWidth="1.5"/>
      <rect x="17" y="26" width="6" height="10" stroke={color} strokeWidth="1.2" rx="0.5" opacity="0.6"/>
    </svg>
  ),
  'Public Policy & Economics': ({ color }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <path d="M6 30 L14 20 L20 24 L28 12 L34 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="20" r="2" fill={color} opacity="0.7"/>
      <circle cx="20" cy="24" r="2" fill={color} opacity="0.7"/>
      <circle cx="28" cy="12" r="2" fill={color} opacity="0.7"/>
      <path d="M6 34 L34 34" stroke={color} strokeWidth="1.5" opacity="0.4"/>
      <path d="M6 10 L6 34" stroke={color} strokeWidth="1.5" opacity="0.4"/>
    </svg>
  ),
  'International Cooperation': ({ color }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="1.8"/>
      <path d="M10 15 Q20 11 30 15" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6"/>
      <path d="M8 22 Q20 28 32 22" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6"/>
      <path d="M20 6 L20 34" stroke={color} strokeWidth="1.2" opacity="0.5"/>
      <path d="M6 20 L34 20" stroke={color} strokeWidth="1.2" opacity="0.5"/>
    </svg>
  ),
  'Research & Insights': ({ color }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <rect x="8" y="6" width="20" height="26" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M12 13 L24 13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 18 L24 18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 23 L19 23" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="28" cy="28" r="6" stroke={color} strokeWidth="1.8" fill="white"/>
      <path d="M32.2 32.2 L36 36" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
}

const PARTNER_LOGOS = [
  { name: 'World Bank',        short: 'WB',    bg: '#003087', text: 'white' },
  { name: 'UNDP',              short: 'UNDP',  bg: '#009BDE', text: 'white' },
  { name: 'IDB',               short: 'IDB',   bg: '#00A3E0', text: 'white' },
  { name: 'GIZ',               short: 'GIZ',   bg: '#E8001D', text: 'white' },
  { name: 'CAF',               short: 'CAF',   bg: '#004B87', text: 'white' },
  { name: 'C40 Cities',        short: 'C40',   bg: '#0F0F0E', text: '#C4A882' },
  { name: 'ICLEI',             short: 'ICLEI', bg: '#161615', text: '#C4A882' },
  { name: 'Pacific Alliance',  short: 'PA',    bg: '#7B5EA7', text: 'white' },
]

export default function Home() {
  const [visible, setVisible] = useState(false)
  const [activeExpertise, setActiveExpertise] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const years = useCounter(8, 1200, visible)
  const countries = useCounter(12, 1500, visible)
  const projects_count = useCounter(20, 1000, visible)

  return (
    <div className="bg-light">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden -mt-24 pt-24" style={{ background: '#0F0F0E' }}>
        {/* Photo backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={HOME_MEDIA.hero}
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.16] saturate-0"
            loading="eager"
            decoding="async"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(15,15,14,0.92) 0%, rgba(15,15,14,0.78) 52%, rgba(15,15,14,1) 100%)' }}
          />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`, opacity: 0.4 }} />
        <div className="absolute pointer-events-none" style={{ top: '-140px', right: '-160px', width: '720px', height: '720px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,168,130,0.16) 0%, transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '-40px', left: '-140px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,168,130,0.07) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 xl:px-10" style={{ paddingTop: '110px', paddingBottom: '60px' }}>
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Headline */}
            <div className="col-span-12 order-2 lg:order-2 flex flex-col items-center text-center" style={{ paddingBottom: '20px' }}>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 text-xs font-medium" style={{ background: 'rgba(196,168,130,0.10)', color: 'rgba(196,168,130,0.92)', border: '1px solid rgba(196,168,130,0.20)', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.5s 0.15s, transform 0.5s 0.15s' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C4A882', display: 'inline-block' }} />
                Available for consulting · Bogotá & Remote
              </div>
              <h1 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(52px, 5.5vw, 80px)', fontWeight: '900', lineHeight: '1.0', letterSpacing: '-0.03em', color: '#F5F1EA', margin: 0, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s 0.25s, transform 0.7s 0.25s' }}>
                I'm <em style={{ color: '#C4A882', fontStyle: 'italic' }}>Melissa,</em><br />
                <span>Climate</span><br />
                <span style={{ color: 'transparent', WebkitTextStroke: '2px #C4A882' }}>Economist</span>
              </h1>
              <p className="mt-6 leading-relaxed" style={{ fontFamily: "'Georgia', serif", fontSize: '15px', color: 'rgba(245,241,234,0.72)', maxWidth: '620px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.7s 0.4s, transform 0.7s 0.4s' }}>
                Climate strategy and policy support for resilient cities and evidence-based decision-making.
              </p>
              <div className="flex items-center justify-center gap-4 mt-8 flex-wrap" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.7s 0.55s, transform 0.7s 0.55s' }}>
                <Link to="/projects" className="group inline-flex items-center gap-2.5 rounded-full font-bold text-sm text-deep-green transition-all duration-300 hover:scale-105" style={{ background: '#C4A882', padding: '14px 28px', boxShadow: '0 10px 40px rgba(196,168,130,0.18)' }}>
                  View Projects
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full font-bold text-sm transition-all duration-300 hover:bg-white/5" style={{ padding: '13px 24px', border: '1px solid rgba(196,168,130,0.45)', color: '#C4A882' }}>Let's Talk</Link>
              </div>
              <div className="flex items-center justify-center gap-2 flex-wrap mt-8" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.7s 0.7s' }}>
                {[
                  `${years}+ years`,
                  `${countries} countries`,
                  `${projects_count}+ projects`,
                ].map((chip) => (
                  <span key={chip} className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(245,241,234,0.86)', border: '1px solid rgba(196,168,130,0.22)' }}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="col-span-12 order-1 lg:order-1 relative flex items-center justify-center mt-4 lg:mt-0" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(26px)', transition: 'opacity 0.9s 0.3s, transform 0.9s 0.3s' }}>
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[420px] sm:w-[420px] sm:h-[480px] md:w-[460px] md:h-[520px]"
                style={{ background: 'radial-gradient(70% 80% at 30% 20%, rgba(196,168,130,0.30) 0%, rgba(15,15,14,0.00) 62%), linear-gradient(180deg, #161615 0%, #0F0F0E 100%)', borderRadius: '55% 45% 40% 60% / 60% 40% 70% 40%', zIndex: 0 }}
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] md:w-[520px] md:h-[520px]"
                style={{ borderRadius: '9999px', border: '1px dashed rgba(196,168,130,0.28)', zIndex: 1 }}
              />
              <div className="relative z-10 w-[280px] h-[420px] sm:w-[340px] sm:h-[480px] md:w-[380px] md:h-[520px]">
                <img
                  src={HOME_MEDIA.portrait}
                  alt="Melissa Velásquez"
                  className="w-full h-full object-contain object-center"
                  style={{ filter: 'drop-shadow(0 30px 40px rgba(27,67,50,0.4))' }}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </section>

      {/* ── CORE AREAS — REDESIGNED ───────────────────────────────────────────── */}
      <section data-reveal className="relative overflow-hidden" style={{ background: '#0F0F0E', padding: '100px 0' }}>

        {/* Photo wash */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.16]">
          <img src={HOME_MEDIA.heroAlt} alt="" className="w-full h-full object-cover object-center saturate-0" loading="lazy" decoding="async" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(900px 520px at 70% 30%, rgba(196,168,130,0.20) 0%, rgba(15,15,14,0.92) 60%, rgba(15,15,14,1) 100%)' }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(196,168,130,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(196,168,130,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        {/* Top glow */}
        <div className="absolute pointer-events-none" style={{ width: '800px', height: '300px', background: 'radial-gradient(ellipse, rgba(45,106,79,0.25) 0%, transparent 70%)', top: '-80px', left: '50%', transform: 'translateX(-50%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 xl:px-10">

          {/* Header */}
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: '#C4A882', letterSpacing: '0.2em' }}>Areas of Practice</p>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '900', color: 'white', margin: 0, lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                Policy-oriented<br />
                <em style={{ color: '#C4A882', fontStyle: 'italic' }}>sustainability</em> expertise
              </h3>
            </div>
            <Link to="/expertise" className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group" style={{ color: '#C4A882', fontFamily: 'Georgia, serif' }}>
              View all expertise
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Tab layout */}
          <div className="grid grid-cols-12 gap-6">

            {/* Left: tab list */}
            <div className="col-span-4 flex flex-col gap-2">
              {expertise.slice(0, 3).map((item, i) => {
                const Icon = ExpertiseIcons[item.title]
                const isActive = activeExpertise === i
                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveExpertise(i)}
                    className="text-left w-full transition-all duration-300"
                    style={{
                      background: isActive ? 'rgba(196,168,130,0.10)' : 'transparent',
                      border: isActive ? '1px solid rgba(196,168,130,0.28)' : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px',
                      padding: '20px 22px',
                      cursor: 'pointer',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: '11px', fontWeight: '700', color: isActive ? '#C4A882' : 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', minWidth: '20px', transition: 'color 0.2s' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div style={{ opacity: isActive ? 1 : 0.4, transition: 'opacity 0.2s', flexShrink: 0 }}>
                        {Icon && <Icon color={isActive ? '#C4A882' : 'white'} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', fontWeight: '700', color: isActive ? 'white' : 'rgba(255,255,255,0.5)', margin: 0, transition: 'color 0.2s' }}>
                          {item.title}
                        </p>
                        {isActive && (
                          <p style={{ fontSize: '12px', color: 'rgba(196,168,130,0.65)', marginTop: '2px', fontFamily: 'Georgia, serif' }}>
                            {item.skills.length} key skills
                          </p>
                        )}
                      </div>
                      <svg className="w-4 h-4 transition-all duration-200 flex-shrink-0" style={{ color: isActive ? '#C4A882' : 'transparent' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    {isActive && (
                      <div style={{ height: '2px', background: 'linear-gradient(90deg, #C4A882, transparent)', borderRadius: '2px', marginTop: '14px', animation: 'slideIn 0.3s ease' }} />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Right: detail panel */}
            <div className="col-span-8">
              {expertise.slice(0, 3).map((item, i) => {
                if (i !== activeExpertise) return null
                const Icon = ExpertiseIcons[item.title]
                return (
                  <div key={item.title} style={{ animation: 'slideIn 0.35s ease' }}>
                    <div className="rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(196,168,130,0.16)', padding: '36px' }}>

                      {/* Icon + title */}
                      <div className="flex items-start gap-5 mb-6">
                        <div className="flex-shrink-0 rounded-2xl flex items-center justify-center" style={{ width: '64px', height: '64px', background: 'rgba(196,168,130,0.10)', border: '1px solid rgba(196,168,130,0.18)' }}>
                          {Icon && <Icon color="#C4A882" />}
                        </div>
                        <div>
                          <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: '900', color: 'white', margin: '0 0 6px 0', letterSpacing: '-0.01em' }}>{item.title}</h4>
                          <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: 'rgba(196,168,130,0.65)', margin: 0 }}>Core area {String(activeExpertise + 1).padStart(2, '0')} of {expertise.slice(0, 3).length}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75', marginBottom: '28px' }}>
                        {item.description}
                      </p>

                      {/* Skills */}
                      <div>
                        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(196,168,130,0.55)', letterSpacing: '0.15em' }}>Key Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, si) => (
                            <span key={skill} className="text-sm font-medium px-4 py-1.5 rounded-full" style={{ background: si === 0 ? 'rgba(196,168,130,0.16)' : 'rgba(255,255,255,0.05)', color: si === 0 ? '#C4A882' : 'rgba(255,255,255,0.65)', border: si === 0 ? '1px solid rgba(196,168,130,0.26)' : '1px solid rgba(255,255,255,0.10)', fontFamily: 'Georgia, serif' }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ height: '1px', background: 'rgba(196,168,130,0.12)', margin: '28px 0' }} />

                      {/* Partners */}
                      <div>
                        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(196,168,130,0.55)', letterSpacing: '0.15em' }}>Organizations worked with</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          {PARTNER_LOGOS.slice(0, 5).map(org => (
                            <div key={org.name} className="flex items-center gap-1.5 rounded-lg px-3 py-1.5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                              <div className="rounded flex items-center justify-center font-black" style={{ width: '20px', height: '20px', background: org.bg, color: org.text, fontSize: '7px', letterSpacing: '-0.01em', flexShrink: 0 }}>
                                {org.short}
                              </div>
                              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Georgia, serif' }}>{org.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Partner logos strip */}
          <div className="mt-16 pt-10" style={{ borderTop: '1px solid rgba(196,168,130,0.14)' }}>
            <p className="text-xs uppercase tracking-widest text-center mb-8" style={{ color: 'rgba(196,168,130,0.55)', letterSpacing: '0.2em' }}>Trusted by leading organizations</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {PARTNER_LOGOS.map(org => (
                <div key={org.name} className="flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(196,168,130,0.16)' }}>
                  <div className="rounded flex items-center justify-center font-black" style={{ width: '24px', height: '24px', background: org.bg, color: org.text, fontSize: '8px', letterSpacing: '-0.01em', flexShrink: 0 }}>
                    {org.short}
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(245,241,234,0.68)', fontFamily: 'Georgia, serif', whiteSpace: 'nowrap' }}>{org.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── MOMENTS & MEDIA ───────────────────────────────────────────────────── */}
      <section data-reveal className="py-20 px-8 xl:px-10 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-dark/50 mb-2 font-body">Visual Highlights</p>
              <h3 className="text-4xl font-black text-dark">Moments & Media</h3>
              <p className="mt-3 text-sm text-dark/55 max-w-2xl font-body leading-relaxed">
                A snapshot of workshops, policy spaces, and the people behind the work.
              </p>
            </div>
            <Link to="/about" className="text-sm font-medium hover:underline text-forest font-body">More about Melissa →</Link>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Video tile */}
            <MotionDiv
              className="col-span-12 lg:col-span-7 overflow-hidden rounded-3xl border border-white/10 bg-forest/70 shadow-sm relative"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-video">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  controls
                  preload="metadata"
                >
                  <source src={HOME_MEDIA.reel} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(27,67,50,0.0) 0%, rgba(27,67,50,0.55) 100%)' }} />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/80 font-body">Featured video</p>
                    <p className="text-xl md:text-2xl font-black text-white font-display">On the ground, in the room</p>
                  </div>
                  <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg" style={{ background: '#C4A882', color: '#0F0F0E' }}>
                    Collaborate →
                  </Link>
                </div>
              </div>
            </MotionDiv>

            {/* Bento images */}
            {[
              { src: HOME_MEDIA.gallery[0], title: 'Conference', span: 'col-span-12 sm:col-span-6 lg:col-span-5' },
              { src: HOME_MEDIA.gallery[2], title: 'Urban work', span: 'col-span-12 sm:col-span-6 lg:col-span-5' },
              { src: HOME_MEDIA.gallery[3], title: 'Workshop', span: 'col-span-12 sm:col-span-6 lg:col-span-4' },
              { src: HOME_MEDIA.gallery[5], title: 'Details', span: 'col-span-12 sm:col-span-6 lg:col-span-4' },
            ].map((item, idx) => (
              <MotionDiv
                key={item.src}
                className={`${item.span} overflow-hidden rounded-3xl border border-white/10 bg-forest/70 shadow-sm group relative`}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: 0.08 * idx }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
              >
                <div className="relative aspect-[4/3] sm:aspect-[3/2]">
                  <img src={item.src} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" loading="lazy" decoding="async" aria-hidden="true" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(27,67,50,0.0) 0%, rgba(27,67,50,0.55) 100%)' }} />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <p className="text-sm font-semibold text-white/95 font-display">{item.title}</p>
                    <span className="text-xs text-white/70 font-body">View</span>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────────────────── */}
      <section data-reveal className="py-20 px-10 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-dark/50 mb-2 font-body">Selected Work</p>
              <h3 className="text-4xl font-black text-dark">Featured Projects</h3>
            </div>
            <Link to="/projects" className="text-sm font-medium hover:underline text-forest font-body">All Projects →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────────────────────────────── */}
      <section data-reveal className="py-20 px-10" style={{ background: '#0F0F0E' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-dark/50 mb-2 text-center font-body">Global Reach</p>
          <h3 className="text-4xl font-black text-center text-dark mb-4">Project Locations</h3>
          <p className="text-sm text-center text-dark/50 mb-10 max-w-xl mx-auto font-body">
            From national climate plans in Colombia to COP side events in Dubai.
          </p>
          <MapComponent />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section data-reveal className="py-20 px-10 text-center" style={{ background: '#0F0F0E' }}>
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-xs uppercase tracking-widest text-soft-green font-body">Let's Collaborate</p>
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
            style={{ background: '#C4A882', color: '#0F0F0E' }}
          >
            Start a Conversation →
          </Link>
        </div>
      </section>

    </div>
  )
}
