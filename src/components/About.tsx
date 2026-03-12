import { useReveal } from '../hooks/useReveal'

interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
}

const features: FeatureProps[] = [
  {
    title: 'Entrega rápida',
    description: 'Metodologías ágiles con sprints cortos. Ves progreso real desde la primera semana.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Código de calidad',
    description: 'Arquitecturas limpias, tests y documentación. Código que escala sin deuda técnica.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Equipo senior',
    description: 'Desarrolladores con años de experiencia real en productos que millones de personas usan.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="nosotros" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: visual element */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              {/* Main card */}
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5 pointer-events-none" />

                {/* Process steps visual */}
                <div className="space-y-4">
                  {['Descubrimiento', 'Diseño', 'Desarrollo', 'Lanzamiento'].map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-400/20 transition-all duration-300 group cursor-default"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-black font-bold text-sm shadow-lg shadow-cyan-500/20">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold text-sm">{step}</p>
                        <div className="mt-1.5 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full transition-all duration-500"
                            style={{ width: `${100 - i * 15}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">
                        {['Análisis', 'Wireframes', 'Sprint', 'Deploy'][i]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom metric bar */}
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Tiempo promedio por proyecto</span>
                  <span className="text-sm font-bold text-cyan-400">4 – 8 semanas</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#0d0d0d] border border-cyan-400/30 rounded-2xl px-4 py-3 shadow-2xl hidden lg:block">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-300 font-medium">Disponible ahora</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Por qué elegirnos</span>
            </div>
            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black leading-tight mb-6">
              Expertise técnica con<br />
              <span className="gradient-text">visión estratégica</span>
            </h2>
            <p className="reveal reveal-delay-2 text-gray-400 leading-relaxed mb-10">
              No somos un proveedor más. Somos tu equipo técnico extendido, comprometido con el
              éxito real de tu producto. Combinamos velocidad, calidad y comunicación transparente.
            </p>

            <div className="space-y-5">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal reveal-delay-${i + 2} flex gap-4 p-4 rounded-xl hover:bg-white/3 transition-all duration-300 group cursor-default`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/15 transition-colors">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{f.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}