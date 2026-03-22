import { useState } from 'react'
import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'
import MapComponent from '../components/MapComponent'

const categories = ['All', ...new Set(projects.map(p => p.category))]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <div className="pt-20">

      {/* Header */}
      <section data-reveal className="bg-deep-green text-dark py-14 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3 animate-fade-up">
          <p className="section-label text-soft-green">Portfolio</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Selected Projects
          </h1>
          <p className="text-dark/70 font-body max-w-2xl mx-auto leading-relaxed">
            A selection of work across climate adaptation planning, urban resilience,
            sustainable development, and international cooperation.
          </p>
        </div>
      </section>

      {/* Map */}
      <section data-reveal className="py-16 px-6 bg-light border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-6">Project Locations</p>
          <MapComponent />
        </div>
      </section>

      {/* Filter + Grid */}
      <section data-reveal className="py-16 px-6 bg-light">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200
                  ${active === cat
                    ? 'bg-soft-green text-deep-green shadow-sm'
                    : 'bg-forest/80 text-dark/75 border border-white/10 hover:border-soft-green/30 hover:text-dark'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div key={project.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-dark/50 font-body">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
