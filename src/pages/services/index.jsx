import { useEffect } from "react";
import Quality from "@/components/Services/Quality";
import Pricing from "@/components/Services/Pricing";
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
      className="w main -full h-[fixed] flex flex-col gap-y-[100px] justify-start items-start  overflow-hidden "
    >
      <Quality />
      <Pricing />
    </div>
  );
};

export default Index;
