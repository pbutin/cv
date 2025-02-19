
import { ArrowDownIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/40"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Pierrick Butin
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Responsable informatique et développeur Web & Mobile
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
          >
            Voir mes projets
          </a>
          <a 
            href="#contact"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition"
          >
            Me contacter
          </a>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition animate-bounce"
      >
        <ArrowDownIcon size={24} />
      </a>
    </section>
  );
};

export default Hero;