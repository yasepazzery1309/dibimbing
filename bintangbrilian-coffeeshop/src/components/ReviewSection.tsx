import { reviews } from '../data/content'

export default function ReviewSection() {
  return (
    <section id="reviews" className="reviews-section">
      <h2 className="section-title">Apa Kata Mereka</h2>
      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-rating">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-author">
              <img src={review.avatar} alt={review.name} className="review-avatar" />
              <span className="review-name">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
