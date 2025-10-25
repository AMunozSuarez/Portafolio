import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiTool,
  FiGitBranch,
  FiLayers,
  FiMonitor,
  FiCloud
} from 'react-icons/fi';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiBootstrap,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiLinux
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiMonitor className="text-2xl" />,
      color: "bg-blue-900/30 border-blue-500/30 text-blue-400",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> }
      ]
    },
    {
      title: "Backend",
      icon: <FiServer className="text-2xl" />,
      color: "bg-green-900/30 border-green-500/30 text-green-400",
      skills: [
        { name: "Django", icon: <SiDjango /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
      ]
    },
    {
      title: "Bases de Datos",
      icon: <FiDatabase className="text-2xl" />,
      color: "bg-purple-900/30 border-purple-500/30 text-purple-400",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MariaDB", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    {
      title: "Herramientas & DevOps",
      icon: <FiTool className="text-2xl" />,
      color: "bg-orange-900/30 border-orange-500/30 text-orange-400",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Docker", icon: <SiDocker /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-neutral-950">
      <div className="container-max-width section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 
              variants={categoryVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Habilidades Técnicas
            </motion.h2>
            <motion.p 
              variants={categoryVariants}
              className="text-lg text-neutral-400 max-w-2xl mx-auto"
            >
              Tecnologías y herramientas que domino para crear soluciones web completas y eficientes
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg border ${category.color} mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="group flex flex-col items-center p-4 bg-neutral-800 border border-neutral-700 rounded-lg hover:border-primary-500/50 hover:bg-neutral-700/50 transition-all duration-300 cursor-pointer"
                      whileHover={{ y: -5 }}
                    >
                      <span className="text-2xl text-neutral-400 group-hover:text-primary-500 transition-colors duration-300 mb-2">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={categoryVariants} className="mt-12">
            <h3 className="text-xl font-semibold text-white text-center mb-8">
              Otras Competencias
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors">
                <FiLayers className="text-3xl text-primary-500 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Arquitectura de Software</h4>
                <p className="text-neutral-400 text-sm">
                  Diseño de sistemas escalables y mantenibles
                </p>
              </div>
              
              <div className="text-center p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors">
                <FiGitBranch className="text-3xl text-primary-500 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Metodologías Ágiles</h4>
                <p className="text-neutral-400 text-sm">
                  Scrum, Kanban y desarrollo iterativo
                </p>
              </div>
              
              <div className="text-center p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors">
                <FiCloud className="text-3xl text-primary-500 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Despliegue y DevOps</h4>
                <p className="text-neutral-400 text-sm">
                  CI/CD, containerización y automatización
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;