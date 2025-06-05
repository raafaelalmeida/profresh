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
          <Link to="/results">Results</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* CTA Button */}
          <a
  href="sms:+61431361230?body=Hi%2C%20I%27m%20interested%20in%20a%20carpet%20cleaning%20quote."
  className={styles.ctaButton}
>
  Get a Free Quote
</a>

        {/* Social & Contact Links - Side by Side */}
        <div className={styles.social}>
          <a href="https://www.facebook.com/profile.php?id=61572791712252" target="_blank" rel="noopener noreferrer">
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
