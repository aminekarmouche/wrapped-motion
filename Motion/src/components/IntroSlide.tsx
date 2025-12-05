// Motion/src/components/IntroSlide.tsx
// Intro Slide: Create suspense before showing the wrapped experience
import React, { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { translations, getLanguageFromURL } from '../i18n';

interface IntroSlideProps {
  onComplete: () => void;
}

const IntroSlide: React.FC<IntroSlideProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3aRef = useRef<HTMLDivElement>(null);
  const text3bRef = useRef<HTMLDivElement>(null);
  const text3cRef = useRef<HTMLDivElement>(null);
  const currentLanguage = getLanguageFromURL();
  const t = translations[currentLanguage].slides.intro;

  useEffect(() => {
    const sequence = async () => {
      // First text appears
      if (text1Ref.current) {
        await animate(
          text1Ref.current,
          { opacity: [0, 1], scale: [0.8, 1] },
          { duration: 0.3, delay: 0.1 }
        ).finished;
        
        await new Promise(resolve => setTimeout(resolve, 150));
        
        await animate(
          text1Ref.current,
          { opacity: 0, y: -30 },
          { duration: 0.2 }
        ).finished;
      }

      // Second text appears
      if (text2Ref.current) {
        await animate(
          text2Ref.current,
          { opacity: [0, 1], scale: [0.8, 1] },
          { duration: 0.3 }
        ).finished;
        
        await new Promise(resolve => setTimeout(resolve, 150));
        
        await animate(
          text2Ref.current,
          { opacity: 0, y: -30 },
          { duration: 0.2 }
        ).finished;
      }

      // Third text - part a
      if (text3aRef.current) {
        await animate(
          text3aRef.current,
          { opacity: [0, 1], scale: [0.5, 1.2, 1] },
          { duration: 0.25 }
        ).finished;
        
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Third text - part b
      if (text3bRef.current) {
        await animate(
          text3bRef.current,
          { opacity: [0, 1], scale: [0.5, 1.2, 1] },
          { duration: 0.25 }
        ).finished;
        
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Third text - part c
      if (text3cRef.current) {
        await animate(
          text3cRef.current,
          { opacity: [0, 1], scale: [0.5, 1.2, 1] },
          { duration: 0.25 }
        ).finished;
        
        await new Promise(resolve => setTimeout(resolve, 150));
        
        // Fade out entire container
        if (containerRef.current) {
          await animate(
            containerRef.current,
            { opacity: 0 },
            { duration: 0.25 }
          ).finished;
        }
      }

      // Trigger next slide
      onComplete();
    };

    sequence();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="slide intro-slide">
      <div className="intro-content">
        <div 
          ref={text1Ref}
          className="intro-text intro-text-1"
          style={{ opacity: 0 }}
        >
          {t.text1}
        </div>
        
        <div 
          ref={text2Ref}
          className="intro-text intro-text-2"
          style={{ opacity: 0 }}
        >
          {t.text2}
        </div>
        
        <div className="intro-text-3-container">
          <div 
            ref={text3aRef}
            className="intro-text intro-text-3"
            style={{ opacity: 0 }}
          >
            {t.text3a}
          </div>
          
          <div 
            ref={text3bRef}
            className="intro-text intro-text-3"
            style={{ opacity: 0 }}
          >
            {t.text3b}
          </div>
          
          <div 
            ref={text3cRef}
            className="intro-text intro-text-3"
            style={{ opacity: 0 }}
          >
            {t.text3c}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
