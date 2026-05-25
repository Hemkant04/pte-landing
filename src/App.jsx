import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PracticePackagePage from './pages/PracticePackagePage'
import DateBookingPage from './pages/DateBookingPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice-package" element={<PracticePackagePage />} />
        <Route path="/date-booking" element={<DateBookingPage />} />
      </Route>
    </Routes>
  )
}
