import { useState } from "react";
import styles from "./PromoBanner.module.css";

function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Function to hide the banner when the close button is clicked
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Hide banner if closed

  return (
    <div className={styles.banner}>
      <p>🎉 $10 OFF for First-Time Customers! Book Today & Save! 🎉</p>
      <button className={styles.closeButton} onClick={handleClose}>×</button>
    </div>
  );
}

export default PromoBanner;
