import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import logo from '../assets/logo2.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Blend Software" className="h-24 md:h-28 w-auto brightness-125" />
              <h3 className="text-2xl md:text-3xl font-bold text-white font-mono tracking-tight">BLEND SOFTWARE</h3>
            </div>
            <p className="text-white/60 text-xs font-mono">
              Software de alta complejidad desde Mendoza, Argentina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-mono text-sm mb-3 uppercase tracking-wider">Navegación</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/60 hover:text-white text-xs font-mono transition-colors">
                Servicios
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/60 hover:text-white text-xs font-mono transition-colors">
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('equipo')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/60 hover:text-white text-xs font-mono transition-colors">
                Equipo
              </button>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/60 hover:text-white text-xs font-mono transition-colors">
                Contacto
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-mono text-sm mb-3 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-2 mb-4">
              <a href="mailto:contactoblendsoftware@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-white text-xs font-mono transition-colors">
                <Mail className="w-4 h-4" />
                contactoblendsoftware@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <a 
                href="#"
                className="flex items-center justify-center w-9 h-9 border border-white/20 hover:border-white/40 text-white/60 hover:text-white transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="#"
                className="flex items-center justify-center w-9 h-9 border border-white/20 hover:border-white/40 text-white/60 hover:text-white transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-mono">
            © {currentYear} BLEND SOFTWARE. Mendoza, Argentina.
          </p>
          <div className="flex gap-6 text-white/40 text-xs font-mono">
            <button className="hover:text-white transition-colors">Privacidad</button>
            <button className="hover:text-white transition-colors">Términos</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
