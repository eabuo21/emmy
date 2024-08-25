import { useEffect } from "react";
import Hero from "@/components/About/Hero";
import Profile from "@/components/About/Profile";
import Testimonials from "@/components/About/Testimonials";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-[fixed] overflow-hidden flex flex-col justify-start items-start gap-y-[100px]">
    <Hero/>
    <Profile/>
    <Testimonials/>
    </div>
  );
};

export default Index;
