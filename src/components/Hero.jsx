import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const titles = ['AI Engineer', 'Data Scientist', 'ML Researcher', 'Quant Enthusiast'];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      <ParticleBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4"
        >
          <span className="gradient-text">Deepanshu Sagar</span>
        </motion.h1>

        {/* Rotating Title */}
        <motion.div
          variants={itemVariants}
          className="mb-6 h-16 flex items-center justify-center"
        >
          <motion.h2
            key={currentTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-cyan-400"
          >
            {titles[currentTitle]}
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Master's student passionate about Artificial Intelligence, Deep Learning, Quantitative Research, 
          Time-Series Modeling and Intelligent Systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <a href="/resume.pdf" download className="btn-primary">
            Download Resume
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/complexiota"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 rounded-full glass-dark flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.div>
          </a>
          <a
            href="https://linkedin.com/in/deepanshu-sagar"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 rounded-full glass-dark flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </motion.div>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 rounded-full glass-dark flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div className="w-1 h-2 bg-cyan-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
