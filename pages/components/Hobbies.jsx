import { Brain, Hop, HouseWifi, Timer } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      title: "Course à pied",
      description: "Passionné de course d'orientation et adepte du semi-marathon, je pratique régulièrement ces disciplines qui allient endurance et dépassement de soi.",
      icon: <Timer />
    },
    {
      title: "Énigmes",
      description: "Amateur de défis intellectuels sous toutes leurs formes : jeux de plateau, jeux vidéos, livres d'énigmes et escape games.",
      icon: <Brain />
    },
    {
      title: "IoT",
      description: "Passionné de domotique et d'objets connectés, je développe mon écosystème intelligent avec Home Assistant.",
      icon: <HouseWifi />
    },
    {
      title: "Zythologie",
      description: "Brasseur amateur et amateur de bières, j'apprécie découvrir de nouvelles saveurs et fabriquer mes propres bières artisanales.",
      icon: <Hop />
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Mes passions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gray-800 rounded-full mb-4 text-blue-500">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{hobby.title}</h3>
                <p className="text-gray-400">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;