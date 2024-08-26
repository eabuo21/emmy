import { useEffect } from "react";
import Hero from "@/components/About/Hero";
import Profile from "@/components/About/Profile";
import Testimonials from "@/components/About/Testimonials";
import Aos from "aos";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-in"
      data-aos-easing="ease-in linear"
      data-aos-duration="1500"
      data-aos-mirror="true"
      data-aos-anchor-placement="top-bottom"
      className=" main w-full h-[fixed] overflow-hidden flex flex-col justify-start items-start gap-y-[100px]"
    >
      <Hero />
      <Profile />
      <Testimonials />
    </div>
  );
};

export default Index;
