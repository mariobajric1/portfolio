import Head from "next/head";
import styles from "../styles/layout.module.css";
import BusinessCard from "../components/BusinessCard";

const ContactPage = () => (
  <>
    <Head>
      <title>Contact Me</title>
    </Head>
    <div>
      <BusinessCard src="./me.png" />
      {/* src="blob:https://thefloridachannel.org/eef2fe22-59e3-490d-bbe2-f45442513cfe" */}
    </div>
  </>
);

export default ContactPage;
