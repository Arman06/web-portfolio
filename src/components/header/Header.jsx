import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.nameTitle}>Арман</div>
        <div className={styles.linkBlock}>
          <div className={styles.row}>
            <Link to="about" smooth={true} duration={500}>
              <span>Обо мне</span>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <span>Контакты</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
