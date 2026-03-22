import Card from './Card'

const categoryColors = {
  'Climate Strategy': { bg: 'rgba(149,213,178,0.12)', text: 'rgba(149,213,178,0.95)', border: 'rgba(149,213,178,0.22)' },
  'Risk & Resilience Assessment': { bg: 'rgba(45,106,79,0.18)', text: 'rgba(149,213,178,0.92)', border: 'rgba(149,213,178,0.18)' },
  'Sustainable Urban Development': { bg: 'rgba(27,67,50,0.22)', text: 'rgba(149,213,178,0.88)', border: 'rgba(149,213,178,0.16)' },
  'International Cooperation': { bg: 'rgba(149,213,178,0.10)', text: 'rgba(149,213,178,0.92)', border: 'rgba(149,213,178,0.20)' },
}

export default function ProjectCard({ project }) {
  const { title, category, year, client, description, tags, color } = project
  const colors = categoryColors[category] || { bg: 'rgba(149,213,178,0.10)', text: 'rgba(149,213,178,0.92)', border: 'rgba(149,213,178,0.18)' }

  return (
    <Card className="flex flex-col gap-4 group">
      {/* Top bar */}
      <div className="flex items-start justify-between gap-3">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-body font-medium"
          style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
        >
          {category}
        </span>
        {year ? (
          <span className="text-xs font-body text-dark/55 font-medium shrink-0">{year}</span>
        ) : null}
      </div>

      {/* Accent line */}
      <div
        className="h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
        style={{ background: color }}
      />

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-dark leading-snug">
        {title}
      </h3>

      {/* Client */}
      <p className="text-xs font-body text-dark/60 font-medium tracking-wide uppercase">
        {client}
      </p>

      {/* Description */}
      <p className="text-sm font-body text-dark/70 leading-relaxed flex-1">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/10">
        {tags.map(tag => (
          <span key={tag}
            className="text-xs font-body px-2.5 py-1 bg-white/5 rounded-full text-dark/65">
            {tag}
          </span>
        ))}
      </div>
    </Card>
  )
}
