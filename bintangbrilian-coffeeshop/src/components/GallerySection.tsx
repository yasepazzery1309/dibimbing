import FadeInSection from './FadeInSection';

const photos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80' },
  { id: 2, url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80' },
  { id: 3, url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&auto=format&fit=crop&q=80' },
  { id: 4, url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80' },
  { id: 5, url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&auto=format&fit=crop&q=80' }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="gallery-section premium-gallery">
      <FadeInSection>
        <div className="section-header-center">
          <h2 className="section-title">Sudut Kafe</h2>
          <p className="section-subtitle">Lebih dari sekadar secangkir kopi, ini adalah ruang untuk Anda.</p>
        </div>
        <div className="gallery-row-container">
          {photos.map((photo) => (
            <div key={photo.id} className="gallery-row-item">
              <img src={photo.url} alt={`Gallery ${photo.id}`} loading="lazy" />
              <div className="bento-overlay"></div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}
