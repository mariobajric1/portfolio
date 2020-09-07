import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Mario Bajric's Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
