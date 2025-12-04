// Motion/src/components/Slide1.tsx
// Slide 1: Your Top Holdings - Using motion.dev
import React, { useEffect, useState, useRef } from 'react';
import { animate } from 'motion';
import { Holding } from '../types';

interface Slide1Props {
  holdings: Holding[];
}

const AnimatedNumber: React.FC<{ value: number; duration?: number }> = ({ 
  value, 
  duration = 2 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(
      0,
      value,
      {
        duration,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      }
    );
    return () => controls.stop();
  }, [value, duration]);

  return <span>{count}%</span>;
};

const Slide1: React.FC<Slide1Props> = ({ holdings }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const topHoldings = holdings
    .sort((a, b) => b.percentOfPortfolio - a.percentOfPortfolio)
    .slice(0, 3);

  useEffect(() => {
    if (titleRef.current) {
      animate(titleRef.current, { opacity: 1, y: 0 }, { duration: 0.8 });
    }

    if (listRef.current) {
      const cards = listRef.current.querySelectorAll('.holding-card');
      cards.forEach((card, i) => {
        animate(
          card as HTMLElement, 
          { opacity: 1, x: 0 }, 
          { duration: 0.6, delay: i * 0.2 }
        );
      });
    }
  }, []);

  return (
    <div className="slide">
      <h1 
        ref={titleRef} 
        className="slide-title" 
        style={{ opacity: 0, transform: 'translateY(-50px)' }}
      >
        Your Top Holdings
      </h1>

      <div ref={listRef} className="holdings-list">
        {topHoldings.map((holding) => (
          <div
            key={holding.ticker}
            className="holding-card"
            style={{ opacity: 0, transform: 'translateX(-100px)' }}
          >
            <div className="holding-info">
              <h3>{holding.name}</h3>
              <div className="ticker">{holding.ticker}</div>
            </div>
            <div className="holding-percentage">
              <AnimatedNumber value={holding.percentOfPortfolio} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide1;
