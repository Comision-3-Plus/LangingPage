import React, { useState } from 'react'
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Simular envío (aquí conectarías con tu backend o servicio de email)
    setTimeout(() => {
      console.log('Form data:', formData)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status después de 5 segundos
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono tracking-tighter">
              TRABAJEMOS <span className="text-white/40">JUNTOS</span>
            </h2>

            <p className="text-base text-white/60 mb-8 leading-relaxed font-mono">
              Si tu proyecto necesita un equipo que pueda manejar complejidad real, estamos listos. Cuéntanos qué necesitas.
            </p>

            {/* Why Contact Us */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-white mt-2"></div>
                <div>
                  <div className="text-white font-mono text-sm mb-1 uppercase tracking-wider">Consultoría gratuita</div>
                  <div className="text-white/60 text-xs font-mono">Te ayudamos a definir el alcance técnico sin costo.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-white mt-2"></div>
                <div>
                  <div className="text-white font-mono text-sm mb-1 uppercase tracking-wider">Propuesta en 48h</div>
                  <div className="text-white/60 text-xs font-mono">Plan detallado con tiempos y costos.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-white mt-2"></div>
                <div>
                  <div className="text-white font-mono text-sm mb-1 uppercase tracking-wider">Sin intermediarios</div>
                  <div className="text-white/60 text-xs font-mono">Hablas con los desarrolladores directamente.</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border border-white/20 p-6">
              <div className="text-white/40 text-xs mb-2 font-mono uppercase tracking-wider">Email directo</div>
              <a href="mailto:contactoblendsoftware@gmail.com" className="text-white hover:text-white/80 font-mono text-xl md:text-2xl font-bold">
                contactoblendsoftware@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-minimal border border-white/20 p-8 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2 font-mono uppercase">MENSAJE ENVIADO</h3>
                <p className="text-white/60 font-mono text-xs">Te responderemos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/60 font-mono text-xs uppercase tracking-wider mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-mono text-sm"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/60 font-mono text-xs uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-mono text-sm"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/60 font-mono text-xs uppercase tracking-wider mb-2">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors resize-none font-mono text-sm"
                    placeholder="Describe tu proyecto: ¿Qué necesitas? ¿Cuál es el objetivo?"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-white/60 bg-white/5 border border-white/20 p-4 font-mono text-xs">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Error. Intenta de nuevo.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-white text-black px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-white/90 disabled:bg-white/20 disabled:text-white/40 transition-all flex items-center justify-center gap-2 group"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      ENVIAR MENSAJE
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-white/40 text-xs text-center font-mono">
                  Al enviar, aceptas que contactemos contigo.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
