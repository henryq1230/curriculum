import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    // 1. Reveal Animations Observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .staggered-list');
    animatedElements.forEach(el => revealObserver.observe(el));

    // 2. Background Color Shift Observer
    const sectionColors = {
      hero: '#0a192f',       // Navy
      about: '#1f0d3d',      // Violet
      experience: '#0a192f', // Navy
      projects: '#1f0d3d',   // Violet
      contact: '#0a192f'     // Navy
    };

    const colorObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const color = sectionColors[sectionId];
          if (color) {
            document.body.style.setProperty('background-color', color, 'important');
          } else {
            document.body.style.setProperty('background-color', 'var(--navy)', 'important');
          }
        }
      });
    }, { threshold: 0, rootMargin: '-50% 0px -50% 0px' });

    const sections = document.querySelectorAll('section');
    sections.forEach(sec => colorObserver.observe(sec));

    return () => {
      animatedElements.forEach(el => revealObserver.unobserve(el));
      sections.forEach(sec => colorObserver.unobserve(sec));
      document.body.style.backgroundColor = '';
    };
  }, []);
};
