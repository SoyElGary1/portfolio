import { useState } from 'react';
import { Dice1Icon as DiceIcon, User, Github, Linkedin, Download} from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import TechFilter from './components/TechFilter';
import ContactForm from './components/ContactForm';
import HeroSwiper from './components/HeroSwiper';
import AboutSwiper from './components/AboutSwiper';

function App() {
  const [selectedTech, setSelectedTech] = useState('all');

  const projects = [
    {
      title: "Plataforma E-commerce",
      description: "Solución completa de comercio electrónico con Spring Boot y React",
      technologies: ["java", "spring", "react", "mysql"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
      repoUrl: "https://github.com/username/ecommerce",
      demoUrl: "https://ecommerce-demo.com"
    },
    {
      title: "Sistema de Gestión de Tareas",
      description: "Herramienta de gestión de proyectos con actualizaciones en tiempo real",
      technologies: ["java", "spring", "react", "mongodb"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=2429&ixlib=rb-4.0.3",
      repoUrl: "https://github.com/username/task-manager",
      demoUrl: "https://task-manager-demo.com"
    },
    {
      title: "Servicio de Autenticación",
      description: "Sistema seguro de autenticación usando Spring Security",
      technologies: ["java", "spring", "security"],
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3",
      repoUrl: "https://github.com/username/auth-service"
    }
  ];

  const technologies = [
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "React", icon: "⚛️" },
    { name: "HTML/CSS", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
  ];

  const filteredProjects = selectedTech === 'all'
    ? projects
    : projects.filter(project => project.technologies.includes(selectedTech.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <section className="relative">
        <nav className="absolute w-full z-10 pt-6 px-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DiceIcon className="h-8 w-8 text-purple-500" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Christopher Nuñez Pardo
                </span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">Sobre Mí</a>
                <a href="#technologies" className="text-gray-300 hover:text-purple-400 transition-colors">Tecnologías</a>
                <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Proyectos</a>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contacto</a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 pt-32 pb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Desarrollador Full Stack
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Como un hábil Game Master, creo soluciones elegantes para desafíos complejos
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/SoyElGary1" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 text-purple-400 hover:bg-gray-700 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="www.linkedin.com/in/soyelgary" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 text-purple-400 hover:bg-gray-700 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="/cv.pdf" download="christopher_nunez_cv.pdf"
                  className="p-2 rounded-full bg-gray-800 text-purple-400 hover:bg-gray-700 transition-colors">
                  <span className="flex items-center">
                    <Download className="h-6 w-6" /> {/* Si tienes un ícono de descarga */}
                    <span className="ml-2">Descargar CV</span> {/* Opcional: texto junto al ícono */}
                  </span>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <HeroSwiper />
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Sobre Mí
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <AboutSwiper />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center space-x-4 mb-4">
                  <User className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold">El Viaje del Desarrollador</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Como Desarrollador Full Stack, abordo cada proyecto como una nueva aventura de juego de mesa. Con experiencia
                  en desarrollo Java y una pasión por crear soluciones elegantes, he dominado las reglas del juego del desarrollo
                  mientras mantengo el entusiasmo por aprender nuevas estrategias.
                </p>
                <p className="text-gray-300">
                  Mi filosofía de desarrollo es como construir un motor de juego perfecto: robusto, escalable y agradable de trabajar.
                  Creo en el código limpio, las pruebas exhaustivas y la creación de aplicaciones que los usuarios amen usar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="technologies" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Tecnologías
          </h2>
          <TechFilter
            technologies={technologies}
            selectedTech={selectedTech}
            onTechSelect={setSelectedTech}
          />
        </div>
      </section>


      <section id="projects" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Proyectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>


      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Contacto
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Christopher Nuñez Pardo. ¡Tira los dados para la iniciativa!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;