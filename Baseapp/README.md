# Investment Wrapped 2024

A beautiful React TypeScript application that showcases your investment performance in a Spotify Wrapped-style interface.

## Features

- 🎨 Beautiful gradient UI with smooth animations
- 📊 Investment statistics display (total invested, returns, trades)
- 🏆 Top performing asset highlight
- 📱 Responsive design for mobile and desktop
- ⚡ Built with Vite for fast development

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
Baseapp/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Main hero component
│   │   └── Hero.css          # Hero component styles
│   ├── data/
│   │   └── investmentData.json  # Mock investment statistics
│   ├── App.tsx               # Root component
│   ├── App.css               # App styles
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## Mock Data

The application uses mock investment data located in `src/data/investmentData.json`. You can customize this file to display your own statistics:

- Total invested amount
- Annual returns percentage
- Top performing assets
- Portfolio breakdown
- Trading activity
- Monthly performance stats
- Achievements

## Customization

### Changing Colors

Edit the gradient in `src/components/Hero.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding More Stats

1. Update `src/data/investmentData.json` with new data
2. Modify `src/components/Hero.tsx` to display the new stats

## License

MIT
