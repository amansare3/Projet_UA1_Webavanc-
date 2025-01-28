"use client";
import Link from "next/link";
import styles from "./Section1.module.css";

const Section = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.threeContainers}>
        <div className={styles.container}>
          <Link href="/crossfit" className={styles.link}>
            <img
              src="/crossFit.jpg"
              alt="Cours CrossFit"
              className={styles.containerImage}
            />
            <p className={styles.containerText}>Cours CrossFit</p>
            <p className={styles.containerDescription}>
              Entraînements intensifs pour améliorer votre force, votre endurance et votre agilité grâce à des exercices variés et stimulants.
            </p>
          </Link>
        </div>

        <div className={styles.container}>
          <Link href="/kickboxing" className={styles.link}>
            <img
              src="/kickBoxing.jpg"
              alt="Cours Kickboxing"
              className={styles.containerImage}
            />
            <p className={styles.containerText}>Cours Kickboxing</p>
            <p className={styles.containerDescription}>
              Apprenez les techniques de combat tout en vous défoulant, en améliorant votre coordination et en augmentant votre condition physique.
            </p>
          </Link>
        </div>

        <div className={styles.container}>
          <Link href="/musculation" className={styles.link}>
            <img
              src="/trm.jpg"
              alt="Cours de Musculation"
              className={styles.containerImage}
            />
            <p className={styles.containerText}>Cours de Musculation</p>
            <p className={styles.containerDescription}>
              Développez votre force et votre masse musculaire avec des exercices ciblés et un équipement de pointe.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
