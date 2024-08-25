import { useEffect } from "react";
import Contact from "@/components/Contact/Contact";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-[fixed]  flex flex-col gap-y-[100px] justify-center items-center  overflow-hidden ">
    
      <Contact />
    </div>
  );
};

export default Index;
