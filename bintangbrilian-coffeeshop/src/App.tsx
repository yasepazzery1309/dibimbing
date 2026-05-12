import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MenuSection from './components/MenuSection'
import GallerySection from './components/GallerySection'
import AboutSection from './components/AboutSection'
import ReviewSection from './components/ReviewSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import CartDrawer from './components/CartDrawer'
import Toast from './components/Toast'

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const [toastMessage, setToastMessage] = useState('')
  const [isToastVisible, setIsToastVisible] = useState(false)

  const showToast = (message: string) => {
    setToastMessage(message)
    setIsToastVisible(true)
    setTimeout(() => {
      setIsToastVisible(false)
    }, 3000)
  }

  const handleAddToCart = (item: any) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    showToast(`1x ${item.name} ditambahkan ke keranjang!`)
  }

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta
        return newQ > 0 ? { ...item, quantity: newQ } : item
      }
      return item
    }))
  }

  const handleRemove = (id: number) => {
    setCartItems(prev => prev.filter(i => i.id !== id))
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app-container">
      <Navbar cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} />
      <HeroSection />
      <MenuSection onAddToCart={handleAddToCart} />
      <GallerySection />
      <ReviewSection />
      <AboutSection />
      <Footer />
      <FloatingWhatsApp />
      
      <CartDrawer 
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
      />

      <Toast message={toastMessage} isVisible={isToastVisible} />
    </div>
  )
}

export default App
