import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/layout.module.css";

const ContactPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
        <h2 className={styles.pageTitle}>Contact Me</h2>
      </div>
    </>
  );
};

export default ContactPage;
