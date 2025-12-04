import React from 'react';
import './Hero.css';
import investmentData from '../data/investmentData.json';
import { translations, getLanguageFromURL } from '../i18n';

interface HeroProps {
  onViewWrapped: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewWrapped }) => {
  const currentLanguage = getLanguageFromURL();
  const t = translations[currentLanguage].hero;
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">{t.title}</h1>
        <p className="hero-subtitle">
          {t.subtitle}
        </p>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{investmentData.totalInvested.toLocaleString()} kr</div>
            <div className="stat-label">{t.totalInvested}</div>
          </div>
          
          <div className="stat-card highlight">
            <div className="stat-value">+{investmentData.returnPercentage}%</div>
            <div className="stat-label">{t.annualReturns}</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-value">{investmentData.totalReturns.toLocaleString()} kr</div>
            <div className="stat-label">{t.profitEarned}</div>
          </div>
        </div>

        <div className="hero-highlight">
          <h2>{t.topPerformer}</h2>
          <p className="top-asset">{investmentData.topPerformingAsset.name}</p>
          <p className="top-return">+{investmentData.topPerformingAsset.return}% {t.returns}</p>
        </div>

        <button className="cta-button" onClick={onViewWrapped}>{t.viewFullWrapped}</button>
      </div>
    </div>
  );
};

export default Hero;
