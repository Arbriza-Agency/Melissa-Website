export default function Card({ children, className = '', hover = true, padding = true }) {
  return (
    <div
      className={`
        bg-forest/80 rounded-2xl border border-white/10 shadow-sm
        ${hover ? 'card-hover cursor-default' : ''}
        ${padding ? 'p-7' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

