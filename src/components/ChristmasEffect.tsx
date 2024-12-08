import { motion } from 'framer-motion';
import { useSnowflakes } from '../hooks/useSnowflakes';

export function ChristmasEffect() {
  const { snowflakes, isLowPerfDevice, isMounted } = useSnowflakes();

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-gray-300 dark:bg-white"
          initial={{ y: -20, x: `${flake.x}vw` }}
          animate={{
            y: '100vh',
            x: [
              `${flake.x}vw`,
              `${flake.x + (isLowPerfDevice ? 0 : Math.sin(flake.id))}vw`,
              `${flake.x}vw`
            ]
          }}
          transition={{
            duration: flake.duration,
            repeat: Infinity,
            delay: flake.delay,
            ease: 'linear',
            x: {
              duration: isLowPerfDevice ? 0 : flake.duration / 2,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'reverse'
            }
          }}
          style={{
            width: flake.size,
            height: flake.size,
            opacity: isLowPerfDevice ? 0.7 : 1,
            boxShadow: isLowPerfDevice 
              ? 'none'
              : `0 0 ${flake.size}px ${flake.size / 2}px rgba(255, 255, 255, 0.1)`
          }}
        />
      ))}
    </div>
  );
}