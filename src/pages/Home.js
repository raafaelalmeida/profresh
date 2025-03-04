import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { FaBroom, FaCouch, FaSprayCan, FaShieldAlt } from "react-icons/fa";

function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <div className={styles.overlay}></div>
        <h1 className={styles.bannerText}>Professional Carpet Cleaning Services</h1>
        <p className={styles.bannerSubText}>We bring freshness and hygiene to your carpets with eco-friendly solutions.</p>
        
        {/* ✅ Fixed CTA Button */}
        <Link to="/contact" className={styles.ctaButton}>
          Get a Free Quote
        </Link>
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
    </div>
  );
}

export default Home;
