import { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  x: number;
  duration: number;
  delay: number;
  size: number;
}

export default function LeafAnimation() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const spawnLeaf = () => {
      const id = Date.now() + Math.random();
      const duration = 6 + Math.random() * 6;
      setLeaves(prev => [...prev.slice(-8), {
        id,
        x: Math.random() * 100,
        duration,
        delay: 0,
        size: 14 + Math.random() * 10,
      }]);
      setTimeout(() => {
        setLeaves(prev => prev.filter(l => l.id !== id));
      }, duration * 1000 + 500);
    };

    const interval = setInterval(spawnLeaf, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className="leaf-particle"
          style={{
            left: `${leaf.x}%`,
            bottom: -20,
            fontSize: leaf.size,
            animationDuration: `${leaf.duration}s`,
          }}
        >
          🍃
        </div>
      ))}
    </>
  );
}
