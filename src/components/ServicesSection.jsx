"use client";

import React, { useEffect, useState } from "react";
import { ImageFrame } from "./ImageFrame";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "UI/UX Design",
    image: "/images/1.png",
    link: "#",
  },
  {
    title: "Web Design",
    image: "/images/1.png",
    link: "#",
  },
  {
    title: "Landing Page",
    image: "/images/1.png",
    link: "#",
  },
  {
    title: "Mobile App",
    image: "/images/1.png",
    link: "#",
  },
  {
    title: "UI/UX Design",
    image: "/images/1.png",
    link: "#",
  },
  {
    title: "Web Design",
    image: "/images/1.png",
    link: "#",
  },
  {
    title: "Landing Page",
    image: "/images/1.png",
    link: "#",
  },
];

const ServicesSection = () => {
  const [width, setWidth] = useState(320);
  const cardsInRow = Math.floor((0.95 * width - 200) / 320);
  const NumberOfPages = Math.ceil(services.length / cardsInRow);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [typeof window]);

  return (
    <section
      className="text-white bg-custom-primary -mx-24 px-24 pt-36 pb-20 rounded-[48px] bg-cover"
      style={{ backgroundImage: "url(/images/services-bg.jpg)" }}
      id="services"
    >
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-[42px] font-semibold flex-1">
          My <span className="text-custom-secondary">Services</span>
        </h2>
        <p className="max-w-[520px] flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim
          omnis voluptatum aliquid enim omnis voluptatum
        </p>
      </div>
      <div className="flex justify-between gap-5">
        {services
          .slice(current * cardsInRow, (current + 1) * cardsInRow)
          .map((service, index) => (
            <ServiceCard
              title={service.title}
              image={service.image}
              link={service.link}
              imageScale={1.5}
              key={index}
            />
          ))}
      </div>
      <div className="flex gap-2 justify-center">
        {NumberOfPages !== Infinity &&
          Array(NumberOfPages)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className={cn(
                  "bg-custom-light rounded-full w-[10px] h-[10px]",
                  index === current
                    ? "w-10 bg-custom-secondary"
                    : "cursor-pointer hover:bg-custom-faint"
                )}
                onClick={() => setCurrent(index)}
              />
            ))}
      </div>
    </section>
  );
};

export default ServicesSection;

const ServiceCard = ({ title, image, link, imageScale }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-transparent w-fit relative mt-5 group mb-20">
      <div className="border-x-2 border-t-2 border-custom-faint bg-custom-faint group-hover:border-custom-secondary bg-opacity-20 backdrop-blur-sm w-full h-[50%] rounded-t-3xl top-0 left-[50%] -translate-x-[50%] -z-[0] absolute" />
      <h3 className="px-6 pt-8 pb-5 text-xl font-semibold z-[1] border-b-[1px] border-custom-faint">
        {title || "Service Title"}
      </h3>
      <div className="relative w-80 h-72 overflow-hidden mt-10">
        <div className="bg-custom-light bg-opacity-30 backdrop-blur-sm absolute w-[81%] h-20 rounded-t-2xl top-0 left-[50%] -translate-x-[50%] z-[1]" />
        <div className="bg-custom-faint absolute w-[90%] h-20 rounded-t-2xl top-4 left-[50%] -translate-x-[50%] z-[2]" />
        <div className="absolute w-full top-8 left-[50%] -translate-x-[50%] z-[3]">
          <ImageFrame
            dim={[320, 250, 105, 105, 30, 60]}
            src={image}
            scale={imageScale}
          />
          <button
            className="bg-custom-dark rounded-full p-8 absolute right-0 bottom-0"
            onClick={() => router.push(link)}
          >
            <ArrowRightIcon className="-rotate-45 scale-150" />
          </button>
        </div>
      </div>
    </div>
  );
};
