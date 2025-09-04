// src/components/Projects.jsx

const projects = [
  {
    title: 'Proyecto Uno',
    description: 'Una breve descripción de tu increíble proyecto.',
    image: 'https://via.placeholder.com/300', // Reemplaza con la imagen de tu proyecto
    link: '#',
  },
  {
    title: 'Proyecto Dos',
    description: 'Otra descripción de otro proyecto fantástico.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} className="text-teal-400 hover:underline">Ver proyecto</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;