import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Iseg Corp",
      position: "Desarrollador Full Stack",
      period: "2025 - Presente",
      location: "Chile",
      type: "Tiempo completo",
      description: "Desarrollo de sistemas internos que automatizan procesos empresariales y mejoran la eficiencia operativa.",
      achievements: [
        "Desarrollé un sistema de atención al cliente que redujo los tiempos de respuesta en un 40%",
        "Implementé el sistema RQ para gestión de requerimientos de personal, optimizando los procesos de RRHH",
        "Desarrolle un sistema de permisos y vacaciones que mejoró la gestión interna",
        "Mantuve y optimicé bases de datos MariaDB mejorando el rendimiento en un 30%"
      ],
      technologies: ["Django", "React", "MariaDB", "Python", "JavaScript", "Bootstrap", "Git", "Docker"],
      current: true
    },
  ];

  const education = {
    degree: "Ingeniería en Computación e Informática",
    institution: "Universidad Andrés Bello",
    period: "2022 - 2025",
    location: "Chile"
  };

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

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-neutral-900">
      <div className="container-max-width section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Experiencia Profesional
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-neutral-400 max-w-2xl mx-auto"
            >
              Mi trayectoria en el desarrollo de soluciones tecnológicas que generan impacto real
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-500/30"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex items-start mb-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-neutral-900 shadow-lg z-10"></div>

                  {/* Content card */}
                  <div className="ml-16 flex-1">
                    <div className="bg-neutral-800 border border-neutral-700 p-6 rounded-xl shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:border-neutral-600">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-lg font-medium text-primary-500 mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-green-900/30 border border-green-700/50 text-green-400 rounded-full text-sm font-medium">
                            Actual
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-neutral-400">
                        <div className="flex items-center">
                          <FiCalendar className="mr-1" size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <FiMapPin className="mr-1" size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <FiBriefcase className="mr-1" size={16} />
                          {exp.type}
                        </div>
                      </div>

                      <p className="text-neutral-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-white mb-2">Logros principales:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-neutral-300">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-white mb-2">Tecnologías:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-neutral-700 border border-neutral-600 text-neutral-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Formación Académica</h3>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-neutral-800 border border-neutral-700 p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="p-3 bg-primary-500/20 border border-primary-500/30 rounded-lg mr-4">
                    <FiUsers className="text-primary-500" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {education.degree}
                    </h4>
                    <p className="text-primary-500 font-medium mb-2">
                      {education.institution}
                    </p>
                    <div className="flex items-center text-sm text-neutral-400">
                      <FiCalendar className="mr-1" size={16} />
                      <span className="mr-4">{education.period}</span>
                      <FiMapPin className="mr-1" size={16} />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;