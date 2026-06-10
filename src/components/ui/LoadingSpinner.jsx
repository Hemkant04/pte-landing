'use client';

import { useState, useEffect } from 'react'

export default function LoadingSpinner({ size = 'md', className = '' }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }

  return (
    <div
      className={`inline-flex items-center justify-center transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'} ${className}`}
      aria-label="Loading"
    >
      <div
        className={`
          ${sizes[size] || sizes.md}
          border-2 border-zinc-200 dark:border-white/10
          border-t-accent dark:border-t-accent
          rounded-full animate-spin
        `}
        style={{ borderTopWidth: '2px' }}
      />
    </div>
  )
}
