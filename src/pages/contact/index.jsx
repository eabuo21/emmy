import { useEffect } from "react";
import Contact from "@/components/Contact/Contact";
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
     className=" main w-full h-[fixed]  flex flex-col gap-y-[100px] justify-center items-center  overflow-hidden ">
    
      <Contact />
    </div>
  );
};

export default Index;
