'use client';

import { useState, useEffect } from 'react'
import { Home, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 pt-20 transition-colors duration-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className={`relative z-10 max-w-lg mx-auto px-4 text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* 404 Code */}
        <div className="mb-6">
          <span className="text-[120px] sm:text-[160px] font-bold leading-none bg-gradient-to-br from-blue-200 via-accent to-blue-200 dark:from-blue-300 dark:via-accent dark:to-blue-300 bg-clip-text text-transparent select-none">
            404
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 transition-colors duration-300">
          Page Not Found
        </h1>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-base sm:text-lg transition-colors duration-300">
          The page you are looking for does not exist or has been moved. Let us get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-zinc-950 rounded-full font-semibold text-sm hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            to="/date-booking"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/5 dark:text-white text-zinc-900 rounded-full font-semibold text-sm border border-zinc-200 dark:border-white/10 hover:border-accent/50 transition-colors"
          >
            Book PTE Date
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
