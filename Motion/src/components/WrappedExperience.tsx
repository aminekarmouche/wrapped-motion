// Motion/src/components/WrappedExperience.tsx
// Main container component - Using motion.dev
import React, { useEffect, useState, useRef } from 'react';
import { animate } from 'motion';
import { WrappedProps } from '../types';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import '../styles/theme.less';

const WrappedExperience: React.FC<WrappedProps> = ({ holdings, theme }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = 3;

  // Apply theme colors
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--wrapped-primary', theme.primary);
    root.style.setProperty('--wrapped-secondary', theme.secondary);
    root.style.setProperty('--wrapped-background', theme.background);
    root.style.setProperty('--wrapped-accent', theme.accent);
  }, [theme]);

  // Animate slide transitions
  useEffect(() => {
    if (containerRef.current) {
      const slideElement = containerRef.current.querySelector('.slide-wrapper');
      if (slideElement) {
        animate(
          slideElement as HTMLElement,
          { opacity: 1, x: 0 },
          { duration: 0.5 }
        );
      }
    }
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const slides = [
    <Slide1 holdings={holdings} key="slide1" />,
    <Slide2 holdings={holdings} key="slide2" />,
    <Slide3 holdings={holdings} key="slide3" />,
  ];

  return (
    <div ref={containerRef} className="wrapped-container">
      {/* Slide Indicators */}
      <div className="slide-indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Current Slide */}
      <div className="slide-wrapper" style={{ opacity: 0, transform: 'translateX(20px)' }}>
        {slides[currentSlide]}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <button
          className="nav-button"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          ← Previous
        </button>
        <button
          className="nav-button"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default WrappedExperience;
