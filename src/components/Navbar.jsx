import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo2.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <img src={logo} alt="Blend Software" className="h-20 md:h-24 w-auto brightness-125" />
            <span className="text-white font-mono tracking-tight text-xl md:text-2xl font-bold">BLEND SOFTWARE</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('servicios')} 
                    className="text-white/60 hover:text-white transition-colors uppercase text-sm tracking-wider font-mono">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portfolio')} 
                    className="text-white/60 hover:text-white transition-colors uppercase text-sm tracking-wider font-mono">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('equipo')} 
                    className="text-white/60 hover:text-white transition-colors uppercase text-sm tracking-wider font-mono">
              Equipo
            </button>
            <button onClick={() => scrollToSection('contacto')} 
                    className="bg-white text-black px-6 py-2.5 hover:bg-white/90 font-mono uppercase text-sm tracking-wider transition-all">
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white hover:text-white/80 transition-colors">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <button onClick={() => scrollToSection('servicios')} 
                    className="block w-full text-left px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-all font-mono uppercase text-sm tracking-wider">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portfolio')} 
                    className="block w-full text-left px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-all font-mono uppercase text-sm tracking-wider">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('equipo')} 
                    className="block w-full text-left px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-all font-mono uppercase text-sm tracking-wider">
              Equipo
            </button>
            <button onClick={() => scrollToSection('contacto')} 
                    className="block w-full bg-white text-black px-4 py-3 font-mono uppercase text-sm tracking-wider transition-all hover:bg-white/90">
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
