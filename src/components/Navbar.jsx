import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Proyectos', to: 'projects' },
    { name: 'Experiencia', to: 'experience' },
    { name: 'Habilidades', to: 'skills' },
    { name: 'Contacto', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-neutral-900/95 backdrop-blur-md shadow-xl border-b border-neutral-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white cursor-pointer hover:text-primary-500 transition-colors"
          >
            Desarrollador Full Stack
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={0}
                offset={-64}
                className="text-neutral-300 hover:text-primary-500 cursor-pointer transition-colors font-medium"
                activeClass="text-primary-500"
                spy={true}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-primary-500 transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-neutral-800 rounded-lg shadow-lg mt-2 p-4 border border-neutral-700"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="text-neutral-300 hover:text-primary-500 cursor-pointer transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;