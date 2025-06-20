import React from 'react';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingBorder: React.FC<GlowingBorderProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

export default GlowingBorder;