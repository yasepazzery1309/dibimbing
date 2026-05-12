import FadeInSection from './FadeInSection'

export default function Footer() {
  return (
    <footer id="about" className="footer-rich">
      <FadeInSection>
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
              Bintangbrilian
            </div>
            <p className="footer-desc">Menciptakan momen bahagia, dari setiap cangkir. Bergabunglah untuk pengalaman ngopi yang tak terlupakan.</p>
          </div>
          <div className="footer-col">
            <h3>Lokasi Kami</h3>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24036127335!2d106.74955740698064!3d-6.229740134017646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: '10px' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <p style={{marginTop: '1rem'}}>Jl. Sudirman No. 123, Jakarta Pusat</p>
          </div>
          <div className="footer-col">
            <h3>Hubungi Kami</h3>
            <p>hello@bintangbriliancoffee.com</p>
            <p>+62 812 3456 7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">© 2026 Bintangbrilian Coffeeshop. Hak Cipta Dilindungi.</p>
        </div>
      </FadeInSection>
    </footer>
  )
}
