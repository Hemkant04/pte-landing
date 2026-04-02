'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12
        rounded-full
        bg-white/80 dark:bg-white/10 backdrop-blur-xl
        border border-zinc-200 dark:border-white/20
        flex items-center justify-center
        text-zinc-900 dark:text-white
        shadow-lg shadow-black/20
        transition-all duration-300 ease-out
        hover:bg-white dark:hover:bg-white/20 hover:border-zinc-300 dark:hover:border-white/30 hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-accent/50
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
