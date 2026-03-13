import Card from './Card'

const categoryColors = {
  'Climate Strategy':       { bg: '#E8F5E9', text: '#1B4332' },
  'Urban Development':      { bg: '#E3F2FD', text: '#1565C0' },
  'Environmental Economics':{ bg: '#F3E5F5', text: '#6A1B9A' },
  'Public Policy':          { bg: '#FFF3E0', text: '#E65100' },
  'International Cooperation': { bg: '#E0F2F1', text: '#00695C' },
}

export default function ProjectCard({ project }) {
  const { title, category, year, client, description, tags, color } = project
  const colors = categoryColors[category] || { bg: '#F1F8E9', text: '#33691E' }

  return (
    <Card className="flex flex-col gap-4 group">
      {/* Top bar */}
      <div className="flex items-start justify-between gap-3">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-body font-medium"
          style={{ background: colors.bg, color: colors.text }}
        >
          {category}
        </span>
        <span className="text-xs font-body text-dark/40 font-medium shrink-0">{year}</span>
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
      <p className="text-xs font-body text-dark/50 font-medium tracking-wide uppercase">
        {client}
      </p>

      {/* Description */}
      <p className="text-sm font-body text-dark/65 leading-relaxed flex-1">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-gray-50">
        {tags.map(tag => (
          <span key={tag}
            className="text-xs font-body px-2.5 py-1 bg-light rounded-full text-dark/50">
            {tag}
          </span>
        ))}
      </div>
    </Card>
  )
}
