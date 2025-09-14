import CyberpunkNeuralBackground from '../creative/CyberpunkNeuralBackground';

/**
 * Example component showing how to use the CyberpunkNeuralBackground
 * This is the minimal implementation needed to get the background working
 */
export const BackgroundDemo = () => {
  return (
    <div className="relative w-full h-screen">
      {/* The background component */}
      <CyberpunkNeuralBackground />
      
      {/* Your content goes here - positioned above the background */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Content Here
          </h1>
          <p className="text-xl text-cyan-300/80 max-w-2xl">
            This is how you layer content over the cyberpunk neural background.
            The background is interactive - try moving your mouse around!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-colors">
              Action Button
            </button>
            <button className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors">
              Another Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundDemo;