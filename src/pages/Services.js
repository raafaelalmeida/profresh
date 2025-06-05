import styles from "./Services.module.css";
import { FaBroom, FaCouch, FaSprayCan, FaShieldAlt } from "react-icons/fa";

function Services() {
  return (
    <div className={styles.container}>
      <h2>Our Services</h2>
      <p className={styles.subText}>We specialize in high-quality carpet and upholstery cleaning services.</p>

      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <FaBroom className={styles.icon} />
          <h3>Carpet Deep Cleaning</h3>
          <p>Eliminate dirt, allergens, and bacteria for a healthier home.</p>
        </div>

        <div className={styles.serviceItem}>
          <FaCouch className={styles.icon} />
          <h3>Upholstery Cleaning</h3>
          <p>Refresh and sanitize sofas, chairs, and mattresses for a fresh look.</p>
        </div>

        <div className={styles.serviceItem}>
          <FaSprayCan className={styles.icon} />
          <h3>Stain & Odor Removal</h3>
          <p>Say goodbye to tough stains and unwanted smells with our deep cleaning techniques.</p>
        </div>

        <div className={styles.serviceItem}>
          <FaShieldAlt className={styles.icon} />
          <h3>Protection Treatment</h3>
          <p>Extend the life of your carpets with our advanced protective treatments.</p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className={styles.pricingSection}>
        <h2>Pricing</h2>
        <table className={styles.pricingTable}>
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carpet Steam Cleaning</td>
              <td>From $89 (Up To 2 Rooms)</td>
            </tr>
            <tr>
              <td>Upholstery Cleaning</td>
              <td>From $89 (Up To 3 Seats)</td>
            </tr>
            <tr>
              <td>Mattresses</td>
              <td>From $69</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
