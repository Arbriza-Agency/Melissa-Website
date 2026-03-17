import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/projects',  label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/awards',    label: 'Awards' },
  { to: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between
                    px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300
                    ${scrolled ? 'shadow-lg bg-deep-green/70 backdrop-blur-xl border border-soft-green/20' : 'bg-deep-green/35 backdrop-blur-md border border-soft-green/15'}`}
      >
        <span className="text-soft-green/80 text-xs font-bold tracking-[0.2em] uppercase hidden sm:block">
          Melissa
        </span>

        <nav className="hidden md:flex items-center gap-0.5">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                 ${isActive ? 'text-soft-green bg-soft-green/10' : 'text-dark/75 hover:text-dark hover:bg-white/5'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/"
          className="w-8 h-8 rounded-full flex items-center justify-center text-deep-green font-bold text-xs shrink-0 bg-soft-green"
        >
          MV
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1.5 ml-3"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-dark/80 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-dark/80 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-dark/80 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden max-w-6xl mx-auto mt-2 rounded-2xl overflow-hidden transition-all duration-300
                    ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} bg-deep-green/80 backdrop-blur-xl border border-soft-green/15 shadow-lg`}
      >
        <nav className="flex flex-col gap-1 p-3">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                 ${isActive ? 'text-soft-green bg-soft-green/10' : 'text-dark/80 hover:text-dark hover:bg-white/5'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
