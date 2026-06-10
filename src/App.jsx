import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Lazy load page components for better performance
const AboutPage = lazy(() => import('./pages/AboutPage'))
const PTEPreparationPage = lazy(() => import('./pages/PTEPreparationPage'))
const PracticePackagePage = lazy(() => import('./pages/PracticePackagePage'))
const DateBookingPage = lazy(() => import('./pages/DateBookingPage'))
const DownloadsPage = lazy(() => import('./pages/DownloadsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Simple loading fallback
function PageLoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div className="w-8 h-8 border-2 border-zinc-200 dark:border-white/10 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  // Preload home page after initial render
  useEffect(() => {
    const preloadHome = () => import('./pages/PTEPreparationPage')
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadHome, { timeout: 2000 })
    } else {
      setTimeout(preloadHome, 1000)
    }
  }, [])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Suspense fallback={<PageLoadingFallback />}><PTEPreparationPage /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<PageLoadingFallback />}><AboutPage /></Suspense>} />
        <Route path="/practice-package" element={<Suspense fallback={<PageLoadingFallback />}><PracticePackagePage /></Suspense>} />
        <Route path="/date-booking" element={<Suspense fallback={<PageLoadingFallback />}><DateBookingPage /></Suspense>} />
        <Route path="/downloads" element={<Suspense fallback={<PageLoadingFallback />}><DownloadsPage /></Suspense>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
