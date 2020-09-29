import React from "react";
import styles from "../styles/layout.module.css";

const IndexPage = () => (
  <>
    <style jsx>
      {`
        p {
          text-align: center;
          color: #888;
          font-weight: 700 !important;
        }
      `}
    </style>
    <div>
      <p>Have a wonderful day.</p>

      {/*image components */}
      {/* <img className={styles.index__portrait} src="/me.png" alt="" /> */}
    </div>
    <div>{/* Weekly Post Component */}</div>
  </>
);

export default IndexPage;
