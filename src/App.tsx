import CyberpunkNeuralBackground from './components/creative/CyberpunkNeuralBackground';
import './index.css';

const App = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <CyberpunkNeuralBackground />
      
      {/* Optional overlay content for demo */}
      <div className="relative z-10 flex items-center justify-center h-full pointer-events-none">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Cyberpunk Neural
          </h1>
          <p className="text-xl text-cyan-300/80 font-mono">
            Interactive 3D Background
          </p>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Move your mouse to interact with the neural network. This background is fully customizable and ready to use in your projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;