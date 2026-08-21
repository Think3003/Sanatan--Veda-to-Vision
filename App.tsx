import React from 'react';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    // strict fixed height container to prevent browser chrome issues
    <div className="fixed inset-0 w-full h-[100dvh] bg-history-950 flex flex-col items-center justify-center font-sans overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-history-900 via-history-950 to-black opacity-90"></div>
         <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-saffron-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>
         <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-gold-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Main App Container - Centered on desktop, full on mobile */}
      <div className="w-full h-full md:h-[95vh] md:max-w-4xl z-10 relative flex flex-col md:rounded-xl md:shadow-2xl md:border md:border-gold-900/30 overflow-hidden bg-history-950/50 backdrop-blur-sm">
         <ChatInterface />
      </div>
    </div>
  );
}

export default App;