import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Ambient orbs */}
      <div className="orb w-[700px] h-[500px] bg-cyan-500/8 top-[-100px] left-1/2 -translate-x-1/2" />
      <div className="orb w-[400px] h-[400px] bg-blue-600/6 bottom-0 right-[-100px]" />
      <div className="orb w-[300px] h-[300px] bg-cyan-400/5 bottom-0 left-[-50px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-gray-300 font-medium tracking-wide uppercase">
            Soluciones web a medida
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.92] tracking-tight mb-6 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          Desarrollo web que
          <br />
          <span className="gradient-text">impulsa resultados</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.35s' }}
        >
          Transformamos tu visión en experiencias digitales que convierten.
          <br className="hidden md:block" />
          Expertise técnica al servicio de tu crecimiento.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <a href="#contacto" className="btn-primary px-8 py-4 rounded-xl text-base w-full sm:w-auto">
            Iniciar proyecto →
          </a>
          <a
            href="#servicios"
            className="group flex items-center gap-2 text-gray-400 hover:text-white text-base transition-colors px-6 py-4"
          >
            Ver servicios
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Floating code snippet decoration */}
        <div
          className={`hidden md:flex justify-center transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.65s' }}
        >
          <div className="glass-card rounded-2xl px-6 py-4 text-left font-mono text-xs text-gray-500 max-w-sm w-full border-cyan-400/10">
            <div className="flex gap-1.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500/50" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <span className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="space-y-1">
              <p><span className="text-cyan-400">const</span> <span className="text-white">result</span> = <span className="text-cyan-400">await</span> coderyx.<span className="text-green-400">build</span>{'({'}</p>
              <p className="pl-4"><span className="text-yellow-300">idea</span>: <span className="text-orange-300">"tu visión"</span>,</p>
              <p className="pl-4"><span className="text-yellow-300">quality</span>: <span className="text-orange-300">"premium"</span>,</p>
              <p className="pl-4"><span className="text-yellow-300">speed</span>: <span className="text-cyan-300">Infinity</span></p>
              <p>{'}'});</p>
              <p className="text-gray-600">{'// → '}
                <span className="text-green-400">success</span>
                <span className="inline-block w-2 h-3.5 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none" />
    </section>
  )
}