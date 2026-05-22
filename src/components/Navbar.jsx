import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled ? 'glass-dark shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-bold text-2xl gradient-text cursor-pointer"
        >
          DS
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-cyan-400 transition-smooth cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf"
          download
          className="hidden md:block btn-secondary"
        >
          Resume
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden glass-dark border-t border-cyan-500/20"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="block text-gray-300 hover:text-cyan-400 transition-smooth cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="/resume.pdf" download className="block btn-secondary text-center">
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
