import styles from "./teachers.module.css";
import Image from "next/image";

const teachers = [
  { id: 1, name: "John Deo", role: "Instructor", image: "https://i.pinimg.com/736x/17/fa/44/17fa44e8d7f0d4a341f078b6c94a31ef.jpg" },
  { id: 2, name: "John Deo", role: "Instructor", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWacj7ifrCFRmfFGQKNfzkzUHznMsYOHYww&s", social: true },
  { id: 3, name: "John Deo", role: "Instructor", image: "https://img.freepik.com/free-photo/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-pen-smiling-white_140725-18658.jpg" },
  { id: 4, name: "John Deo", role: "Instructor", image: "https://img.lovepik.com/photo/50249/5671.jpg_wh300.jpg" },
];

const Teachers = () => {
  return (
    <section className={styles.teachersSection}>
      <h2 className={styles.title}>OUR EXPERT TEACHER</h2>
      <div className={styles.teachersGrid}>
        {teachers.map((teacher) => (
          <div key={teacher.id} className={styles.teacherCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={teacher.image}
                alt={teacher.name}
                width={200}
                height={200}
                className={styles.image}
              />
              {teacher.social && (
                <div className={styles.socialIcons}>
                  <span className={styles.icon}>📘</span>
                  <span className={styles.icon}>🐦</span>
                  <span className={styles.icon}>📷</span>
                </div>
              )}
            </div>
            <h3 className={styles.name}>{teacher.name}</h3>
            <p className={styles.role}>{teacher.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;

