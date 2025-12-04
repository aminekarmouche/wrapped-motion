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
    primary: '#E43C2F',      // SPP red
    secondary: '#7B1313',    // Dark red
    background: '#2B2621',   // Lighter dark beige background
    accent: '#E43C2F',       // SPP red accent
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
    return (
      <WrappedExperience 
        holdings={holdings} 
        theme={spotifyTheme}
        onExit={() => setShowWrapped(false)}
      />
    );
  }

  return (
    <div className="App">
      <Hero onViewWrapped={() => setShowWrapped(true)} />
    </div>
  );
}

export default App;
