// BaseApp/src/App.tsx
// IMPORTANT: Before running, install Framer Motion in the Motion folder:
// cd ../Motion && npm install framer-motion && cd ../Baseapp

import React, { useState } from 'react';
import Hero from './components/Hero';
import './App.css';

// Import the WrappedExperience component from Motion folder
import { WrappedExperience, WrappedTheme, Holding } from '../../Motion/src';

// Import mock portfolio data
import portfolioData from './data/portfolio.json';

function App() {
  const [showWrapped, setShowWrapped] = useState(false);

  // Define Spotify-like theme - CUSTOMIZE THESE COLORS AS NEEDED
  const spotifyTheme: WrappedTheme = {
    primary: '#1DB954',      // Spotify green
    secondary: '#191414',    // Dark gray
    background: '#121212',   // Nearly black
    accent: '#FF5F6D',       // Coral/pink accent
  };

  // Alternative theme options (uncomment to use):
  
  // Purple theme:
  // const purpleTheme: WrappedTheme = {
  //   primary: '#9D4EDD',
  //   secondary: '#240046',
  //   background: '#10002B',
  //   accent: '#E0AAFF',
  // };

  // Blue theme:
  // const blueTheme: WrappedTheme = {
  //   primary: '#4CC9F0',
  //   secondary: '#023047',
  //   background: '#001219',
  //   accent: '#F72585',
  // };

  // Type assertion for JSON data
  const holdings = portfolioData as Holding[];

  if (showWrapped) {
    return <WrappedExperience holdings={holdings} theme={spotifyTheme} />;
  }

  return (
    <div className="App">
      <Hero />
      {/* Button to show Wrapped Experience - you can customize or remove this */}
      <button
        onClick={() => setShowWrapped(true)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          fontWeight: '600',
          background: '#1DB954',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(29, 185, 84, 0.4)',
          transition: 'all 0.3s ease',
          zIndex: 1000,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(29, 185, 84, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(29, 185, 84, 0.4)';
        }}
      >
        🎉 View My 2024 Wrapped
      </button>
    </div>
  );
}

export default App;
