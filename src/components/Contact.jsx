import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'your.email@example.com',
      icon: '✉️',
      href: 'mailto:your.email@example.com'
    },
    {
      label: 'GitHub',
      value: '@complexiota',
      icon: '🔗',
      href: 'https://github.com/complexiota'
    },
    {
      label: 'LinkedIn',
      value: 'Deepanshu Sagar',
      icon: '💼',
      href: 'https://linkedin.com/in/deepanshu-sagar'
    },
    {
      label: 'Location',
      value: 'India',
      icon: '📍',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass-dark border border-cyan-500/20 focus:border-cyan-500 focus:outline-none transition-smooth text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass-dark border border-cyan-500/20 focus:border-cyan-500 focus:outline-none transition-smooth text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg glass-dark border border-cyan-500/20 focus:border-cyan-500 focus:outline-none transition-smooth text-white placeholder-gray-500 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="glass-dark rounded-xl p-6 hover-lift block"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <h3 className="text-gray-400 text-sm">{info.label}</h3>
                    <p className="text-cyan-400 font-semibold hover:text-cyan-300 transition-smooth">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
