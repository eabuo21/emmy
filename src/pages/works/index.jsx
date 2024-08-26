import { useEffect } from "react";
import Work from "@/components/Home/Works";
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
      className=" main flex flex-col gap-y-[100px] justify-center items-center overflow-hidden w-full  h-[fixed]"
    >
      <div className=" mt-[4rem]  w-full ">
        <Work />
      </div>
    </div>
  );
};

export default Index;
