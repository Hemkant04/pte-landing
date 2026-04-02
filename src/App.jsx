import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import ProductDetails from './components/ProductDetails'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQs from './components/FAQs'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <ProductDetails />
        <Testimonials />
        <Pricing />
        <FAQs />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </div>
  )
}

export default App
