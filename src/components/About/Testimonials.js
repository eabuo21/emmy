import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Next from "@/shared/Next";
import Prev from "@/shared/Prev";
import Image from "next/image";

export default function Testimonials() {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 2 },
  };

  const testimonials = [
    {
      id: 1,
      image: "https://abuoe.vercel.app/assets/blessing-b7458d7f.jpeg",
      name: "Blessing Evah",
      position: " Scheduler, CoffeyCrown HCS (Toronto ON)",
      text: (
        <p>
          {" "}
          Emmanuel played an integral role in simplifying my experience during
          the Zoho CRM onboarding process. As a scheduler, his unwavering
          patience was evident as he skillfully addressed every question I had.
          His dedication significantly expedited my learning curve, ultimately
          making my work more efficient and streamlined. I express my sincere
          appreciation for his invaluable assistance.{" "}
        </p>
      ),
    },
    {
      id: 2,
      image: "https://abuoe.vercel.app/assets/victor-0a511d52.jpg",
      name: "Otene Victor S",
      position: " Software Dev, Tongston Group (Abuja Ng)",
      text: (
        <p>
          {" "}
          As a software developer at Tongston, I have had the privilege of
          collaborating with Emmanuel from April to July 2023. Emmanuel&apos;s
          steadfast commitment to our projects, collaborative mindset, and
          remarkable technical proficiency have consistently impressed me. His
          dedication to excellence significantly contributed to the success of
          our collaborative endeavors{" "}
        </p>
      ),
    },

    {
      id: 2,
      image: "https://abuoe.vercel.app/assets/paul-22e3dcfb.jpeg",
      name: "Paul Ekunola",
      position: " Software Dev, GoNomad",
      text: (
        <p>
          {" "}
          Emma was an absolute delight to collaborate with, and we eagerly
          anticipate future partnerships. His professionalism and commitment
          make him a developer you can rely on to successfully lead a project
          from inception to completion.
        </p>
      ),
    },
    {
      id: 3,
      image: "https://abuoe.vercel.app/assets/charles-6bfad3e2.png",
      name: "Charles Nwankwo",
      position: "  Product Designer (UI/UX) , Nobelum (Ontario)",
      text: (
        <p>
          {" "}
          Emmanuel is a pleasure to work with, consistently going the extra mile
          to ensure projects are completed on time. His collaborative approach
          and commitment to excellence make him a valuable asset to any team.
          Working with Emmanuel has been a positive and productive experience
        </p>
      ),
    },
    {
      id: 4,
      image: "https://abuoe.vercel.app/assets/eg-d370540b.jpg",
      name: "Emmy Ugwuoti",
      position: "   Product Designer (UI/UX) ,  (Abuja Ng)",
      text: (
        <p>
          {" "}
          Collaborating with Emma has been a truly delightful experience. His
          exceptional skills not only brought my designs to life with
          pixel-perfect precision but also made the entire collaborative process
          feel seamless and effortless. Emma&apos;s commitment to excellence and
          effective communication significantly contributed to the success of
          our projects. I highly value and appreciate the professionalism and
          expertise he brought to our work together.
        </p>
      ),
    },
  ];

  const items = testimonials.map((item) => (
    <div
      key={item.id}
      className="testimonial-card flex flex-col gap-y-5 justify-start items-start p-4 border-neutral border  w-full h-[400px] md:h-[500px] md:w-[400px] lg:h-[400px] lg:w-[550px]   mx-auto hover:border hover:border-lime-800 rounded-lg"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={60}
        height={60}
        className="rounded-full"
      />
      <article className="text-base text-stone-500 font-thin font-sans md:text-xl">
        {item.text}
      </article>
      <h4 className="text-stone-300 text-xl font-thin font-lato  md:text-2xl ">
        {item.name}
      </h4>
      <h5 className="text-stone-500 text-base font-thin font-lato  md:text-xl ">
        {item.position}
      </h5>
    </div>
  ));

  return (
    <div className="relative w-full flex flex-col justify-center items-center gap-y-[30px] h-[fixed] bg-neutral-900 bg-opacity-65 shadow-[40px] rounded-md  md:rounded-xl  mx-auto lg:w-[1200px] md:px-4 md:h-[fixed] p-3 md:p-3 mb-9">
      <h6 className="text-stone-500 font-thin font-lato text-xl md:text-2xl text-center mt-4">
        Testimonials
      </h6>
      <p className="text-xl text-stone-300 font-thin font-lato md:text-5xl text-center">
        What  Colleagues & clients say!
      </p>

      <AliceCarousel
        items={items}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlayInterval={3000}
        animationDuration={1500}
        renderPrevButton={(props) => (
          <Prev {...props} className={`ml-auto  `} />
        )}
        renderNextButton={(props) => (
          <Next {...props} className={`mr-auto  `} />
        )}
      />
    </div>
  );
}
