"use client";
import Link from "next/link";
import styles from "./Section1.module.css";
// Définition des données des cours à afficher
const courses = [
  {
    href: "/crossfit",
    imageSrc: "/crossFit.webp",
    altText: "Cours CrossFit",
    title: "Cours CrossFit",
    description:
      "Entraînements intensifs pour améliorer votre force, votre endurance et votre agilité grâce à des exercices variés et stimulants.",
  },
  {
    href: "/kickboxing",
    imageSrc: "/kickBoxing.jpg",
    altText: "Cours Kickboxing",
    title: "Cours Kickboxing",
    description:
      "Apprenez les techniques de combat tout en vous défoulant, en améliorant votre coordination et en augmentant votre condition physique.",
  },
  {
    href: "/musculation",
    imageSrc: "/trm.jpg",
    altText: "Cours de Musculation",
    title: "Cours de Musculation",
    description:
      "Développez votre force et votre masse musculaire avec des exercices ciblés et un équipement de pointe.",
  },
];
// Composant Section qui rend la liste des cours
const Section = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.threeContainers}>
        {courses.map((course, index) => (
          <div key={index} className={styles.container}>
            <Link href={course.href} className={styles.link}>
              <img
                src={course.imageSrc}
                alt={course.altText}
                className={styles.containerImage}
              />
              <p className={styles.containerText}>{course.title}</p>
              <p className={styles.containerDescription}>{course.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
