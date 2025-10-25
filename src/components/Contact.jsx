import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Configuración de EmailJS desde variables de entorno
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validar que las variables de entorno estén configuradas
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Las credenciales de EmailJS no están configuradas. Revisa tu archivo .env');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Sin asunto',
        message: formData.message,
        to_name: 'Alejandro Muñoz',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setSubmitStatus('error');
      
      // Ocultar mensaje de error después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-xl" />,
      label: "Email",
      value: "alejandrofranciscomunoz@gmail.com",
      href: "mailto:alejandrofranciscomunoz@gmail.com"
    },
    {
      icon: <FiPhone className="text-xl" />,
      label: "Teléfono",
      value: "+56 9 5475 0112",
      href: "tel:+56 9 5475 0112"
    },
    {
      icon: <FiMapPin className="text-xl" />,
      label: "Ubicación",
      value: "Chile",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="text-xl" />,
      label: "GitHub",
      href: "https://github.com/AMunozSuarez",
      color: "hover:text-gray-700"
    },
    // {
    //   icon: <FiLinkedin className="text-xl" />,
    //   label: "LinkedIn",
    //   href: "https://linkedin.com/in/tu-usuario",
    //   color: "hover:text-blue-600"
    // }
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

  const itemVariants = {
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
    <section id="contact" className="py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-dark-900">
      <div className="container-max-width section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center mb-12 md:mb-16 px-4">
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4"
            >
              Conectemos
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto"
            >
              ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tus ideas y cómo puedo ayudarte a hacerlas realidad.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm h-full">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start sm:items-center">
                      <div className="p-2 sm:p-3 bg-primary-500/20 border border-primary-500/30 text-primary-500 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-neutral-400 font-medium">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-sm sm:text-base text-white hover:text-primary-500 transition-colors font-medium break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-neutral-700 pt-6 sm:pt-8">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                    Sígueme en redes
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-neutral-700 border border-neutral-600 text-neutral-400 rounded-lg transition-all duration-300 hover:border-primary-500/50 hover:text-primary-500 hover:shadow-md transform hover:-translate-y-1`}
                        title={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary-500/10 border border-primary-500/20 rounded-lg">
                  <h4 className="text-sm sm:text-base font-semibold text-primary-400 mb-2">
                    ¿Prefieres una llamada?
                  </h4>
                  <p className="text-neutral-400 text-xs sm:text-sm">
                    Estoy disponible para conversaciones sobre proyectos, 
                    oportunidades laborales o simplemente para charlar sobre tecnología.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  Envíame un mensaje
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-white placeholder-neutral-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-white placeholder-neutral-500"
                        placeholder="Tu-email@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-white placeholder-neutral-500"
                      placeholder="¿De qué te gustaría hablar?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-neutral-900 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none text-white placeholder-neutral-500 text-sm sm:text-base"
                      placeholder="Cuéntame sobre tu proyecto o pregunta..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary-600/25 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <FiSend className="mr-2" size={18} />
                        Enviar mensaje
                      </div>
                    )}
                  </button>

                  {/* Mensajes de estado */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start sm:items-center text-green-400"
                    >
                      <FiCheckCircle className="mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" size={18} />
                      <p className="text-xs sm:text-sm font-medium">
                        ¡Mensaje enviado correctamente! Te responderé pronto.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 sm:p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start text-red-400"
                    >
                      <FiAlertCircle className="mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-xs sm:text-sm font-medium">
                        Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.
                      </p>
                    </motion.div>
                  )}
                </form>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-neutral-900 border border-neutral-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-neutral-400">
                    <strong className="text-neutral-300">Tiempo de respuesta:</strong> Generalmente respondo en 24-48 horas. 
                    Para consultas urgentes, puedes contactarme directamente por teléfono.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;