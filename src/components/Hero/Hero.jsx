import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm OM Lad</h1>
        <p className={styles.description}>
          I'm a Student With Experience In Front End Development and Marketing
          Fundamentals . I am Proficient in React.js Technology. To Learn More
          Pls Contact.
        </p>
        <a href="mailto:omlad837@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/OM3.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
