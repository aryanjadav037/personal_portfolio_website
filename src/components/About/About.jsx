import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I'm a developer with knowledge of web development, including building responsive and optimized websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>AI & ML</h3>
              <p>
                Learning and Creating Artificial intelligence and machine learning Projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>Problem Solving</h3>
              <p>
                I solve various coding problems on different platforms.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
