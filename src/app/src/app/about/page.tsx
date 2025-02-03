import styles from "./about.module.css";
import Image from "next/image";

const AboutUniversity = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0OHeJYCdtnb6opiZ5nwk-8ISvFoeniktBQ&s"
            alt="Graduates"
            width={500}
            height={300}
            className={styles.image}
          />
          <div className={styles.playButton}></div>
        </div>
        <div className={styles.textContent}>
          <h3 className={styles.subtitle}>ABOUT UNIVERSITY</h3>
          <h2 className={styles.title}>Nurturing Tomorrow,s Leaders Today</h2>
          <p className={styles.description}>
            Embark on a transformative educational journey with our university,s
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p className={styles.description}>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p className={styles.description}>
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversity;
