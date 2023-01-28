import styles from "../styles/Homepage.module.css";

export default function ContactMe() {
  return (
    <div>
      <p className={styles.home}>Get In Touch</p>
      <div>
        <button>LinkenIn</button>
      </div>
      <div>
        <button>Email</button>
      </div>
    </div>
  );
}
