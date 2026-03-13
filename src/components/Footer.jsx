import { Link } from 'react-router-dom'

const pages = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/projects',  label: 'Projects' },
  { to: '/education', label: 'Education & Research' },
  { to: '/awards',    label: 'Awards & Certifications' },
]

const focus = [
  'Climate Strategy and Policy',
  'Sustainable Urban Development',
  'Environmental Economics',
  'International Cooperation',
]

export default function Footer() {
  return (
    <footer className="text-white py-14 px-10" style={{ background: '#1B4332' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h5 className="font-display font-black text-lg mb-3">
            Melissa Velásquez
          </h5>
          <p className="text-sm leading-relaxed mb-4 text-soft-green/80 font-body">
            Economist focused on climate strategy, sustainability, and urban development.
            Professional profile for policy-oriented consulting and research collaboration.
          </p>
          <div className="space-y-1.5 text-sm text-soft-green/80 font-body">
            <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <span>✉</span> melissa.velasquez@consultoria.com
            </p>
            <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <span>🔗</span> linkedin.com/in/melissavelasquez
            </p>
            <p className="flex items-center gap-2">
              <span>📍</span> Bogotá, Colombia · Remote Available
            </p>
          </div>
        </div>

        {/* Pages */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] mb-4 text-soft-green/60 font-body">
            Pages
          </p>
          <ul className="space-y-2">
            {pages.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-soft-green/80 font-body transition-colors duration-200 hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Focus */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] mb-4 text-soft-green/60 font-body">
            Focus
          </p>
          <ul className="space-y-2.5">
            {focus.map(f => (
              <li key={f} className="flex items-center gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#95D5B2' }}
                />
                <span className="text-sm text-soft-green/80 font-body">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(149, 213, 178, 0.25)' }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-soft-green transition-colors duration-200 hover:text-white font-body"
            >
              Start a Collaboration →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-6" style={{ borderTop: '1px solid rgba(149, 213, 178, 0.25)' }}>
        <p className="text-xs text-soft-green/55 font-body">
          © {new Date().getFullYear()} Melissa Velásquez. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
