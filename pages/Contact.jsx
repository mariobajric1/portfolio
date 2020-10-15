import React from "react";
import BusinessCard from "../components/BusinessCard";
import ReactPlayer from "react-player"
import styles from '../styles/layout.module.css';

const ContactPage = () => (
  <>
    <div className={styles.contact__container}>
      <BusinessCard src="./me.png" />
      <div className={styles.yt__video}>
        <ReactPlayer
          control
          url="https://www.youtube.com/watch?v=RGY8XUq7oBE&t=411s"
        />
      </div>
    </div>
  </>
);

export default ContactPage;



