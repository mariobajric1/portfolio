import React from "react";
import Link from "next/link";
import styles from "../styles/layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layout__container}>
        <Nav />
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
};
export default Layout;
