'use client'

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2, // Tamaño entre 2px y 6px
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }))
    setSnowflakes(flakes)
  }, [])

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
              `${flake.x + Math.sin(flake.id) * 2}vw`,
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
            height: flake.size,
            boxShadow: `0 0 ${flake.size}px ${flake.size / 2}px rgba(0, 0, 0, 0.1), 0 0 ${flake.size * 2}px ${flake.size}px rgba(255, 255, 255, 0.1)`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
    </div>
  )
}
