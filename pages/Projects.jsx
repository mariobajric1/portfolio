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
      <div className={styles.projects__container}>
        <div className={styles.projectCards}>
          <ProjectCard
            href="https://clone-5df57.web.app/"
            src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            title="Google Clone"
            description="React-App powered by Google's Search API. Hosted by Firebase"
            gitLink="https://github.com/mariobajric1/google-clone"
          />

          <ProjectCard
            href="https://amzn-65993.web.app/"
            src="https://morningtick.com/wp-content/uploads/2020/03/Amazon-will-allow-voice-searches-from-now-on.jpg"
            title="Amazon Clone"
            description="E-Commerce Amazon-Styled React-App powered by the Stripe Payments API. Hosted By Firebase"
            gitLink="https://github.com/mariobajric1/amazon-clone"
          />
          <ProjectCard
            src="/benchmark.jpg"
            title="Benchmark West Apartments"
            description="Commercial Real-Estate Website and Benchmark West Mangement  App"
            inProg={true}
          />
        </div>

        <div className={styles.projectCards}>
          <ProjectCard
            src="/chat.jpg"
            title="Chat App"
            description="Chat App powered by a Mongo Database."
            inProg={true}
          />

          <ProjectCard
            src="/eth.jpg"
            title="Scafforld-Eth"
            description="React and Solidity Ethereum Web Wallet with Recovery."
            inProg={true}
          />
          {/* <ProjectCard
            src="https://res.cloudinary.com/simple-things/image/upload/f_auto,q_auto/v1585770120/airbnb_fiw4mc_nnjmpj-1.png"
            title="Airbnb Clone"
            description="React-App With Airbnb Styled Elements"
          />
          <ProjectCard
            src="https://pyxis.nymag.com/v1/imgs/110/4b3/605e7a8354f39b484d8a68a4b26678b026-tiktok.2x.rsocial.w600.jpg"
            title="Tik Tok clone"
            description="React-App powered by Google's Search API"
          /> */}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
