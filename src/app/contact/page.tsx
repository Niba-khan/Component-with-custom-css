import styles from "./contact.module.css";
import Image from "next/image";

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
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPK9ylMDzbfPj6Ldsjijgn8lymX7mOqX9h2Q&s" alt="Email" width={20} height={20} className={styles.icon} />
              <p>Contact@GreatStack.dev</p>
            </div>
            <div className={styles.iconRow}>
              <Image src="https://e7.pngegg.com/pngimages/547/530/png-clipart-telephone-call-email-computer-icons-email-miscellaneous-text-thumbnail.png" alt="Phone" width={20} height={20} className={styles.icon} />
              <p>+1 123-456-7890</p>
            </div>
            <div className={styles.iconRow}>
              <Image src="https://w7.pngwing.com/pngs/158/65/png-transparent-location-application-icon-computer-software-business-information-organization-location-logo-miscellaneous-blue-company-thumbnail.png" alt="Location" width={20} height={20} className={styles.icon} />
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
