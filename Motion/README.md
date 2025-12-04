# Motion - Spotify Wrapped-Style Experience Module

A reusable React + TypeScript + Framer Motion module for creating beautiful, animated "Wrapped" experiences.

## 🚀 Installation

**IMPORTANT:** This module requires Framer Motion to be installed:

```bash
cd Motion
npm install
```

## 📦 What's Included

- **WrappedExperience Component**: Main container with 3 animated slides
- **TypeScript Types**: Strongly typed data models for holdings and theming
- **Less Theming**: Customizable colors via CSS variables
- **Framer Motion Animations**: Smooth transitions, count-up numbers, drag-to-swipe

## 🎨 Features

### Three Slides

1. **Top Holdings** - Shows your top 3 investments with animated percentages
2. **Portfolio Numbers** - Total invested, number of holdings, average position
3. **Year at a Glance** - Summary text with diversification score

### Interactions

- Click Previous/Next buttons to navigate
- Use keyboard arrows (← →) to navigate
- Drag/swipe horizontally to change slides
- Smooth spring-based transitions
- Animated number count-ups

## 📝 Usage in BaseApp

```typescript
import { WrappedExperience, WrappedTheme, Holding } from '../Motion/src';
import portfolioData from './data/portfolio.json';

// Define your theme
const spotifyTheme: WrappedTheme = {
  primary: '#1DB954',
  secondary: '#191414',
  background: '#121212',
  accent: '#FF5F6D',
};

// Use the component
const holdings = portfolioData as Holding[];
<WrappedExperience holdings={holdings} theme={spotifyTheme} />
```

## 🎨 Customizing Themes

Themes are defined using the `WrappedTheme` interface:

```typescript
interface WrappedTheme {
  primary: string;      // Main accent color (e.g., Spotify green)
  secondary: string;    // Secondary color
  background: string;   // Background color
  accent: string;       // Highlight/accent color
}
```

### Preset Themes

**Spotify (default):**
```typescript
{
  primary: '#1DB954',
  secondary: '#191414',
  background: '#121212',
  accent: '#FF5F6D'
}
```

**Purple:**
```typescript
{
  primary: '#9D4EDD',
  secondary: '#240046',
  background: '#10002B',
  accent: '#E0AAFF'
}
```

**Blue:**
```typescript
{
  primary: '#4CC9F0',
  secondary: '#023047',
  background: '#001219',
  accent: '#F72585'
}
```

## 📊 Data Model

```typescript
interface Holding {
  name: string;                 // Company name
  ticker: string;               // Stock ticker
  amountInvestedSek: number;    // Amount in SEK
  percentOfPortfolio: number;   // Percentage (0-100)
}
```

## 🎯 Customization Points

### Slide Content

Edit individual slide components in `src/components/`:
- `Slide1.tsx` - Top holdings display
- `Slide2.tsx` - Portfolio statistics
- `Slide3.tsx` - Year summary

### Styling

Main styles are in `src/styles/theme.less`. CSS variables are set dynamically:
- `--wrapped-primary`
- `--wrapped-secondary`
- `--wrapped-background`
- `--wrapped-accent`

### Animation Timing

Adjust animation durations in each component:
```typescript
// Count-up animation
<AnimatedNumber value={100} duration={2} />

// Slide transitions
transition={{ duration: 0.8, ease: 'easeOut' }}
```

## 🔧 Tech Stack

- React 18
- TypeScript
- Framer Motion 11
- Less CSS preprocessor
- Vite build tool

## 📱 Responsive

All slides are fully responsive and work on mobile and desktop.

## 🎓 Tips

1. Keep holding data realistic (percentages should add up to ~100)
2. Test with different theme colors to match your brand
3. Customize text in Slide3 to personalize the experience
4. Add more slides by creating new components and adding to the slides array

## 📄 License

MIT
