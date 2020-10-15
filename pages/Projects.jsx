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
            href="https://whatsapp-clone-da4c9.web.app/"
            src="/chat.jpg"
            title="Chat App"
            description="Chat App powered by an Express Backend and a Mongo Database. Hosted By Firebase"
            gitLink="https://github.com/mariobajric1/chat-app"
          />

          <ProjectCard
            src="/eth.jpg"
            title="Scaffold-Eth Build"
            description="React and Solidity Ethereum Web Wallet & Recovery."
            inProg={true}
          />
           <ProjectCard
            href="https://userauth-two.vercel.app/"
            src="/auth.png"
            title="User Auth Template"
            description="React-App with Login Authorization and Post Feed. Express, MongoDB, password encryption with Bcrypt, and an email verification with SendGrid."
            gitLink="https://github.com/mariobajric1/userAuth"
            />
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
