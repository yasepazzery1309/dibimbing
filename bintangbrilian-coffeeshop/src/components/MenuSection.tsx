import { useState } from 'react'
import { menuItems, categories } from '../data/content'

interface MenuSectionProps {
  onAddToCart: (item: any) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filteredMenu = activeCategory === 'Semua' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <section id="menu" className="menu-section">
      <h2 className="section-title">Menu Kami</h2>
      
      <div className="menu-filters">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredMenu.map(item => (
          <div key={item.id} className="menu-item">
            <div className="menu-img-container">
              <img src={item.img} alt={item.name} className="menu-img" />
            </div>
            <div className="menu-info">
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-desc">{item.desc}</p>
              <div className="menu-bottom">
                <div className="menu-price">{formatPrice(item.price as number)}</div>
                <button className="add-to-cart-btn" onClick={() => onAddToCart(item)}>+ Tambah</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
