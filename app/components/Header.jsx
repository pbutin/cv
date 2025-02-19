"use client"

import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight">Pierrick Butin</a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-white transition">Accueil</a>
          <a href="#about" className="text-gray-300 hover:text-white transition">À propos</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition">Projets</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-300" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projets
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;