import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebook, FaSms } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Profresh Carpet Cleaning</Link>
        </div>

        {/* Social icons below logo */}
        <div className={styles.socialBar}>
          <a
            href="https://www.facebook.com/profile.php?id=61572791712252"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.icon} /> Facebook
          </a>
          <a href="sms:+61431361230">
            <FaSms className={styles.icon} /> SMS
          </a>
        </div>

        {/* Hamburger menu (mobile) */}
        <div
          className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
        </div>

        {/* Navigation */}
        <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/results" onClick={() => setMenuOpen(false)}>Results</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
