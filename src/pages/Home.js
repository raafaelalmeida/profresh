import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { FaBroom, FaCouch, FaSprayCan, FaShieldAlt } from "react-icons/fa";

function Home() {
  const reviewImages = Array.from({ length: 13 }, (_, i) => `/images/review${i + 1}.jpg`);
  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? reviewImages.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === reviewImages.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === reviewImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [reviewImages.length]);

  return (
    <div className={styles.pageWrapper}>
      {/* Banner Section */}
     <div className={styles.banner}>
  <div className={styles.overlay}></div>

  <div className={styles.bannerContent}>
    <h1 className={styles.bannerText}>Professional Carpet Cleaning Services</h1>
    <p className={styles.bannerSubText}>
      We bring freshness and hygiene to your carpets with eco-friendly solutions.
    </p>
    <Link to="/contact" className={styles.ctaButton}>
      Get a Free Quote
    </Link>
      </div>
    </div>

      {/* Why Choose Us Section */}
      <div className={styles.whyChoose}>
        <h2>Why Choose Profresh Carpet Cleaning?</h2>
        <div className={styles.whyGrid}>
          <div className={styles.feature}>
            <FaBroom className={styles.icon} />
            <h3>Deep Carpet Cleaning</h3>
            <p>We use high-quality cleaning techniques to remove dirt, bacteria, and allergens.</p>
          </div>
          <div className={styles.feature}>
            <FaCouch className={styles.icon} />
            <h3>Upholstery Cleaning</h3>
            <p>Our services refresh and sanitize sofas, chairs, and mattresses.</p>
          </div>
          <div className={styles.feature}>
            <FaSprayCan className={styles.icon} />
            <h3>Stain & Odor Removal</h3>
            <p>We eliminate stubborn stains and unpleasant odors, leaving your carpets fresh.</p>
          </div>
          <div className={styles.feature}>
            <FaShieldAlt className={styles.icon} />
            <h3>Protective Treatment</h3>
            <p>Keep your carpets cleaner for longer with our specialized protective treatment.</p>
          </div>
        </div>
      </div>

      {/* Reviews Carousel */}
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

export default Home;
