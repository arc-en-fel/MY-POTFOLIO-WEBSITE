import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrambledText from './ScrambledText';

const ProfileSection: React.FC = () => {
  const [scrambleText, setScrambleText] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setScrambleText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="text-center space-y-8 py-8">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mx-auto w-32 h-32 md:w-40 md:h-40"
      >
        <img src="/image/dp2.jpeg"  alt="Profile"
  className="w-full h-full rounded-full object-cover"/>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl md:text-5xl font-bold text-white"
      >
        Deepak Bhaskaran
      </motion.h1>

      {/* Scrambled intro text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed px-4"
      >
        <ScrambledText
          className="block mb-2"
          trigger={scrambleText}
          duration={1.5}
          speed={0.8}
          scrambleChars=".:!<>-_\\/[]{}—=+*^?#"
        >
          Full Stack Developer & Creative Technologist
        </ScrambledText>
        <ScrambledText
          trigger={scrambleText}
          duration={2}
          speed={0.6}
          scrambleChars=".:!<>-_\\/[]{}—=+*^?#"
        >
          Crafting digital experiences with modern web technologies and clean, maintainable code.
        </ScrambledText>
      </motion.div>
    </section>
  );
};

export default ProfileSection;