import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.aboutItems}>
          <p>
            Hello everyone, my name is Pascal Kapitan. I am currently studying Visual Communication Design at Bina Nusantara University and hail from NTT, Kupang. As a passionate artist, I am driven by a strong desire to grow and learn, constantly seeking new opportunities to expand my creative horizons. With a commitment to excellence and an eagerness to explore the depths of visual communication, I am poised to make a significant impact in the world of design.
          </p>
        </div>
      </div>
    </section>
  );
};
