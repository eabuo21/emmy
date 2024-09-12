import { useEffect } from "react";
import Hero from "@/components/Home/Hero";
import Works from "@/components/Home/Works";

import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Head>
        <title>Engr Ot</title>
        <meta name="description" content="Engr Emmanuel" />
        <meta property="og:title" content="Engr Emmanuel Ot" />
        <meta
          property="og:description"
          content="I am Emmanuel, a passionate Software Developer and Tech Enthusiast dedicated to creating impactful solutions through innovation. Guided by the principles of Create | Build | Innovate, I leverage technology to drive change and deliver meaningful results that contribute to societal progress. "
          className="text-white text-sm font-cur"
        />
        <meta property="og:type" content="Create, Build, Innovate" />
        <meta property="og:url" content="https://fabzcode.vercel.app/" />
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

      <div
        data-aos="fade-in"
        data-aos-easing="ease-in linear"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-bottom"
        className=" main w-full  h-[fixed]   overflow-hidden flex flex-col gap-y-[30px] pb-8  
    "
      >
        <Hero />
        <Works />
      </div>
    </>
  );
};

export default Index;
