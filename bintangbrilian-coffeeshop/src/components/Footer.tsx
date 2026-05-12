import FadeInSection from './FadeInSection'

export default function Footer() {
  return (
    <footer className="footer-premium">
      <FadeInSection>
        <div className="footer-premium-container">
          <div className="footer-brand">
            <h2 className="footer-logo">Bintangbrilian</h2>
            <p>Menyeduh kebahagiaan, setiap hari.</p>
            <div className="footer-socials">
               <a href="#">Instagram</a>
               <a href="#">WhatsApp</a>
            </div>
          </div>
          
          <div className="footer-contact">
            <h3>Hubungi Kami</h3>
            <p>hello@bintangbriliancoffee.com</p>
            <p>+62 812 3456 7890</p>
            <p className="mt-2">Jl. Sudirman No. 123, Jakarta Pusat</p>
          </div>
          
          <div className="footer-map">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24036127335!2d106.74955740698064!3d-6.229740134017646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                width="100%" 
                height="200" 
                style={{ border: 0, borderRadius: '15px' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
        </div>
        
        <div className="footer-premium-bottom">
          <p>© 2026 Bintangbrilian Coffeeshop. Hak Cipta Dilindungi.</p>
        </div>
      </FadeInSection>
    </footer>
  )
}
