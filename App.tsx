import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Stats from './components/Stats';
import Roadmap from './components/Roadmap';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans text-slate-900 dark:text-slate-50 selection:bg-brand-blue selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Stats />
        <Roadmap />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;