interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
          <line x1="6" y1="2" x2="6" y2="4"></line>
          <line x1="10" y1="2" x2="10" y2="4"></line>
          <line x1="14" y1="2" x2="14" y2="4"></line>
        </svg>
        Bintangbrilian
      </div>
      <div className="nav-links">
        <a href="#home">Beranda</a>
        <a href="#menu">Menu</a>
        <a href="#about">Tentang Kami</a>
      </div>
      <div className="nav-actions">
        <button className="cart-icon-btn" onClick={onOpenCart}>
          🛒 <span className="cart-badge">{cartCount}</span>
        </button>
      </div>
    </nav>
  )
}
