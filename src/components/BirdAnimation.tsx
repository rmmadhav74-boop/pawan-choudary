import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Bird {
  id: number;
  top: number;
}

export default function BirdAnimation() {
  const [birds, setBirds] = useState<Bird[]>([]);

  useEffect(() => {
    const spawnBird = () => {
      const id = Date.now();
      setBirds(prev => [...prev, { id, top: 10 + Math.random() * 30 }]);
      setTimeout(() => {
        setBirds(prev => prev.filter(b => b.id !== id));
      }, 9000);
    };

    // First bird after 4s, then every 25-40s
    const first = setTimeout(spawnBird, 4000);
    const interval = setInterval(spawnBird, 30000 + Math.random() * 10000);
    return () => { clearTimeout(first); clearInterval(interval); };
  }, []);

  return (
    <>
      {birds.map(bird => (
        <div
          key={bird.id}
          className="flying-bird"
          style={{ top: `${bird.top}%` }}
        >
          <AnimatePresence>
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: '110vw', opacity: [0, 1, 1, 0] }}
              transition={{ duration: 8, ease: 'easeInOut' }}
              style={{ fontSize: 22 }}
            >
              ️
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </>
  );
}
