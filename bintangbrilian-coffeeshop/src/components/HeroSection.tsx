import FadeInSection from './FadeInSection';

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&auto=format&fit=crop&q=80" alt="Latar Belakang Coffee Shop" className="hero-bg" />
      <div className="hero-overlay"></div>
      <FadeInSection>
        <div className="hero-content">
          <h1 className="hero-title">Bangkitkan <span>Semangatmu</span>.</h1>
          <p className="hero-subtitle">Nikmati kopi spesial terbaik dalam suasana modern yang nyaman. Dibuat khusus untuk Anda.</p>
          <a href="#menu" className="btn-primary">Lihat Menu Kami</a>
        </div>
      </FadeInSection>
    </section>
  )
}
