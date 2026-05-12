import { useState } from 'react'
import { menuItems, categories } from '../data/content'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filteredMenu = activeCategory === 'Semua' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

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
              <div className="menu-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
