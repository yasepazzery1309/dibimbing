import FadeInSection from './FadeInSection';

export default function AboutSection() {
  return (
    <section id="about" className="about-premium">
      <FadeInSection>
        <div className="about-container">
          <div className="about-image-wrapper">
            <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&auto=format&fit=crop&q=80" alt="Barista Bintangbrilian" className="about-image" />
            <div className="about-badge">Sejak 2023</div>
          </div>
          <div className="about-content">
            <span className="about-tagline">Cerita Kami</span>
            <h2 className="about-title">Meracik Kebahagiaan dalam Setiap Tetes.</h2>
            <p className="about-desc">
              Bintangbrilian Coffeeshop bermula dari dedikasi sederhana terhadap biji kopi nusantara pilihan. 
              Kami meraciknya dengan presisi, menyajikannya dengan senyum, dan menyiapkannya hanya untuk Anda.
            </p>
            <p className="about-desc">
              Setiap sudut ruang dirancang agar Anda bisa berlama-lama bersantai, menyelesaikan pekerjaan, atau merayakan momen bersama orang terdekat.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
