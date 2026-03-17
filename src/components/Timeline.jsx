const typeStyles = {
  education:   { dot: 'bg-soft-green', label: 'Degree', labelStyle: 'bg-soft-green/10 text-soft-green border border-soft-green/20' },
  certificate: { dot: 'bg-soft-green', label: 'Certificate', labelStyle: 'bg-soft-green/10 text-soft-green border border-soft-green/20' },
}

export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

      <div className="space-y-10">
        {items.map((item, i) => {
          const style = typeStyles[item.type] || typeStyles.education
          const isLeft = i % 2 === 0

          return (
            <div key={i}
              className={`relative flex items-start gap-6 md:gap-0
                          ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
                          animate-fade-up`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Dot */}
              <div className={`absolute left-5 md:left-1/2 -translate-x-1/2
                               w-3.5 h-3.5 rounded-full border-2 border-white shadow-md
                               ${style.dot} z-10 mt-1.5`} />

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-forest/80 rounded-2xl border border-white/10 shadow-sm p-6
                                hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <span className="text-xs font-body font-medium text-dark/50 tracking-wide">
                      {item.year}
                    </span>
                    <span className={`text-xs font-body font-medium px-2.5 py-0.5 rounded-full
                                     ${style.labelStyle}`}>
                      {style.label}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-dark text-lg leading-snug mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-body font-medium text-soft-green mb-1">
                    {item.institution}
                  </p>
                  <p className="text-xs font-body text-dark/40 mb-3">
                    📍 {item.location}
                  </p>
                  <p className="text-sm font-body text-dark/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
