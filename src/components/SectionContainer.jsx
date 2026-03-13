export default function SectionContainer({
  label,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
  centered = false,
}) {
  return (
    <section className={`py-20 px-6 ${dark ? 'bg-deep-green text-white' : 'bg-light'} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(label || title || subtitle) && (
          <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
            {label && (
              <p className={`section-label mb-3 ${dark ? 'text-soft-green' : ''}`}>
                {label}
              </p>
            )}
            {title && (
              <h2 className={`font-display text-3xl md:text-4xl font-bold leading-tight
                              ${dark ? 'text-white' : 'text-dark'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-4 text-base font-body leading-relaxed max-w-2xl
                             ${centered ? 'mx-auto' : ''}
                             ${dark ? 'text-white/70' : 'text-dark/60'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
