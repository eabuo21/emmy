import { useEffect } from "react";
import Quality from "@/components/Services/Quality";
import Pricing from "@/components/Services/Pricing";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-[100px] justify-start items-start  overflow-hidden ">
      <Quality />
      <Pricing/>

    </div>
  );
};

export default Index;
