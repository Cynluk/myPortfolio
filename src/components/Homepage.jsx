import styles from "../styles/Homepage.module.css";
import icon from "../assets/c.png";

export default function Homepage() {
  return (
    <div className={styles.home}>
      <p className={styles.hello}>Hello,</p>
      <p className={styles.name}>
        I'm <img src={icon} className={styles.c} />
        ynthia,
      </p>
      <p className={styles.dev}>a web developer.</p>
    </div>
  );
}
