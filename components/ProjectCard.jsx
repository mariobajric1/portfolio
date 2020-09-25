import React from "react";
import styles from "../styles/layout.module.css";
import { Button } from "@material-ui/core";

function ProjectCard({ href, src, title, description, gitLink, inProg }) {
  return (
    <a className={styles.projectCard__a} href={href}>
      <div className={styles.projectCard}>
        <a href={href}>
          <img className={styles.projectCard__img} src={src} alt="" />
        </a>
        <div className={styles.projectCard__info}>
          <a className={styles.projectCard__a} href={href}>
            <h2 className={styles.projectCard__info__h2}>{title}</h2>
          </a>

          <h4 className={styles.projectCard__info__h4}>{description}</h4>
          <a className={styles.projectCard__a} href={gitLink}>
            <Button
              variant="outlined"
              className={styles.projectCard__gitLinkButton}
            >
              {gitLink}
            </Button>
            {inProg ? <h4>In Progress</h4> : <h4>Completed</h4>}
          </a>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
