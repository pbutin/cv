"use client"

import { useState } from 'react';
import { ExternalLinkIcon, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 8,
      title: 'Blind-Test',
      category: 'mobile',
      image: '/projects/blind-test.png',
      tags: ['Travail en cours', 'NextJS', 'Tailwind', 'TypeScript', 'GoogleSheetAPI'],
      description: 'Création d\'une application mobile de gestion de blindtest pour l\'entreprise Francis-mixe.',
      demoLink: 'https://blindtest.butin.eu/administration',
      codeLink: '',
    },
    {
      id: 7,
      title: 'Responsable Informatique - Lamie Mutuelle',
      category: 'web',
      image: '/projects/lamie-mutuelle.png',
      tags: ['ReactJS', 'NodeJS', 'PostgreSQL', 'Agile', 'Gestion de projet'],
      description: 'Supervision de la sécurité des systèmes d\'information, gestion des données, formation des utilisateurs et administration des actifs numériques.',
      demoLink: 'https://www.lamie-mutuelle.com/',
      codeLink: '',
    },
    {
      id: 6,
      title: 'O-Temps pour soi',
      category: 'web',
      image: '../projects/o-tempspoursoi.png',
      tags: ['HTML', 'MaterializeCSS'],
      description: 'Création d\'un site vitrine pour l\'entreprise O-tempsPourSoi.',
      demoLink: 'https://o-tempspoursoi.fr/',
      codeLink: 'https://github.com/pbutin/oTempsPourSoi',
    },

    {
      id: 5,
      title: 'Consultant - Amadeus',
      category: 'web',
      image: '/projects/Amadeus_Logo.svg',
      tags: ['C# .NET', 'Angular', 'Agile', 'Kanban'],
      description: 'Projet de suivi et d\'alerte en temps réel des voyageurs. Sécurisation et amélioration de la fiabilité du système.',
      demoLink: 'https://amadeus.com/',
      codeLink: '',
    },
    {
      id: 4,
      title: 'Consultant - Amadeus',
      category: 'web',
      image: '/projects/Amadeus_Logo.svg',
      tags: ['C# .NET', 'KnockoutJS', 'Agile - SAFe'],
      description: 'Amélioration d\'un ERP hôtelier, refonte du système d\'autorisation vers un modèle granulaire basé sur les permissions.',
      demoLink: 'https://amadeus.com/',
      codeLink: '',
    },
    {
      id: 3,
      title: 'Projet de fin d\'étude - Sopra Steria',
      category: 'mobile',
      image: '/projects/sopra-steria.jpg',
      tags: ['C#', 'Unity 3D', 'Blender', 'Conception UX/UI'],
      description: 'Prototype de borne holographique pour le retail, avec interface vocale interactive.',
      demoLink: 'https://www.soprasteria.com/fr/',
      codeLink: '',
    },
    {
      id: 2,
      title: 'Arcelor Mittal',
      category: 'VBA',
      image: '/projects/arcelor.jpg',
      tags: ['VBA', 'Agile', 'Cycle en V'],
      description: 'Développement d\'un outil d\'aide au suivi de la production pour une ligne de fabrication.',
      demoLink: 'https://france.arcelormittal.com/',
      codeLink: '',
    },
    {
      id: 1,
      title: 'Jacquart et Fils',
      category: 'data',
      image: '/projects/jacquart.jpg',
      tags: ['MySQL', 'HTML/CSS', 'JavaScript', 'Cycle en V'],
      description: 'Optimisation du stockage des nomenclatures et automatisation du calcul des prix de revient.',
      demoLink: 'https://www.jacquart.fr/',
      codeLink: '',
    },
];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Mes Projets</h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-10 space-x-4">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-md transition ${
              activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Tous
          </button>
          <button 
            onClick={() => setActiveFilter('web')}
            className={`px-4 py-2 rounded-md transition ${
              activeFilter === 'web' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Web
          </button>
          <button 
            onClick={() => setActiveFilter('mobile')}
            className={`px-4 py-2 rounded-md transition ${
              activeFilter === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Mobile
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                  <div className="flex space-x-4">
                    { project.demoLink  && (
                      <a 
                        href={project.demoLink} 
                        target="_blank"
                        className="p-2 bg-white rounded-full hover:bg-gray-200 transition"
                      >
                        <ExternalLinkIcon size={20} className="text-gray-900" />
                      </a>
                    )}
                    { project.codeLink  && (
                      <a 
                        href={project.codeLink} 
                        target="_blank"
                        className="p-2 bg-white rounded-full hover:bg-gray-200 transition"
                      >
                        <Github size={20} className="text-gray-900" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;