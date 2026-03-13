import { awards } from '../data'

const categoryStyles = {
  'Recognition': { bg: 'bg-amber-50',   text: 'text-amber-700',  dot: 'bg-amber-400' },
  'Research':    { bg: 'bg-blue-50',    text: 'text-blue-700',   dot: 'bg-blue-400' },
  'Grant':       { bg: 'bg-purple-50',  text: 'text-purple-700', dot: 'bg-purple-400' },
  'Academic':    { bg: 'bg-green-50',   text: 'text-green-700',  dot: 'bg-green-500' },
}

export default function Awards() {
  return (
    <div className="pt-20">

      {/* Header */}
      <section className="bg-deep-green text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-up">
          <p className="section-label text-soft-green">Awards & Certifications</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Recognition & Achievements
          </h1>
          <p className="text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
            Awards, fellowships, and recognition received throughout professional
            and academic career.
          </p>
        </div>
      </section>

      {/* Awards grid */}
      <section className="py-20 px-6 bg-light">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, i) => {
              const style = categoryStyles[award.category] || categoryStyles['Recognition']
              return (
                <div key={award.title}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm
                             card-hover animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}>

                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-body font-medium
                                     px-2.5 py-1 rounded-full ${style.bg} ${style.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {award.category}
                    </span>
                    <span className="text-xs font-body text-dark/40 font-medium shrink-0">
                      {award.year}
                    </span>
                  </div>

                  {/* Trophy */}
                  <div className="text-3xl mb-3">🏆</div>

                  <h3 className="font-display font-semibold text-dark text-lg mb-1 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs font-body font-medium text-forest mb-3 uppercase tracking-wide">
                    {award.issuer}
                  </p>
                  <p className="text-sm font-body text-dark/60 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
