import { useState, useRef, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

interface FormData {
  name: string
  email: string
  budget: string
  message: string
}

const budgetOptions = [
  { value: '< 200',    label: 'Menos de U$D200',   sub: 'Proyectos pequeños' },
  { value: '200-600',  label: 'U$D200 – U$D600',      sub: 'Webs y MVPs' },
  { value: '600-1000', label: 'U$D600 – U$D1,000',    sub: 'Apps robustas' },
  { value: '> 1000',   label: 'Más de U$D1,000',    sub: 'Proyectos enterprise' },
]

function BudgetSelect({
  value,
  onChange,
  inputBase,
}: {
  value: string
  onChange: (val: string) => void
  inputBase: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const selected = budgetOptions.find(o => o.value === value)

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className={`${inputBase} flex items-center justify-between cursor-pointer ${
          open ? 'border-cyan-400/50 bg-white/[0.06]' : ''
        }`}
      >
        <span className={selected ? 'text-white' : 'text-gray-600'}>
          {selected ? selected.label : 'Selecciona un rango'}
        </span>

        {/* Chevron */}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? 'rotate-180 text-cyan-400' : 'text-gray-500'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute z-50 left-0 right-0 mt-2 rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl shadow-black/60 backdrop-blur-xl">
          {/* Línea decorativa superior */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <ul className="py-1">
            {budgetOptions.map(opt => {
              const isActive = opt.value === value
              return (
                <li key={opt.value}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt.value)
                      setOpen(false)
                    }}
                    className={`w-full flex items-center justify-between px-5 py-3.5 text-left transition-all duration-200 group ${
                      isActive
                        ? 'bg-cyan-400/10 text-cyan-400'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {/* Label + subtítulo */}
                    <span className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold">{opt.label}</span>
                      <span
                        className={`text-xs transition-colors duration-200 ${
                          isActive
                            ? 'text-cyan-400/70'
                            : 'text-gray-600 group-hover:text-gray-400'
                        }`}
                      >
                        {opt.sub}
                      </span>
                    </span>

                    {/* Check si está activo */}
                    {isActive && (
                      <svg
                        className="w-4 h-4 text-cyan-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Divisor entre opciones (excepto la última) */}
                  {opt.value !== '> 50k' && (
                    <div className="mx-5 h-px bg-white/5" />
                  )}
                </li>
              )
            })}
          </ul>

          {/* Línea decorativa inferior */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      )}
    </div>
  )
}

export default function ContactForm() {
  const ref = useReveal()
  const [form, setForm] = useState<FormData>({ name: '', email: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSent(true)
  }

  const inputBase =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.06] transition-all duration-300'

  return (
    <section id="contacto" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="reveal flex items-center gap-3 mb-5 justify-center">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Contacto</span>
              <span className="h-px w-10 bg-cyan-400" />
            </div>
            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black leading-tight mb-4">
              ¿Listo para construir<br />
              <span className="gradient-text">algo increíble?</span>
            </h2>
            <p className="reveal reveal-delay-2 text-gray-400">
              Cuéntanos tu proyecto y te respondemos en menos de 24 horas.
            </p>
          </div>

          {/* Form card */}
          <div className="reveal reveal-delay-2 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-400 text-sm">Nos pondremos en contacto contigo en menos de 24 horas.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Custom Select */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                    Presupuesto estimado
                  </label>
                  <BudgetSelect
                    value={form.budget}
                    onChange={val => setForm({ ...form, budget: val })}
                    inputBase={inputBase}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Cuéntanos tu proyecto</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe brevemente qué necesitas construir..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-primary w-full py-4 rounded-xl text-base mt-2"
                >
                  Enviar mensaje →
                </button>
                <p className="text-center text-xs text-gray-600">
                  Al enviar, aceptas nuestra política de privacidad. Sin spam.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}