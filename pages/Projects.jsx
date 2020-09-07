import React, { useState, useEffect } from "react";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/layout.module.css";

const ProjectsPage = () => {
  async function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <h2 className={styles.pageTitle}>Projects</h2>
      <div className={styles.projectCards}>
        <ProjectCard
          src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          title="Google Clone"
          description="React-App powered by Google's Search API"
        />
        <ProjectCard
          src="https://res.cloudinary.com/simple-things/image/upload/f_auto,q_auto/v1585770120/airbnb_fiw4mc_nnjmpj-1.png"
          title="Airbnb Clone"
          description="React-App With Airbnb Styled Elements"
        />
        <ProjectCard
          src="https://pyxis.nymag.com/v1/imgs/110/4b3/605e7a8354f39b484d8a68a4b26678b026-tiktok.2x.rsocial.w600.jpg"
          title="Tik Tok clone"
          description="React-App powered by Google's Search API"
        />
      </div>
      <div className={styles.projectCards}>
        <ProjectCard
          src="https://morningtick.com/wp-content/uploads/2020/03/Amazon-will-allow-voice-searches-from-now-on.jpg"
          title="Amazon Clone"
          description="React-App powered by Google's Search API"
        />
        <ProjectCard
          src="https://play-lh.googleusercontent.com/aZrXAunkovhf0630Ykz1A7h2rzFX_dErd6fRiB7fNKU_DkNtetTquEra1bjc3sR2kLs"
          title="Whats App Clone"
          description="React-App powered by Google's Search API"
        />
        <ProjectCard
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo-2019-present.jpg"
          title="Facebook Clone"
          description="React-App powered by Google's Search API"
        />
      </div>
    </>
  );
};

export default ProjectsPage;
