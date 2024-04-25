"use client";

import { ArrowRight, QuoteIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-custom-primary min-h-screen relative">
      <div className="flex flex-col items-center mb-20">
        <span className="font-semibold rounded-full px-5 py-1 outline outline-2 mb-3 text-lg relative">
          Hello!
          <Image
            className="absolute top-0 right-0 translate-x-[90%] translate-y-[-70%] rotate-180"
            src={"/objects/obj01.png"}
            width={30}
            height={30}
          />
        </span>
        <span className="text-7xl font-semibold mb-2">
          I'm <span className="text-custom-secondary">Mohamad</span>,
        </span>
        <h1 className="text-7xl font-semibold z-[-99] relative">
          Product Designer
          <Image
            className="absolute bottom-0 left-0 translate-x-[-80%] translate-y-[70%]"
            src={"/objects/obj01.png"}
            width={70}
            height={70}
          />
        </h1>
      </div>
      <div className="self-stretch flex gap-4 justify-between">
        <div className="text-custom-dark">
          <QuoteIcon className="rotate-180 text-8xl mb-6" />
          <p className="w-80 text-md font-semibold">
            Mohamad's Exceptional product design ensure our website's success.
            <br />
            Highly Recommended
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-custom-secondary flex gap-1 mb-5">
            {Array(5)
              .fill()
              .map(() => (
                <StarIcon fill={"#fe853a"} />
              ))}
          </div>
          <p className="text-4xl font-bold">10 Years</p>
          <p className="font-semibold">Experience</p>
        </div>
      </div>
      <div className="flex items-center rounded-full outline outline-orange-200 outline-2 p-2 text-white relative overflow-hidden mb-10 mt-auto">
        <div className="bg-custom-faint bg-opacity-20 absolute top-0 bottom-0 left-0 right-0 z-[-80] backdrop-blur-sm" />
        <div className="py-3 px-8 bg-custom-secondary rounded-full font-semibold text-xl outline outline-orange-200 outline-1">
          <Link href={"#portfolio"} className="flex items-center">
            Portfolio <ArrowRight className="-rotate-45" />
          </Link>
        </div>
        <div className="px-5 py-3 text-xl">
          <Link href={"#portfolio"}>Hire me</Link>
        </div>
      </div>
      <div className="flex absolute bottom-0 z-[-99]">
        <div className="bg-custom-secondary w-96 h-96 rounded-ss-full " />
        <div className="bg-custom-secondary w-96 h-96 rounded-se-full " />
      </div>
      <div className="absolute bottom-0 z-[-98] rounded-b-full overflow-hidden">
        <Image src={"/avatar.png"} width={380} height={500} />
      </div>
    </section>
  );
};

export default HeroSection;
