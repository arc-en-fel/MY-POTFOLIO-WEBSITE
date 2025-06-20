import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Spark {
  id: number;
  x: number;
  y: number;
}

const ClickSpark: React.FC = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSpark: Spark = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setSparks(prev => [...prev, newSpark]);
      
      setTimeout(() => {
        setSparks(prev => prev.filter(spark => spark.id !== newSpark.id));
      }, 800);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <AnimatePresence>
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: spark.x - 10,
            top: spark.y - 10,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-400 rounded-full"
              initial={{ x: 0, y: 0 }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 6) * 15,
                y: Math.sin((i * Math.PI * 2) / 6) * 15,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default ClickSpark;