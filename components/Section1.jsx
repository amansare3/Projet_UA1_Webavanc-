"use client"
import styles from "./Section1.module.css";

const Section = () => {
  return (
    <div className={styles.sectionContainer}>
      {/* Nouvelle section avec 3 conteneurs cliquables */}
      <div className={styles.threeContainers}>
        {/* Conteneur 1 : Cours CrossFit */}
        <div className={styles.container}>
          <a href="/link1" className={styles.link}>
            <img
              src="/crossFit.jpg"
              alt="Container 1"
              className={styles.containerImage}
            />
            <p className={styles.containerText}>Cours CrossFit</p>
            <p className={styles.containerDescription}>
              Entraînements intensifs pour améliorer votre force, votre endurance et votre agilité grâce à des exercices variés et stimulants.
            </p>
          </a>
        </div>

        {/* Conteneur 2 : Cours Kickboxing */}
        <div className={styles.container}>
          <a href="/link2" className={styles.link}>
            <img
              src="/kickBoxing.jpg"
              alt="Container 2"
              className={styles.containerImage}
            />
            <p className={styles.containerText}>Cours Kickboxing</p>
            <p className={styles.containerDescription}>
              Apprenez les techniques de combat tout en vous défoulant, en améliorant votre coordination et en augmentant votre condition physique.
            </p>
          </a>
        </div>

        {/* Conteneur 3 : Cours de Musculation */}
        <div className={styles.container}>
          <a href="/link3" className={styles.link}>
            <img
              src="/trm.jpg"
              alt="Container 3"
              className={styles.containerImage}
            />
            <p className={styles.containerText}>Cours de Musculation</p>
            <p className={styles.containerDescription}>
              Développez votre force et votre masse musculaire avec des exercices ciblés et un équipement de pointe.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;
