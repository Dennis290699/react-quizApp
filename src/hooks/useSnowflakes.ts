import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

export const useSnowflakes = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();

  const createSnowflakes = useCallback(() => {
    const flakeCount = isLowPerfDevice ? 20 : 40;
    return Array.from({ length: flakeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 7 + 10
    }));
  }, [isLowPerfDevice]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const checkPerformance = () => {
      const isLowPerf = 
        window.navigator.hardwareConcurrency <= 4 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsLowPerfDevice(isLowPerf);
    };

    checkPerformance();
    setSnowflakes(createSnowflakes());

    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, [createSnowflakes, isMounted, location.pathname]);

  return { snowflakes, isLowPerfDevice, isMounted };
};