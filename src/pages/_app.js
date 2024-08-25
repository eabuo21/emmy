import React from 'react';
import Head from 'next/head';
import "./global.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav1 from '@/components/Nav/Nav1';
import Nav2 from '@/components/Nav/Nav2';
import Talk from '@/components/Home/Talk';
import Foot from '@/components/Nav/Foot';


config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My App</title> 
      </Head>
      <div>
      <Nav1/>
      <Nav2/>
        <Component {...pageProps} />
        <Talk/>
        <Foot/>
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;
