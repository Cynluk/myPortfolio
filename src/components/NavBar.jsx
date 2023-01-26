import { useNavigate } from "react-router-dom";

import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className={styles.navBarItems}>
      <h1 className={styles.logo}>icon</h1>
      <ul className={styles.navMenu}>
        <li className={styles.navMenuItem}>Home</li>
        <li className={styles.navMenuItem}>My Projects</li>
        <li className={styles.navMenuItem}>Resume</li>
      </ul>
    </nav>
  );
}
