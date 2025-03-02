import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>
      <h2 className={styles.bannerText}>Deixe seus carpetes como novos com a Profresh Carpet Cleaning</h2>
    </div>
  );
}

export default Banner;
