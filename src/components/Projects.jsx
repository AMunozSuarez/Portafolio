import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiDatabase, FiServer, FiMonitor } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión para Restaurantes",
      description: "Plataforma completa para la gestión de restaurantes con control de pedidos, caja y stock. Actualmente en marcha blanca con varios establecimientos piloto.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Control de pedidos",
        "Gestión de inventario y stock",
        "Sistema de caja integrado",
        "Dashboard de métricas y reportes",
        "Interfaz responsiva para tablets y móviles"
      ],
      status: "En desarrollo",
      role: "Líder de proyecto y desarrollador principal",
      icon: <FiMonitor className="text-2xl text-primary-500" />
    },
    {
      id: 2,
      title: "Sistema de Atención al Cliente",
      description: "Sistema interno para automatizar y optimizar los flujos de atención al cliente, mejorando los tiempos de respuesta y la satisfacción del usuario.",
      technologies: ["Django", "MariaDB", "Bootstrap", "Python", "Docker"],
      features: [
        "Gestión de tickets y casos",
        "Automatización de flujos de trabajo",
        "Dashboard de métricas de atención",
        "Integración con email y notificaciones",
        "Reportes de performance y SLA"
      ],
      status: "Producción",
      role: "Desarrollador Full Stack",
      icon: <FiServer className="text-2xl text-primary-500" />
    },
    {
      id: 3,
      title: "RQ – Requerimientos de Personal",
      description: "Sistema para la gestión eficiente de requerimientos y solicitudes de personal, optimizando los procesos de recursos humanos.",
      technologies: ["Django", "React", "MariaDB", "Bootstrap", "Docker"],
      features: [
        "Gestión de solicitudes de personal",
        "Flujos de aprobación",
        "Panel de control para RRHH",
        "Integración con sistemas existentes",
        "Reportes y analytics avanzados"
      ],
      status: "Producción",
      role: "Desarrollador Full Stack",
      icon: <FiDatabase className="text-2xl text-primary-500" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="container-max-width section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 
              variants={cardVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Proyectos Destacados
            </motion.h2>
            <motion.p 
              variants={cardVariants}
              className="text-lg text-neutral-400 max-w-2xl mx-auto"
            >
              Soluciones web completas que optimizan procesos empresariales y mejoran la experiencia del usuario
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 hover:shadow-xl hover:shadow-primary-600/10 transition-all duration-300 hover:border-neutral-600"
              >
                <div className="flex items-center mb-4">
                  {project.icon}
                  <div className="ml-3">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      project.status === 'Producción' 
                        ? 'bg-green-900/30 border border-green-700/50 text-green-400' 
                        : 'bg-blue-900/30 border border-blue-700/50 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Características principales:</h4>
                  <ul className="text-sm text-neutral-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Stack tecnológico:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neutral-700 border border-neutral-600 text-neutral-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-neutral-700 pt-4">
                  <p className="text-sm text-neutral-400 mb-3">
                    <span className="font-medium text-neutral-300">Rol:</span> {project.role}
                  </p>
                  
                  <div className="flex space-x-3">
                    {project.id == 1 && (
                      <button className="flex items-center text-neutral-400 hover:text-neutral-300 font-medium text-sm transition-colors">
                        <FiGithub className="mr-1" size={16} />
                        Repositorio
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div variants={cardVariants} className="text-center mt-12">
            <p className="text-neutral-400 mb-6">
              ¿Interesado en conocer más detalles sobre algún proyecto?
            </p>
            <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary-600/25">
              Ver todos los proyectos
            </button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;