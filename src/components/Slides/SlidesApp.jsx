import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Maximize2, 
  Minimize2, 
  Home, 
  Layers 
} from 'lucide-react';

// CSS specifically for Tailwind in slides
import '../../slides.css';

// Slide Wrapper
import Slide from './Slide';

// Slide Templates
import {
  TitleSlide,
  IntroSlide,
  ConceptSlide,
  FlowSlide,
  ToolsGridSlide,
  DemoSlide,
  FutureSlide,
  SkillsSlide,
  ClosingSlide
} from './SlideTemplates';

const SlidesApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = [
    <TitleSlide />,
    <IntroSlide />,
    <ConceptSlide />,
    <FlowSlide />,
    <FutureSlide />,
    <ToolsGridSlide />,
    <DemoSlide />,
    <SkillsSlide />,
    <ClosingSlide />
  ];

  const totalSlides = slides.length;

  const navigateTo = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= totalSlides) return;
    setDirection(nextIndex > currentSlide ? 1 : -1);
    setCurrentSlide(nextIndex);
  };

  const next = () => navigateTo(currentSlide + 1);
  const prev = () => navigateTo(currentSlide - 1);

  // Key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Fullscreen tracking
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    const element = document.getElementById('slides-root');
    if (!element) return;
    
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div 
      id="slides-root" 
      className="min-h-screen text-slate-100 flex flex-col justify-between select-none overflow-hidden relative"
      style={{ colorScheme: 'dark' }}
    >
      {/* Background ambient glows similar to Kar-Go deck */}
      <div className="slides-ambient-1"></div>
      <div className="slides-ambient-2"></div>

      {/* Top Bar */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-white/5 bg-[#020918]/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xs font-bold tracking-widest text-slate-400">
            PROG ERA IA // PRESENTACIÓN
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleFullscreen}
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa (F11)"}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-white/5 text-slate-400 hover:text-white cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          
          <button 
            onClick={goHome}
            title="Volver a la Web Principal"
            className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-white/5 text-slate-400 hover:text-white flex items-center gap-1.5 text-[10px] font-mono cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">INICIO</span>
          </button>
        </div>
      </header>

      {/* Slide Content Area */}
      <main className="flex-1 flex items-center justify-center p-6 md:p-10 relative overflow-hidden z-10">
        <div className="w-full max-w-5xl h-full flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <Slide key={currentSlide} direction={direction}>
              {slides[currentSlide]}
            </Slide>
          </AnimatePresence>
        </div>
      </main>

      {/* Navigation Controller Footer */}
      <footer className="px-6 py-4 border-t border-white/5 bg-[#020918]/80 backdrop-blur-md flex justify-between items-center z-20">
        {/* Progress Bar / Dots */}
        <div className="flex items-center gap-4">
          <div className="text-xs font-mono text-slate-400">
            {currentSlide + 1} <span className="text-slate-650">/</span> {totalSlides}
          </div>
          
          <div className="hidden md:flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => navigateTo(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx 
                    ? 'bg-emerald-400 w-5 shadow-lg shadow-emerald-500/20' 
                    : 'bg-slate-800 hover:bg-slate-600'
                }`}
                title={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Action Navigation Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={prev}
            disabled={currentSlide === 0}
            className={`px-3.5 py-1.5 rounded-lg border text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1 cursor-pointer ${
              currentSlide === 0
                ? 'bg-transparent border-transparent text-slate-700 cursor-not-allowed'
                : 'bg-white/5 border-white/5 hover:border-white/10 text-slate-300 hover:text-white'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Anterior
          </button>
          
          <button
            onClick={next}
            disabled={currentSlide === totalSlides - 1}
            className={`px-3.5 py-1.5 rounded-lg border text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1 cursor-pointer ${
              currentSlide === totalSlides - 1
                ? 'bg-transparent border-transparent text-slate-700 cursor-not-allowed'
                : 'bg-emerald-500 border-emerald-600 text-slate-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/10'
            }`}
          >
            Siguiente
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SlidesApp;
