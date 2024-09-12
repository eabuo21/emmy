import React from "react";
import Head from "next/head";
import "./global.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav1 from "@/components/Nav/Nav1";
import Nav2 from "@/components/Nav/Nav2";
import Talk from "@/components/Home/Talk";
import Foot from "@/components/Nav/Foot";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Emmanuel Ot</title>
        {/* add the favicon image */} 
        <link rel="icon" href="/assets/images/dev.png" imageSizes="20px" />
        <meta name="description" content="Engr Emmanuel" />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:description" content="Engr Emmanuel" />
        <meta property="og:type" content="Create, Build, Innovate" />
        <meta property="og:url" content="https://fabzcode.vercel.app" />
        <meta property="og:image" content="/assets/images/dev.png" />
        <meta property="twitter:card" content="Software Developer" />
        <meta property="twitter:title" content="Portfolio" />
        <meta
          property="twitter:description"
          content="Emmanuel Abuo, Software Developer"
        />
        <meta property="twitter:image" content="/assets/images/dev.png" />
        <meta
          name="keywords"
          content="portfolio, design, development, freelance, website, seo, developers, developer, frontend, software   "
        />
      </Head>
      <div>
        <Nav1 />
        <Nav2 />
        <Component {...pageProps} />
        <Talk />
        <Foot />
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;
