import { Link } from "react-router-dom";
import icon from "../assets/icon-big.png";

import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBarItems}>
      <h1 className={styles.logo} to="/">
        <img src={icon} />
      </h1>
      <ul className={styles.navMenu}>
        <li className={styles.navMenuItem} Link href="/">
          Home
        </li>
        <li className={styles.navMenuItem}>My Projects</li>
        <li className={styles.navMenuItem}>
          <Link to="/contact">Contact Me</Link>
        </li>
        <li className={styles.navMenuResume}>Resume</li>
      </ul>
    </nav>
  );
}
