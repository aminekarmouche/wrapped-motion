import React from 'react';
import './Hero.css';
import investmentData from '../data/investmentData.json';

interface HeroProps {
  onViewWrapped: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewWrapped }) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Your Investment Wrapped 2025</h1>
        <p className="hero-subtitle">
          A year of smart investing and growing wealth
        </p>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">${investmentData.totalInvested.toLocaleString()}</div>
            <div className="stat-label">Total Invested</div>
          </div>
          
          <div className="stat-card highlight">
            <div className="stat-value">+{investmentData.returnPercentage}%</div>
            <div className="stat-label">Annual Returns</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-value">${investmentData.totalReturns.toLocaleString()}</div>
            <div className="stat-label">Profit Earned</div>
          </div>
        </div>

        <div className="hero-highlight">
          <h2>🏆 Top Performer</h2>
          <p className="top-asset">{investmentData.topPerformingAsset.name}</p>
          <p className="top-return">+{investmentData.topPerformingAsset.return}% Returns</p>
        </div>

        <button className="cta-button" onClick={onViewWrapped}>View Full Wrapped</button>
      </div>
    </div>
  );
};

export default Hero;
