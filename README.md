# Cyberpunk Neural Background

A stunning, interactive 3D cyberpunk-themed neural network background built with React Three Fiber.

![Cyberpunk Neural Background](https://via.placeholder.com/800x400/000814/00ffff?text=Cyberpunk+Neural+Background)

## Features

- **Interactive 3D Neural Network**: Mouse movements influence the neural connections
- **Holographic Particle Effects**: Dynamic particle system with cyberpunk aesthetics  
- **Volumetric Fog**: Atmospheric depth with realistic fog effects
- **Optimized Performance**: Smooth 60fps animation with efficient rendering
- **Fully Customizable**: Easy to modify colors, intensity, and behavior
- **Responsive Design**: Works on all screen sizes

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/cyberpunk-neural-background.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

### Basic Implementation

```tsx
import CyberpunkNeuralBackground from './components/creative/CyberpunkNeuralBackground';

function App() {
  return (
    <div className="relative w-full h-screen">
      <CyberpunkNeuralBackground />
      
      {/* Your content here */}
      <div className="relative z-10">
        <h1>Your Amazing Content</h1>
      </div>
    </div>
  );
}
```

### Customization

The background automatically adapts to mouse movements and provides several customization options:

- **Node Count**: Adjust the number of neural nodes (default: 150)
- **Particle Count**: Control holographic particle density (default: 2500) 
- **Intensity**: Modify animation intensity (auto-adjusts based on time)
- **Colors**: Cyberpunk palette with cyan, magenta, and lime accents

## Components

- `CyberpunkNeuralBackground` - Main background component
- `CyberpunkNeuralMatrix` - Neural network visualization
- `HolographicParticleField` - Particle effects system
- `VolumetricFog` - Atmospheric fog rendering

## Tech Stack

- **React 18** - UI framework
- **Three.js** - 3D graphics
- **React Three Fiber** - React Three.js integration
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling

## Performance

Optimized for:
- 60 FPS on modern devices
- Efficient GPU utilization  
- Minimal CPU overhead
- Responsive to different screen sizes

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use in personal and commercial projects.

## Contributing

Contributions welcome! Please feel free to submit issues and pull requests.

---

**Made with ❤️ and Three.js**
