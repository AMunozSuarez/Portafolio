import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload } from 'react-icons/fi';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-dark-900 pt-16">
      <div className="container-max-width section-padding w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Alejandro Muñoz
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span
                className="bg-gradient-to-r from-cyan-400 via-sky-400 to-primary-500 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Desarrollador Full Stack
              </span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              Soy desarrollador full stack con experiencia en la creación de sistemas web que optimizan 
              procesos empresariales y mejoran la eficiencia operativa. He desarrollado soluciones con 
              <span className="font-semibold text-primary-400"> Django, React, Node.js y Docker</span>, 
              abarcando todo el ciclo de desarrollo: desde la planificación y diseño hasta la implementación, 
              despliegue y mantenimiento.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-full text-neutral-300 font-medium shadow-sm">
                Ingeniero en Computación e Informática
              </span>
              <span className="px-4 py-2 bg-primary-600/20 border border-primary-500/30 text-primary-400 rounded-full font-medium">
                Disponible para nuevos proyectos
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:alejandrofranciscomunoz@gmail.com"
                className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary-600/25"
              >
                <FiMail className="mr-2" size={20} />
                Contactar
              </a>
              <a
                href="/cv.pdf"
                download="Alejandro_Munoz_CV.pdf"
                className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-green-600/25"
              >
                <FiDownload className="mr-2" size={20} />
                Descargar CV
              </a>
              <a
                href="https://github.com/AMunozSuarez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 border border-neutral-600 text-neutral-300 rounded-lg hover:bg-neutral-800 hover:border-neutral-500 transition-all duration-300 font-medium"
              >
                <FiGithub className="mr-2" size={20} />
                GitHub
              </a>
              {/* <a
                href="https://linkedin.com/in/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 border border-neutral-600 text-neutral-300 rounded-lg hover:bg-neutral-800 hover:border-neutral-500 transition-all duration-300 font-medium"
              >
                <FiLinkedin className="mr-2" size={20} />
                LinkedIn
              </a> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;