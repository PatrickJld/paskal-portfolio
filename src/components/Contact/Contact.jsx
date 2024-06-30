import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailfix.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">pascal.kapitan@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/igfix.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.instagram.com/">@allekptn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/wafix.png")} alt="wa icon" />
          <a href="https://www.whatsapp.com/">0123456789</a>
        </li>
      </ul>
    </footer>
  );
};