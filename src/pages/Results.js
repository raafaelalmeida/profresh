import styles from './Results.module.css';

function Results() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.title}>See the Results</h1>
      <p className={styles.subtitle}>Before & After – Real ProFresh Transformations</p>

      <div className={styles.gallery}>
        {[1, 2, 3, 4].map((n) => (
          <div className={styles.imageBlock} key={n}>
            <img src={`/images/before${n}.jpeg`} alt={`Before ${n}`} className={styles.image} />
            <img src={`/images/after${n}.jpeg`} alt={`After ${n}`} className={styles.image} />
            <p className={styles.caption}>Client {n} – "Amazing difference!"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
