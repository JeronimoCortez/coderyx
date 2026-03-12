import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

interface FormData {
  name: string
  email: string
  budget: string
  message: string
}

export default function ContactForm() {
  const ref = useReveal()
  const [form, setForm] = useState<FormData>({ name: '', email: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSent(true)
  }

  const inputBase =
    'w-full bg-white/4 border border-white/8 rounded-xl px-5 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/6 transition-all duration-300'

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
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Presupuesto estimado</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={inputBase + ' cursor-pointer'}
                  >
                    <option value="" disabled className="bg-[#181818]">Selecciona un rango</option>
                    <option value="< 5k" className="bg-[#181818]">Menos de $5,000</option>
                    <option value="5k-15k" className="bg-[#181818]">$5,000 – $15,000</option>
                    <option value="15k-50k" className="bg-[#181818]">$15,000 – $50,000</option>
                    <option value="> 50k" className="bg-[#181818]">Más de $50,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Cuéntanos tu proyecto</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe brevemente qué necesitas construir..."
                    className={inputBase + ' resize-none'}
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