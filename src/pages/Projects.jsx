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
      <section className="bg-deep-green text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-up">
          <p className="section-label text-soft-green">Portfolio</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Selected Projects
          </h1>
          <p className="text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
            A selection of projects spanning climate policy, urban resilience,
            environmental economics, and international cooperation.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-6">Project Locations</p>
          <MapComponent />
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-6 bg-light">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200
                  ${active === cat
                    ? 'bg-deep-green text-white shadow-sm'
                    : 'bg-white text-dark/60 border border-gray-200 hover:border-deep-green hover:text-deep-green'
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
            <div className="text-center py-16 text-dark/40 font-body">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
