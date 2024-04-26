"use client";

import React, { useState } from "react";
import { ImageFrame } from "./ImageFrame";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const blogData = [
  {
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    image: "/images/2.png",
    category: "App Design",
    name: "Jack Marcos",
    date: "10 Nov, 2023",
    link: "#",
  },
  {
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    image: "/images/2.png",
    category: "App Design",
    name: "Jack Marcos",
    date: "10 Nov, 2023",
    link: "#",
  },
  {
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    image: "/images/2.png",
    category: "App Design",
    name: "Jack Marcos",
    date: "10 Nov, 2023",
    link: "#",
  },
  {
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    image: "/images/2.png",
    category: "App Design",
    name: "Jack Marcos",
    date: "10 Nov, 2023",
    link: "#",
  },
];

const BlogSection = () => {
  const [showAll, setShowAll] = useState(false);
  const showedBlogs = showAll ? blogData : blogData.slice(0, 3);
  return (
    <section className="text-custom-dark mt-20" id="blog">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">
          From my <br />
          blog post
        </h2>
        {blogData.length > 3 && (
          <button
            className="bg-custom-secondary text-white text-sm font-semibold rounded-full px-6 py-3"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See All"}
          </button>
        )}
      </div>
      <div className="flex flex-wrap justify-between gap-y-20 gap-x-5">
        {showedBlogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

const BlogCard = ({ title, image, category, name, date, link }) => {
  const router = useRouter();
  return (
    <div className="w-[360px]">
      <div className="relative mb-6">
        <ImageFrame dim={[360, 360, 105, 105, 30, 60]} src={image} scale={2} />
        <button
          className="bg-custom-dark rounded-full p-8 absolute right-0 bottom-0"
          onClick={() => router.push(link)}
        >
          <ArrowRightIcon className="-rotate-45 scale-150 text-white" />
        </button>
      </div>
      <div className="rounded-full bg-custom-light w-fit py-3 px-5 font-semibold mb-6">
        {category}
      </div>

      <ul className="flex list-inside text-xl mb-4">
        <li className="flex-1 list-disc blog--list-disc">{name}</li>
        <li className="flex-1 list-disc blog--list-disc">{date}</li>
      </ul>
      <h3 className="text-[26px] font-[500]">{title}</h3>
    </div>
  );
};
