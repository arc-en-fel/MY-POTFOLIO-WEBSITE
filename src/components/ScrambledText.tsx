import React, { useState, useEffect } from 'react';

interface ScrambledTextProps {
  children: string;
  className?: string;
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  trigger?: boolean;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  children,
  className = "",
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:!<>-_\\/[]{}—=+*^?#________",
  trigger = false,
}) => {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!trigger && !isAnimating) return;

    setIsAnimating(true);
    const originalText = children;
    const totalDuration = duration * 1000;
    const frameRate = 60;
    const totalFrames = (totalDuration / 1000) * frameRate;
    let currentFrame = 0;

    const scramble = () => {
      if (currentFrame >= totalFrames) {
        setDisplayText(originalText);
        setIsAnimating(false);
        return;
      }

      const progress = currentFrame / totalFrames;
      const revealedChars = Math.floor(progress * originalText.length);
      
      let newText = '';
      for (let i = 0; i < originalText.length; i++) {
        if (i < revealedChars) {
          newText += originalText[i];
        } else {
          const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          newText += randomChar;
        }
      }
      
      setDisplayText(newText);
      currentFrame++;
      
      setTimeout(scramble, 1000 / frameRate / speed);
    };

    scramble();
  }, [children, duration, speed, scrambleChars, trigger]);

  return <span className={className}>{displayText}</span>;
};

export default ScrambledText;