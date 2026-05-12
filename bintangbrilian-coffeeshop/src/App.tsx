import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MenuSection from './components/MenuSection'
import ReviewSection from './components/ReviewSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <ReviewSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
