import { useState } from 'react'
import { menuItems, categories } from '../data/content'
import FadeInSection from './FadeInSection'

interface MenuSectionProps {
  onAddToCart: (item: any) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredMenu = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <section id="menu" className="menu-section premium-menu">
      <FadeInSection>
        <div className="section-header-center">
          <h2 className="section-title">Menu Favorit</h2>
          <p className="section-subtitle">Dibuat dengan bahan premium dan penuh cinta.</p>
        </div>
        
        <div className="menu-controls">
          <div className="search-container premium-search">
            <input 
              type="text" 
              placeholder="🔍 Cari minuman atau kue..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="menu-filters premium-filters">
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
        </div>

        {filteredMenu.length === 0 ? (
          <p className="empty-search">Yah, menu yang kamu cari tidak ditemukan 😢</p>
        ) : (
          <div className="menu-grid premium-grid">
            {filteredMenu.map(item => (
              <div key={item.id} className="menu-card-premium">
                <div className="menu-card-img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <div className="menu-card-price-tag">{formatPrice(item.price as number)}</div>
                  <div className="menu-card-overlay"></div>
                </div>
                <div className="menu-card-content">
                  <span className="menu-card-category">{item.category}</span>
                  <h3 className="menu-card-title">{item.name}</h3>
                  <p className="menu-card-desc">{item.desc}</p>
                  <button className="add-btn-premium" onClick={() => onAddToCart(item)}>+ Keranjang</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </FadeInSection>
    </section>
  )
}
