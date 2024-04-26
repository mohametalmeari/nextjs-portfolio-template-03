"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const projectsCategories = [
  "All",
  "Web Design",
  "Mobile App",
  "UI/UX Design",
  "Landing Page",
];

const projectsData = [
  {
    name: "Lirante 1",
    title: "Food Delivery Solution",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    link: "#",
    tag: "Web Design",
  },
  {
    name: "Lirante 2",
    title: "Food Delivery Solution",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    link: "#",
    tag: "Mobile App",
  },
  {
    name: "Lirante 3",
    title: "Food Delivery Solution",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    link: "#",
    tag: "UI/UX Design",
  },
  {
    name: "Lirante 2",
    title: "Food Delivery Solution",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    link: "#",
    tag: "Mobile App",
  },
  {
    name: "Lirante 3",
    title: "Food Delivery Solution",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    link: "#",
    tag: "Landing Page",
  },
];

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(current * 2);
  const [filter, setFilter] = useState(projectsCategories[0]);

  const filteredProjects = projectsData.filter(
    (project) => project.tag === filter || filter === projectsCategories[0]
  );

  return (
    <section
      id="portfolio"
      className="text-custom-dark mt-20 mb-20 scroll-m-40"
    >
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-semibold text-5xl leading-[64px]">
          Let's have a look at <br />
          my <span className="text-custom-secondary">Portfolio</span>
        </h2>
        <button
          className={cn(
            "bg-custom-light text-sm font-semibold rounded-full px-6 py-3",
            filter === projectsCategories[0] && "bg-custom-secondary text-white"
          )}
          onClick={() => setFilter(projectsCategories[0])}
        >
          See All
        </button>
      </div>
      <div className="flex gap-5 items-center justify-between">
        {filteredProjects
          .slice(current * 2, current * 2 + 2)
          .map((project, index) => (
            <div
              className="min-w-[200px] max-w-[48%] h-[360px] flex-1"
              key={index}
              onClick={() => setSelected(current * 2 + index)}
            >
              <div
                className={cn(
                  "h-full overflow-hidden rounded-2xl relative z-0 p-5 flex justify-between",
                  selected === current * 2 + index &&
                    "ring ring-custom-secondary"
                )}
              >
                <div className="w-full h-full bg-gradient-to-tr from-black/70 from-[10%] to-[50%] to-transparent z-0 top-0 bottom-0 left-0 right-0 absolute" />
                <Image
                  src={project.image}
                  width={500}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full absolute right-0 top-0 -z-10"
                  alt="Project Image"
                />
                <h3 className="text-white z-10 self-end text-5xl font-bold">
                  {project.name}
                </h3>
                <Link
                  href={project.link}
                  className="self-start rounded-full p-4 border border-custom-secondary"
                >
                  <ArrowRightIcon className="text-custom-secondary scale-[1.4]" />
                </Link>
              </div>
            </div>
          ))}
      </div>

      <div className="flex gap-2 justify-center mt-10">
        {Array(Math.ceil(filteredProjects.length / 2))
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-3 h-3 rounded-full bg-custom-faint cursor-pointer hover:bg-custom-secondary",
                current === index && "bg-custom-secondary w-10"
              )}
              onClick={() => setCurrent(index)}
            />
          ))}
      </div>

      <div className="flex gap-3 mt-10 justify-center">
        {projectsCategories.slice(1).map((category, index) => (
          <button
            key={index}
            className={cn(
              "bg-custom-light text-sm font-semibold rounded-full px-6 py-3",
              filter === category && "bg-custom-secondary text-white"
            )}
            onClick={() => {
              setFilter(category);
              setCurrent(0);
              setSelected(0);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center mt-10">
        <div className="flex items-center justify-center gap-5 pb-5">
          <h4 className="text-4xl font-bold">
            {filteredProjects[selected].name} -{" "}
            {filteredProjects[selected].title}
          </h4>
          <Link
            href={filteredProjects[selected].link}
            className="self-start rounded-full p-3 border bg-custom-secondary"
          >
            <ArrowRightIcon className="text-white scale-[1.2] -rotate-45" />
          </Link>
        </div>
        <p className="max-w-[600px] text-center text-lg">
          {filteredProjects[selected].description}
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
