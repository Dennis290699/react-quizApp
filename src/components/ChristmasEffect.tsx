import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Snowflake {
  id: number
  x: number
  size: number
  delay: number
  duration: number
}

export function ChristmasEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false)

  const createSnowflakes = useCallback(() => {
    const flakeCount = isLowPerfDevice ? 20 : 40
    return Array.from({ length: flakeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 2, // Tamaño entre 2px y 5px
      delay: Math.random() * 5,
      duration: Math.random() * 7 + 10
    }))
  }, [isLowPerfDevice])

  useEffect(() => {
    // Detectar dispositivos de bajo rendimiento
    const checkPerformance = () => {
      const isLowPerf = window.navigator.hardwareConcurrency <= 4 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsLowPerfDevice(isLowPerf)
    }

    checkPerformance()
    setSnowflakes(createSnowflakes())

    window.addEventListener('resize', checkPerformance)
    return () => window.removeEventListener('resize', checkPerformance)
  }, [createSnowflakes])

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
  )
}
