export default function Card({ children, className = '', hover = true, padding = true }) {
  return (
    <div
      className={`
        bg-white rounded-2xl border border-gray-100 shadow-sm
        ${hover ? 'card-hover cursor-default' : ''}
        ${padding ? 'p-7' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

