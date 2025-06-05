import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loader}></div>
      <h2>Preparing a fresh clean experience...</h2>
      <p>Your virtual carpet is being cleaned.</p>
    </div>
  );
}

export default Loading;
