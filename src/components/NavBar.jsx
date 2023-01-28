import { Link, useNavigate } from "react-router-dom";
import icon from "../assets/icon-big.png";
import resume from "../pdf/resume.pdf";

import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navBarItems}>
      <h1 className={styles.logo} onClick={() => navigate("/")}>
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
        <a className={styles.navMenuResume} href={resume} target="_blank">
          Resume
        </a>
      </ul>
    </nav>
  );
}
