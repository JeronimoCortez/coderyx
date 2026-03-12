import { useReveal } from '../hooks/useReveal'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
  accent: string
}

const services: Service[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    title: 'Desarrollo Frontend',
    description: 'Interfaces modernas, accesibles y responsivas. Construimos con React, Vue.js y las tecnologías más demandadas del mercado.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    accent: 'from-cyan-400/20 to-transparent',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Backend & APIs',
    description: 'Arquitecturas robustas y escalables. Node.js, Python, bases de datos optimizadas y APIs RESTful o GraphQL.',
    tags: ['Node.js', 'Python', 'PostgreSQL'],
    accent: 'from-blue-500/20 to-transparent',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Aplicaciones Web',
    description: 'PWAs y SPAs complejas con experiencia nativa, rendimiento optimizado y capacidades offline avanzadas.',
    tags: ['PWA', 'Performance', 'UX'],
    accent: 'from-violet-500/20 to-transparent',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Consultoría Tech',
    description: 'Acompañamiento estratégico para definir arquitecturas, elegir tecnologías y optimizar tu producto digital.',
    tags: ['Auditoría', 'Arquitectura', 'Roadmap'],
    accent: 'from-emerald-500/20 to-transparent',
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <section id="servicios" className="py-32 relative" ref={ref}>
      <div className="orb w-[500px] h-[400px] bg-cyan-500/5 top-1/2 left-0 -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Servicios</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black leading-tight max-w-md">
              Soluciones que impulsan<br />
              <span className="gradient-text">tu negocio</span>
            </h2>
            <p className="reveal reveal-delay-2 text-gray-400 max-w-xs text-sm leading-relaxed">
              Tecnologías de vanguardia al servicio de tus objetivos de negocio.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i + 1} glass-card rounded-2xl p-7 group relative overflow-hidden`}
            >
              {/* Gradient accent top */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${s.accent}`} />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mb-5 text-cyan-400 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/20 transition-all duration-300">
                {s.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-50 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/8 text-gray-400 group-hover:border-cyan-400/15 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-7 right-7 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}