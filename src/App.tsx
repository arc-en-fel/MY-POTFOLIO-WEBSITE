import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DotGridBackground from './components/DotGridBackground';
import ClickSpark from './components/ClickSpark';
import Navigation from './components/Navigation';
import ProfileSection from './components/ProfileSection';
import ProjectCard from './components/ProjectCard';
import ContactSection from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: 'QR Code Generator',
      description: 'A modern QR code generator with customizable designs and download options. Built with React and TypeScript.',
      githubLink: 'https://github.com/arc-en-fel/qrcode-generator-website',
    },
    {
      title: 'Japanese Flashcard Website',
      description: 'Interactive learning platform for Japanese language with spaced repetition and progress tracking.',
      githubLink: 'https://github.com/arc-en-fel/Japanese-flashcard-website-',
    },
    {
      title: 'Cat Resume Website',
      description: 'A creative resume website featuring cat themes and smooth animations with professional content.',
      githubLink: 'https://github.com/arc-en-fel/cat-resume',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'This website! Built with React, TypeScript, and Framer Motion featuring modern animations.',
      githubLink: 'https://github.com/arc-en-fel/MY-POTFOLIO-WEBSITE',
    },
      {
      title: 'ZELION',
      description: 'A modern cricket store website',
      githubLink: 'https://github.com/arc-en-fel/zelion',
    },
   {
      title: 'CREDHEX',
      description: 'A cerificate vault',
      githubLink: 'https://github.com/arc-en-fel/credhex',
    },
 
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <ProfileSection />;
      
      case 'about':
        return (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 max-w-3xl mx-auto py-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">About Me</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base px-4">
              <p>
                I'm a passionate full-stack developer with expertise in modern JavaScript frameworks, 
                specializing in React, TypeScript, and Node.js.
              </p>
              <p>
                My journey in web development started with curiosity about how websites work, 
                and has evolved into a deep passion for crafting digital experiences that make a difference.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or learning Japanese.
              </p>
            </div>
          </motion.section>
        );
      
      case 'projects':
        return (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 py-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Featured Projects</h2>
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index}
                />
              ))}
            </div>
          </motion.section>
        );
      
      case 'contact':
        return <ContactSection />;
      
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Dot Grid Background */}
      <DotGridBackground />
      
      {/* Click Spark Effects */}
      <ClickSpark />
      
      {/* Header */}
      <header className="relative z-50 p-4 md:p-6">
  <div className="flex justify-between items-center max-w-6xl mx-auto">
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-xl md:text-2xl font-bold text-white"
    >
      PORTFOLIO
    </motion.div>

    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-50" // 
    >
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </motion.div>
  </div>
</header>

      {/* Main Content */}
      <main className="relative z-10 px-4 md:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[400px]"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-4 md:p-6 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-500 text-xs md:text-sm"
          >
            © 2025 Deepak Bhaskaran. Built with React & TypeScript
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;