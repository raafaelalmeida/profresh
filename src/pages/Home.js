import { FaLeaf, FaShieldAlt, FaStar } from "react-icons/fa"; // Importing icons
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <div className={styles.overlay}></div>
        <h1 className={styles.bannerText}>Professional Carpet Cleaning Services</h1>
        <p className={styles.bannerSubText}>We make your carpets fresh and clean with eco-friendly products.</p>
        <a href="/contact" className={styles.ctaButton}>Get a Free Quote</a>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.whyChoose}>
        <h2>Why Choose Profresh Carpet Cleaning?</h2>
        <div className={styles.whyGrid}>
          <div className={styles.feature}>
            <FaLeaf className={styles.icon} />
            <h3>Eco-Friendly Products</h3>
            <p>We use 100% safe, non-toxic cleaning solutions for your family and pets.</p>
          </div>
          <div className={styles.feature}>
            <FaShieldAlt className={styles.icon} />
            <h3>Trusted Professionals</h3>
            <p>Our highly trained technicians ensure deep cleaning with guaranteed results.</p>
          </div>
          <div className={styles.feature}>
            <FaStar className={styles.icon} />
            <h3>5-Star Service</h3>
            <p>Rated highly by customers for outstanding quality and professionalism.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
