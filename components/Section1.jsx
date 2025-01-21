import styles from './Section1.modules.css';

const Section = () => {
  return (
    <div className={styles.sectionContainer}>

      <div className={styles.imageContainer}>
<div className={styles.image}> 
      <img src="/gymmachines.jpg" alt="Gym Machines" className='styles.gym' width={400}/>
      </div>
      </div>
      <h2 className={styles.subText}>Why Iron Haven?</h2>
      <p className={styles.paragraph}>
        At Iron Haven, we believe you deserve more than just a gym — you deserve an elevated fitness experience. Here, your journey to a healthier, stronger you is our top priority. With state-of-the-art equipment, expert guidance, and a community that motivates, we’re dedicated to helping you reach your personal best. At Iron Haven, fitness is tailored to you because we believe in putting you first.
      </p>
    </div>
  );
};

export default Section;