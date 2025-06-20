import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  liveLink,
  index,
}) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:bg-white/10"
    >
      <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      
      <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-200 text-gray-300 hover:text-white text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={14} />
            <span>Code</span>
          </motion.a>
        )}
        
        {liveLink && (
          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors duration-200 text-gray-300 hover:text-white text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={14} />
            <span>Live</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;