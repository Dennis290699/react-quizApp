import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Snowflake {
  id: number;
  x: number;
  delay: number;
  size: number;
  duration: number;
}

export const ChristmasEffect = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 10 + 5,
      duration: Math.random() * 10 + 10
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute text-white dark:text-gray-200 opacity-70"
          initial={{ y: -20, x: `${flake.x}vw` }}
          animate={{
            y: '100vh',
            x: [
              `${flake.x}vw`,
              `${flake.x + Math.sin(flake.id) * 10}vw`,
              `${flake.x}vw`
            ]
          }}
          transition={{
            duration: flake.duration,
            repeat: Infinity,
            delay: flake.delay,
            ease: 'linear',
            x: {
              duration: flake.duration / 2,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'reverse'
            }
          }}
          style={{
            width: flake.size,
            height: flake.size
          }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
};
