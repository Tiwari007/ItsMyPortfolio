'use client';

import { useEffect, useState } from 'react';

interface Animal {
  id: number;
  emoji: string;
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  speed: number;
  size: string;
}

const cuteAnimals = ['🐱', '🐶', '🐰', '🐻', '🐼', '🦊', '🐨', '🐸', '🐹', '🐧', '🐽'];

export default function AnimatedBackground() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const createAnimals = () => {
      const newAnimals: Animal[] = [];
      for (let i = 0; i < 8; i++) {
        const sizes = ['small', 'medium', 'large'];
        newAnimals.push({
          id: i,
          emoji: cuteAnimals[Math.floor(Math.random() * cuteAnimals.length)],
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          directionX: Math.random() > 0.5 ? 1 : -1,
          directionY: Math.random() > 0.5 ? 1 : -1,
          speed: 0.5 + Math.random() * 1,
          size: sizes[Math.floor(Math.random() * sizes.length)],
        });
      }
      setAnimals(newAnimals);
    };

    createAnimals();

    const animateAnimals = () => {
      setAnimals(prevAnimals =>
        prevAnimals.map(animal => {
          let newX = animal.x + animal.directionX * animal.speed;
          let newY = animal.y + animal.directionY * animal.speed;
          let newDirectionX = animal.directionX;
          let newDirectionY = animal.directionY;

          // Bounce off edges
          if (newX <= 0 || newX >= (typeof window !== 'undefined' ? window.innerWidth - 40 : 1200)) {
            newDirectionX = -animal.directionX;
            newX = Math.max(0, Math.min(newX, (typeof window !== 'undefined' ? window.innerWidth - 40 : 1200)));
          }
          if (newY <= 0 || newY >= (typeof window !== 'undefined' ? window.innerHeight - 40 : 800)) {
            newDirectionY = -animal.directionY;
            newY = Math.max(0, Math.min(newY, (typeof window !== 'undefined' ? window.innerHeight - 40 : 800)));
          }

          return {
            ...animal,
            x: newX,
            y: newY,
            directionX: newDirectionX,
            directionY: newDirectionY,
          };
        })
      );
    };

    const interval = setInterval(animateAnimals, 50);
    
    const handleResize = () => {
      createAnimals();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      clearInterval(interval);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="animated-background">
      <div className="animated-background__gradient"></div>
      {animals.map((animal) => (
        <div
          key={animal.id}
          className={`animated-background__animal animated-background__animal--${animal.size}`}
          style={{
            left: `${animal.x}px`,
            top: `${animal.y}px`,
          }}
        >
          {animal.emoji}
        </div>
      ))}
    </div>
  );
}
