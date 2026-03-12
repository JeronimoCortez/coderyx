import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: '¿Cuánto tiempo tarda en desarrollarse un proyecto web?',
    answer: 'Depende de la complejidad. Una landing page o sitio corporativo toma entre 2 y 4 semanas. Una aplicación web con funcionalidades avanzadas puede tomar entre 6 y 16 semanas. Siempre entregamos un cronograma detallado antes de comenzar.',
  },
  {
    question: '¿Cómo es el proceso de trabajo con Coderyx?',
    answer: 'Trabajamos en sprints ágiles de 1-2 semanas. El proceso comienza con una sesión de descubrimiento para entender tus objetivos, luego diseñamos prototipos para tu aprobación, y finalmente desarrollamos con revisiones continuas. Tendrás acceso a actualizaciones en tiempo real del avance.',
  },
  {
    question: '¿Qué tecnologías utilizan para el desarrollo?',
    answer: 'Nuestro stack principal incluye React, Next.js y TypeScript para el frontend; Node.js y Python para el backend; PostgreSQL y MongoDB para bases de datos. Elegimos las tecnologías más adecuadas para cada proyecto según sus requisitos específicos.',
  },
  {
    question: '¿Ofrecen soporte y mantenimiento post-lanzamiento?',
    answer: 'Sí. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, optimización de rendimiento, resolución de incidencias y pequeñas mejoras funcionales. También tenemos soporte de emergencia disponible 24/7 para proyectos críticos.',
  },
  {
    question: '¿Puedo ver el código fuente de mi proyecto?',
    answer: 'Absolutamente. Todo el código desarrollado es 100% tuyo. Al finalizar el proyecto recibirás acceso completo al repositorio con toda la documentación necesaria para que cualquier desarrollador pueda continuar el trabajo.',
  },
  {
    question: '¿Cómo se define el presupuesto de un proyecto?',
    answer: 'Tras la sesión de descubrimiento preparamos una propuesta detallada con alcance, tecnologías y precio fijo. Trabajamos con precio cerrado en proyectos con scope definido o con tarifa mensual para desarrollo continuo. Sin costos ocultos.',
  },
]

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border-b border-white/8 transition-colors duration-300 ${open ? 'border-white/12' : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <div className="flex items-start gap-4">
          <span className="flex-shrink-0 text-xs font-bold text-gray-600 mt-0.5 group-hover:text-cyan-400 transition-colors font-mono">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-semibold text-base transition-colors ${open ? 'text-cyan-100' : 'text-gray-200 group-hover:text-white'}`}>
            {item.question}
          </span>
        </div>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open
              ? 'bg-cyan-400 border-cyan-400 rotate-45'
              : 'border-white/15 text-gray-400 group-hover:border-white/30 group-hover:text-white'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke={open ? '#000' : 'currentColor'} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m-8-8h16" />
          </svg>
        </span>
      </button>

      {/* Animated answer */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? '300px' : '0px' }}
      >
        <p className="pb-6 pl-9 text-gray-400 text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useReveal()

  return (
    <section id="faq" className="py-32 relative" ref={ref}>
      <div className="orb w-[400px] h-[400px] bg-cyan-500/5 top-1/2 right-0 -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left heading */}
          <div className="lg:col-span-2">
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black leading-tight mb-6">
              Preguntas<br />
              <span className="gradient-text">frecuentes</span>
            </h2>
            <p className="reveal reveal-delay-2 text-gray-400 text-sm leading-relaxed mb-8">
              Resolvemos las dudas más comunes sobre nuestro proceso, tecnologías y formas de trabajo.
            </p>
            <div className="reveal reveal-delay-3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                ¿Tienes otra pregunta? Escríbenos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-3 reveal reveal-delay-1">
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} item={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}