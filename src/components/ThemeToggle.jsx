'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-14 h-7 rounded-full p-1
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-accent/50
        ${isDark 
          ? 'bg-white/10 hover:bg-white/20' 
          : 'bg-zinc-200 hover:bg-zinc-300'
        }
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div
        className={`
          absolute top-1 w-5 h-5 rounded-full
          flex items-center justify-center
          transition-all duration-300 ease-out transform
          ${isDark 
            ? 'translate-x-7 bg-zinc-950' 
            : 'translate-x-0 bg-white'
          }
        `}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-white" />
        ) : (
          <Sun className="w-3 h-3 text-amber-500" />
        )}
      </div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Sun className={`w-3 h-3 transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-0'}`} />
        <Moon className={`w-3 h-3 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-30'}`} />
      </div>
    </button>
  );
}
