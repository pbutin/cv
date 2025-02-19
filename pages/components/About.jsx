
const About = () => {
  const skills = [
    { name: 'Bases de données (SQL, PostgreSQL)', level: 90 },
    { name: 'JavaScript (React, Next.js)', level: 90 },
    { name: 'Gestion de projets IT', level: 80 },
    { name: 'Sécurité informatique', level: 70 },
    { name: 'Veille technologique & innovation', level: 95 },
    { name: 'Support technique & assistance utilisateurs', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Agilité (Scrum, Kanban)', level: 80 },
    { name: 'Leadership & management', level: 70 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">À propos de moi</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Qui suis-je?</h3>
            <p className="text-gray-300 mb-6">
            Je suis un développeur web passionné spécialisé dans la création d'expériences numériques modernes et attrayantes. Avec plus de 5 ans d'expérience, j'ai travaillé sur une variété de projets allant des sites vitrines aux applications web complexes.
            </p>
            <p className="text-gray-300 mb-6">
              En tant que responsable informatique, j'ai également piloté des projets stratégiques, géré des infrastructures techniques et encadré des équipes pour garantir la performance, la sécurité et l'évolutivité des solutions mises en place. Cette double expertise me permet d'allier vision technique et gestion opérationnelle pour proposer des solutions robustes et adaptées aux enjeux métiers.
            </p>
            <p className="text-gray-300 mb-6">
              Mon approche se concentre sur la création de solutions élégantes et performantes qui répondent précisément aux besoins des utilisateurs finaux, tout en accordant une attention particulière aux détails et à l'expérience utilisateur.
            </p>
            <div className="flex space-x-4 mt-8">
              <a 
                href="/CV - Pierrick Butin.pdf" 
                target="_blank"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Compétences</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;