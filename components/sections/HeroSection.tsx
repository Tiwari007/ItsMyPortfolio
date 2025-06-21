'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const roles = ['Full Stack Developer', 'Frontend Engineer', 'Backend Developer', 'Software Engineer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  if (!mounted) return null;

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="animate-fade-in">
          <h1 className="hero__title">
            Hi, I&apos;m{' '}
            <span className="highlight">
              Vivek Tiwari
            </span>
          </h1>

          <div className="hero__subtitle">
            <span className="typing-text">
              {roles[currentRole]}
            </span>
          </div>

          <p className="hero__description">
            Passionate about creating beautiful, functional, and user-friendly digital experiences.
            I love turning ideas into reality through code and design.
          </p>

          <div className="hero__actions">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero__button hero__button--primary"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero__button hero__button--secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
