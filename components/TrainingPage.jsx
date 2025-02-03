"use client"; 

import Header from "@/components/Header";
import styles from "./TrainingPage.module.css";

const TrainingPage = ({ title, imageSrc, description }) => {
  return (
    <>
      <Header />

      <div>
        <div className={styles.headerImage}>
          <h1 className={styles.headerText}>{title}</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={imageSrc} alt={title} className={styles.image} />
          </div>

          <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>ELEVATE YOUR FITNESS JOURNEY</h2>
            <h3 className={styles.title}>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingPage;
