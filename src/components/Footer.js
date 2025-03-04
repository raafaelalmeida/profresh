import styles from './Footer.module.css';
import { Link } from "react-router-dom";
import { FaFacebook, FaSms } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Navigation Links */}
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* CTA Button */}
        <div className={styles.cta}>
          <Link to="/contact" className={styles.ctaButton}>Get a Free Quote</Link>
        </div>

        {/* Social & Contact Links - Side by Side */}
        <div className={styles.social}>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} /> Facebook
          </a>
          <a href="sms:+61406963152">
            <FaSms className={styles.icon} /> Send SMS
          </a>
        </div>
      </div>

      <p>© {new Date().getFullYear()} Profresh Carpet Cleaning - All rights reserved.</p>
    </footer>
  );
}

export default Footer;
