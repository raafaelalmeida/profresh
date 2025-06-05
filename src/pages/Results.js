import { useState, useEffect } from 'react';
import styles from './Results.module.css';

function Results() {
  const reviewImages = Array.from({ length: 13 }, (_, i) => `/images/review${i + 1}.jpg`);
  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? reviewImages.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === reviewImages.length - 1 ? 0 : prev + 1));

  // Autoplay a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === reviewImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [reviewImages.length]);

  return (
    <div className={styles.pageWrapper}>
      {/* Título e introdução */}
      <h1 className={styles.title}>See the Results</h1>
      <p className={styles.subtitle}>Before & After – Real ProFresh Transformations</p>

      {/* Galeria de antes e depois */}
      <div className={styles.gallery}>
        {[1, 2, 3, 4].map((n) => (
          <div className={styles.imageBlock} key={n}>
            <img src={`/images/before${n}.jpeg`} alt={`Before ${n}`} className={styles.image} />
            <img src={`/images/after${n}.jpeg`} alt={`After ${n}`} className={styles.image} />
            <p className={styles.caption}>Client {n} – "Amazing difference!"</p>
          </div>
        ))}
      </div>

      {/* Carrossel de Reviews */}
   <div className={styles.reviewsCarousel}>
  <h2>What Our Customers Say</h2>
  <div className={styles.sliderWrapper}>
    <div
      className={styles.slider}
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {reviewImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Review ${index + 1}`}
          className={styles.reviewSlide}
        />
      ))}
    </div>
  </div>
  <div className={styles.sliderControls}>
    <button onClick={handlePrev} className={styles.navBtn}>❮</button>
    <span className={styles.slideIndicator}>{current + 1} / {reviewImages.length}</span>
    <button onClick={handleNext} className={styles.navBtn}>❯</button>
  </div>
</div>
    </div>
  );
}

export default Results;
