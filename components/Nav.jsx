import React from "react";
import Link from "next/link";
import styles from "../styles/layout.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <Link href="/">
          <a>
            <h1 className={styles.Mario}>Mario Bajric</h1>
          </a>
        </Link>
        <div className={styles.navRight}>
          <Link href="/Projects">
            <a className={styles.navRight__a}>Projects</a>
          </Link>
          <Link href="/Contact">
            <a className={styles.navRight__a}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
