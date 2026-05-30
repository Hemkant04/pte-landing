import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PTEPreparationPage from './pages/PTEPreparationPage'
import PracticePackagePage from './pages/PracticePackagePage'
import DateBookingPage from './pages/DateBookingPage'
import DownloadsPage from './pages/DownloadsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PTEPreparationPage />} />
        <Route path="/practice-package" element={<PracticePackagePage />} />
        <Route path="/date-booking" element={<DateBookingPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
      </Route>
    </Routes>
  )
}
