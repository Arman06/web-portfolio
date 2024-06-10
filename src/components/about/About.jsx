import React from "react";
import styles from "./About.module.css";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.aboutBlock}>
              <div className={styles.aboutTitle}>
                Я Арман.
                <br />
                Студент.
                <br />
                Программист?
                <br />
                Менеджер?
              </div>
              <div className={styles.aboutText}>
                Я люблю программирование? Наверное??
              </div>
            </div>
            <div className={styles.aboutImg} resizeMode={"cover"}>
              <img src="./web-portfolio/ryan.jpeg" alt="" />
            </div>
            <div className={styles.aboutHobby}>
              Учу языки, наверное?
            </div>
            <div className={styles.aboutDescription}>
              <span>
                Я хочу закончить бакалавриат, в этом я уверен.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
