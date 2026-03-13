import { useState } from 'react'

// Very simplified SVG world map path. Actual rendering uses a dot grid approach.
const PROJECT_LOCATIONS = [
  { id: 1, x: 22,  y: 58,  city: 'Bogotá, Colombia',      project: 'National Climate Action Plan' },
  { id: 2, x: 21,  y: 56,  city: 'Medellín, Colombia',    project: 'Urban Resilience Framework' },
  { id: 3, x: 20,  y: 60,  city: 'Amazon Region',         project: 'REDD+ Carbon Market' },
  { id: 4, x: 21.5,y: 59,  city: 'Cali, Colombia',        project: 'Green Municipal Finance' },
  { id: 5, x: 19,  y: 68,  city: 'Santiago, Chile',       project: 'Pacific Alliance Roadmap' },
  { id: 6, x: 62,  y: 40,  city: 'Dubai, UAE',            project: 'COP28 Climate Finance Brief' },
]

// Simplified continental outlines as SVG paths (viewBox 0 0 100 80)
const CONTINENTS = `
  M 8 28 L 10 25 L 14 24 L 15 27 L 13 32 L 10 35 L 8 33 Z
  M 14 24 L 22 22 L 26 24 L 25 30 L 22 35 L 18 38 L 14 36 L 13 32 L 15 27 Z
  M 40 20 L 50 18 L 58 20 L 65 22 L 67 28 L 60 32 L 50 30 L 42 28 Z
  M 60 22 L 75 20 L 82 25 L 80 35 L 75 38 L 65 36 L 60 30 Z
  M 67 35 L 72 33 L 76 36 L 75 45 L 70 50 L 66 46 L 65 40 Z
  M 35 45 L 42 42 L 48 44 L 48 52 L 42 56 L 36 54 Z
`

export default function MapComponent({ locations = PROJECT_LOCATIONS }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
      {/* Map container */}
      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/30 p-4">
        <svg
          viewBox="0 0 100 80"
          className="w-full h-auto"
          style={{ minHeight: '280px' }}
        >
          {/* Ocean background */}
          <rect width="100" height="80" fill="#EBF5FB" />

          {/* Grid dots */}
          {Array.from({ length: 20 }, (_, row) =>
            Array.from({ length: 25 }, (_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 4 + 2}
                cy={row * 4 + 2}
                r={0.3}
                fill="#CBD5E0"
                opacity={0.5}
              />
            ))
          )}

          {/* Simplified continent shapes */}
          {/* North America */}
          <path d="M8 20 L18 16 L22 18 L24 22 L22 28 L18 30 L14 32 L10 30 L8 26 Z"
                fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="0.3" />
          {/* South America */}
          <path d="M16 35 L24 33 L27 36 L26 44 L22 50 L17 52 L14 48 L14 40 Z"
                fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="0.3" />
          {/* Europe */}
          <path d="M42 15 L52 12 L58 14 L60 18 L56 22 L48 24 L42 22 Z"
                fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="0.3" />
          {/* Africa */}
          <path d="M44 24 L54 22 L60 25 L62 32 L60 42 L54 48 L46 46 L42 38 L42 30 Z"
                fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="0.3" />
          {/* Asia */}
          <path d="M58 12 L80 10 L88 14 L90 22 L84 28 L72 30 L62 28 L58 22 Z"
                fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="0.3" />
          {/* Australia */}
          <path d="M74 46 L84 44 L88 48 L86 56 L80 58 L74 56 L72 50 Z"
                fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="0.3" />

          {/* Project pins */}
          {locations.map(loc => (
            <g key={loc.id}
               onMouseEnter={() => setHovered(loc.id)}
               onMouseLeave={() => setHovered(null)}
               style={{ cursor: 'pointer' }}>
              {/* Pulse ring */}
              <circle
                cx={loc.x} cy={loc.y} r={hovered === loc.id ? 3 : 2}
                fill="#1B4332" opacity={0.15}
                style={{ transition: 'r 0.2s' }}
              />
              {/* Pin dot */}
              <circle
                cx={loc.x} cy={loc.y} r={1.2}
                fill={hovered === loc.id ? '#95D5B2' : '#1B4332'}
                stroke="white" strokeWidth="0.4"
                style={{ transition: 'fill 0.2s' }}
              />
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        {hovered && (() => {
          const loc = locations.find(l => l.id === hovered)
          return loc ? (
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-64
                            bg-deep-green text-white rounded-xl p-3 shadow-xl pointer-events-none">
              <p className="text-xs font-body font-medium text-soft-green mb-0.5">{loc.city}</p>
              <p className="text-sm font-body font-medium">{loc.project}</p>
            </div>
          ) : null
        })()}
      </div>

      {/* Legend */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-deep-green" />
        <p className="text-xs font-body text-dark/50">
          {locations.length} project locations worldwide · hover to explore
        </p>
      </div>
    </div>
  )
}
