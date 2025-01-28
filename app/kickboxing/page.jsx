import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function KickBoxing() {
  return (
    <>
      <Navbar />

      <div>
        {/* Image avec le texte "Personal Training" */}
        <div className={styles.headerImage}>
          <h1 className={styles.headerText}>Personal Training</h1>
        </div>

        {/* Conteneur principal en deux colonnes (image à gauche, texte à droite) */}
        <div className={styles.content}>
          {/* Image à gauche */}
          <div className={styles.imageContainer}>
            <img src="/kickBoxing.jpg" alt="Personal Training" className={styles.image} />
          </div>

          {/* Texte à droite */}
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>ELEVATE YOUR FITNESS JOURNEY</h3>
            <h1 className={styles.title}>PERSONAL TRAINING</h1>
            <p>
              Our Personal Training programs are designed to help you achieve your fitness goals with expert guidance. 
              Whether you're looking to improve strength, build muscle, or enhance athletic performance, we offer tailored sessions 
              in Boxing, Powerlifting, Bodybuilding, and Athlete Training.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
