# Usage Guide

## Basic Implementation

The simplest way to use the Cyberpunk Neural Background:

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

## Interactive Features

- **Mouse Movement**: The neural network responds to mouse position
- **Dynamic Colors**: Nodes change colors based on their type (core, processing, data)
- **Particle Effects**: Holographic particles flow through the scene
- **Volumetric Fog**: Creates atmospheric depth

## Customization Options

### Node Count
You can modify the node count in `CyberpunkNeuralMatrix.tsx`:
```tsx
<CyberpunkNeuralMatrix 
  nodeCount={150}  // Adjust this value
  timePhase={timePhase}
  mousePosition={mousePosition}
/>
```

### Particle Density
Adjust particle count in `CyberpunkNeuralBackground.tsx`:
```tsx
<HolographicParticleField 
  count={2500}  // Modify particle count
  timePhase={timePhase}
  intensity={intensity}
/>
```

### Animation Speed
Control animation timing in the main background component by adjusting the interval timing:
```tsx
const interval = setInterval(() => {
  setTimePhase(prev => prev + 0.016); // Adjust animation speed here
}, 16);
```

## Performance Tips

1. **Lower Node Count**: Reduce `nodeCount` for better performance on slower devices
2. **Reduce Particles**: Lower the `count` prop on `HolographicParticleField`
3. **Disable Fog**: Comment out `<VolumetricFog />` for performance boost
4. **Monitor FPS**: Use browser dev tools to monitor performance

## Color Scheme

The background uses a cyberpunk color palette:
- **Cyan**: `#00ffff` - Core nodes and primary accents
- **Magenta**: `#ff0080` - Processing nodes and highlights
- **Blue**: `#0080ff` - Data nodes and connections
- **Lime**: `#80ff00` - Special effects and particle variations

## Browser Support

- Chrome 90+ (Recommended)
- Firefox 88+
- Safari 14+
- Edge 90+

Requires WebGL support for 3D rendering.