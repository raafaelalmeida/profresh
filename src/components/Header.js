import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Profresh Carpet Cleaning</Link>
        </div>

        {/* Hamburger Menu - Only Shows on Mobile */}
        <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
        </div>

        {/* Desktop & Mobile Navigation */}
        <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
