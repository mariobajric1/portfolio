import Head from "next/head";
import styles from "../styles/layout.module.css";

const ContactPage = () => (
  <>
    <Head>
      <title>Contact Me</title>
    </Head>
    <div>
      <h2 className={styles.pageTitle}>Contact Me</h2>
      <h3 className={styles.pageTitle}>(847) 373-6323</h3>
      <h3 className={styles.pageTitle}>mariobajric1@gmail.com</h3>
      <a href="https://github.com/mariobajric1">
        <h3 className={styles.pageTitle}>https://github.com/mariobajric1</h3>
      </a>
    </div>
  </>
);

export default ContactPage;
