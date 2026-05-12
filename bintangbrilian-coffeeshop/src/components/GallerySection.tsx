import FadeInSection from './FadeInSection';

const photos = [
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80'
];

export default function GallerySection() {
  return (
    <section id="gallery" className="gallery-section">
      <FadeInSection>
        <h2 className="section-title">Galeri Kami</h2>
        <div className="gallery-grid">
          {photos.map((url, i) => (
            <div key={i} className="gallery-item">
              <img src={url} alt={`Suasana Kafe ${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}
