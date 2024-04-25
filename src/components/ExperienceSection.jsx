import { cn } from "@/lib/utils";
import React from "react";

const experienceData = [
  {
    company: "Google, California",
    role: "Web Developer",
    duration: "Sep 2020 - July 2022",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, adipisicing elit. In, adipisicing elit. In, adipisicing elit. ullam.",
  },
  {
    company: "Apple, Cupertino",
    role: "UI/UX Designer",
    duration: "Sep 2018 - July 2020",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, adipisicing elit. In, adipisicing elit. In, adipisicing elit. ullam.",
  },
  {
    company: "Amazon, Seattle",
    role: "Android Developer",
    duration: "Sep 2016 - July 2018",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, adipisicing elit. In, adipisicing elit. In, adipisicing elit. ullam.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      className="mt-36 mb-20 flex flex-col items-center gap-20 scroll-m-36"
      id="experience"
    >
      <h2 className="text-5xl font-semibold text-custom-dark">
        My <span className="text-custom-secondary">Work Experience</span>
      </h2>
      <div className="flex flex-col items-stretch w-full">
        {experienceData.map((experience, index) => (
          <div className="flex gap-10" key={index}>
            <div className="flex-[2]">
              <h3 className="text-3xl font-semibold text-custom-dark mb-2">
                {experience.company}
              </h3>
              <p className="text-custom-faint">{experience.duration}</p>
            </div>
            <div className="flex flex-col items-center flex-[1]">
              <div className="p-1 rounded-full border-2 border-black border-dashed">
                <div
                  className={cn(
                    "w-6 h-6 rounded-full",
                    index % 2 === 0 ? "bg-custom-secondary" : "bg-custom-dark"
                  )}
                />
              </div>
              {index + 1 !== experienceData.length && (
                <div className="border-l-2 w-0 border-black border-dashed flex-1" />
              )}
            </div>
            <div className="flex-[2]">
              <h4 className="text-3xl font-semibold text-custom-dark mb-2">
                {experience.role}
              </h4>
              <p className="text-custom-faint text-sm pb-8">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
