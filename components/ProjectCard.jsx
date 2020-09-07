import React from "react";
import styles from "../styles/layout.module.css";

function ProjectCard({ src, title, description, price }) {
  return (
    <div className={styles.projectCard}>
      <img src={src} alt="" />
      <div className={styles.projectCard__info}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default ProjectCard;
