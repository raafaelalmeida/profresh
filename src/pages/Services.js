import styles from './Services.module.css';
import { FaBroom, FaCouch, FaSprayCan, FaShieldAlt } from 'react-icons/fa';

function Services() {
  return (
    <div className={styles.container}>
      <h2>Our Services</h2>
      <p>We provide high-quality carpet and upholstery cleaning services.</p>

      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <FaBroom className={styles.icon} />
          <h3>Carpet Deep Cleaning</h3>
          <p>We remove dirt, allergens, and bacteria for a healthier home.</p>
        </div>

        <div className={styles.serviceItem}>
          <FaCouch className={styles.icon} />
          <h3>Upholstery Cleaning</h3>
          <p>Refresh and sanitize sofas, chairs, and mattresses.</p>
        </div>

        <div className={styles.serviceItem}>
          <FaSprayCan className={styles.icon} />
          <h3>Stain & Odor Removal</h3>
          <p>Say goodbye to tough stains and unwanted smells.</p>
        </div>

        <div className={styles.serviceItem}>
          <FaShieldAlt className={styles.icon} />
          <h3>Protection Treatment</h3>
          <p>Keep your carpets cleaner for longer with our special treatments.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
