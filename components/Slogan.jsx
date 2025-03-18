import styles from './Slogan.module.css';
//affiche un slogan principal pour le site.
const Slogan = () => {
  return (
    <div className={styles.sloganContainer}>
      <h1 className={styles.sloganText}>WHERE GOALS BECOME GAINS</h1>
    </div>
    
  );
};

export default Slogan;
