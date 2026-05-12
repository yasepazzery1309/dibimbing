import FadeInSection from './FadeInSection';

export default function HeroSection() {
  return (
    <section id="home" className="hero premium-hero">
      <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1600&auto=format&fit=crop&q=80" alt="Premium Coffee Background" className="hero-bg" />
      <div className="hero-overlay-dark"></div>
      
      <FadeInSection>
        <div className="hero-glass-card">
          <h1 className="hero-title">Bangkitkan <span className="text-gradient">Semangatmu</span>.</h1>
          <p className="hero-subtitle">Kopi spesial terbaik dalam suasana modern yang menenangkan. Sebuah pengalaman, bukan sekadar rasa.</p>
          <a href="#menu" className="btn-glow">Pesan Sekarang</a>
        </div>
      </FadeInSection>
    </section>
  )
}
