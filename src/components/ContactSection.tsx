import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'deepakbhaskaran4@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=deepakbhaskaran4@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'arc-en-fel',
      href: 'https://github.com/arc-en-fel',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'deepak-bhaskaran',
      href: 'https://www.linkedin.com/in/deepak-bhaskaran-270a8a358/',
    },
  ];

  return (
    <section className="space-y-8 py-8">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-center text-white mb-8"
      >
        Let's Connect
      </motion.h2>
      
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        {contactItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:bg-white/10 block text-center"
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 mb-4 mx-auto">
              <item.icon size={20} className="text-gray-300" />
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.label}
            </h3>
            
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
              <span>{item.value}</span>
              <ExternalLink size={12} className="opacity-50" />
            </p>
          </motion.a>
        ))}
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base px-4">
          Open to discussing new opportunities, collaborations, or just having a chat about technology.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;