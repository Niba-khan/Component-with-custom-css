import styles from "./contact.module.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contactBox}>
        
        {/* Left Section (Contact Info) */}
        <div className={styles.leftSection}>
          <h3 className={styles.title}>Contact Us</h3>
          <h2 className={styles.heading}>Get in Touch</h2>
          <p className={styles.description}>
            Feel free to reach out through the contact form or find our contact information below.
          </p>

          <div>
            <div className={styles.iconRow}>
              <FaEnvelope color="blue" size={20}  />
              <p>Contact@GreatStack.dev</p>
            </div>
            <div className={styles.iconRow}>
              <FaPhoneAlt color="blue" size={20} />
              <p>+1 123-456-7890</p>
            </div>
            <div className={styles.iconRow}>
              <FaMapMarkerAlt color="blue" size={20} />
              <p>77 Massachusetts Ave, Cambridge, MA 02139, USA</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className={styles.rightSection}>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Enter your name" className={styles.inputField} />
            <input type="text" placeholder="Enter your mobile number" className={styles.inputField} />
            <input type="email" placeholder="Enter your email id" className={styles.inputField} />
            <textarea placeholder="Enter your message" className={`${styles.inputField} ${styles.textarea}`}></textarea>
            <button className={styles.button}>Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
