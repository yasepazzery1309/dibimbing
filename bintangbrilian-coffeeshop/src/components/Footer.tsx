export default function Footer() {
  return (
    <footer id="about" className="footer-rich">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="logo logo-footer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
              <line x1="6" y1="2" x2="6" y2="4"></line>
              <line x1="10" y1="2" x2="10" y2="4"></line>
              <line x1="14" y1="2" x2="14" y2="4"></line>
            </svg>
            Bintangbrilian Coffee
          </div>
          <p className="footer-desc">Menciptakan momen bahagia, dari setiap cangkir. Bergabunglah untuk pengalaman ngopi yang tak terlupakan.</p>
        </div>
        <div className="footer-col">
          <h3>Jam Buka</h3>
          <p>Sen - Jum: 08:00 - 22:00</p>
          <p>Sab - Min: 09:00 - 23:00</p>
        </div>
        <div className="footer-col">
          <h3>Hubungi Kami</h3>
          <p>Jl. Sudirman No. 123, Jakarta</p>
          <p>hello@bintangbriliancoffee.com</p>
          <p>+62 812 3456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2026 Bintangbrilian Coffee. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  )
}
