import Image from "next/image";
import Link from "next/link";
import React from "react";

const AchievementsSection = () => {
  return (
    <section
      className="mt-36 mb-20 flex items-center scroll-m-36 text-custom-dark"
      id="records"
    >
      <div className="flex-1 flex justify-center relative">
        <div className="bg-custom-secondary w-[400px] h-[450px] rounded-[100px] absolute bottom-0 -z-10" />
        <Image
          src={"/avatar.png"}
          width={400}
          height={400}
          className="rounded-b-[100px]"
        />
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <h2 className="text-5xl font-semibold">
          Why <span className="text-custom-secondary">Hire me</span>?
        </h2>
        <p className="text-custom-faint max-w-96">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate et
          deserunt repudiandae minus dolorem provident optio dignissimos!
        </p>
        <div className="flex gap-20">
          <div className="flex flex-col">
            <span className="text-2xl font-bold mb-2">450+</span>
            <span className="text-custom-faint text-md">Project Completed</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold mb-2">450+</span>
            <span className="text-custom-faint text-md">Project Completed</span>
          </div>
        </div>
        <Link
          href={"#portfolio"}
          className="border border-custom-dark font-bold py-5 px-10 rounded-3xl self-start text-xl hover:bg-custom-light transition-all"
        >
          Hire me
        </Link>
      </div>
    </section>
  );
};

export default AchievementsSection;
