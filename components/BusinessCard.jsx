import React from "react";
import styles from "../styles/layout.module.css";

function BusinessCard({ src }) {
  return (
    <div className={styles.businessCard}>
      <img className={styles.businessCard_img} src={src} alt="" />
      <div className={styles.contactInfo}>
        <h3 className={styles.pageTitle}>(847) 373-6323</h3>
        <h3 className={styles.pageTitle}>mariobajric1@gmail.com</h3>
        <a href="https://github.com/mariobajric1">
          <h3 className={styles.pageTitle}>https://github.com/mariobajric1</h3>
        </a>
        <a href="https://thefloridachannel.org/videos/12-13-19-florida-blockchain-task-force/">
          <h3 className={styles.pageTitle}>
            Talking Bitcoin Education: https://thefloridachannel.org @ 2:12:29
          </h3>
        </a>
      </div>
    </div>
  );
}

export default BusinessCard;
