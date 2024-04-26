"use client";

import { cn } from "@/lib/utils";
import {
  MailIcon,
  MedalIcon,
  ShieldCheckIcon,
  SparkleIcon,
  StarIcon,
} from "lucide-react";
import React, { Fragment, useState } from "react";

const categories = [
  "UI/UX Design",
  "App Design",
  "Dashboard",
  "Wireframe",
  "User Research",
];

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSend = async (e) => {
    setSent(false);
    setError(false);

    e.preventDefault();
    const data = {
      email: e.target.email.value,
      message: "I have a project idea! Please get in touch with me.",
    };

    const JSONData = JSON.stringify(data);
    const endpoint = "api/send";

    const options = {
      method: "POST",
      body: JSONData,
    };

    const res = await fetch(endpoint, options);

    if (res.status === 200) {
      setSent(true);
    } else {
      setError(true);
    }
  };

  return (
    <section
      className="text-custom-dark mt-20 flex flex-col items-center scroll-m-52"
      id="contact"
    >
      <h2 className="text-5xl font-bold text-center leading-[64px] mb-5">
        Have an Awesome Project <br />
        Idea? <span className="text-custom-secondary">Let's Discuss</span>
      </h2>
      <form
        onSubmit={handleSend}
        className="w-full flex items-center border rounded-full has-[:focus]:outline outline-2 outline-custom-secondary/50 max-w-[700px]"
      >
        <MailIcon
          className="text-white bg-custom-secondary/40 rounded-full p-3 m-3"
          width={60}
          height={50}
          fill="rgb(254,133,58)"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          className="outline-none h-[50px] flex-1"
          required
        />
        <button
          className="bg-custom-secondary rounded-full text-white h-[50px] px-8 m-3"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="w-full flex justify-between max-w-[700px] px-5 text-xs font-semibold mt-3">
        <div className="flex items-center">
          <StarIcon width={30} className="text-white" fill="black" /> 4.9/5
          Average Ratings
        </div>
        <div className="flex items-center">
          <MedalIcon width={30} className="text-white" fill="black" /> 25+
          Winning Awards
        </div>
        <div className="flex items-center">
          <ShieldCheckIcon width={30} className="text-white" fill="black" />{" "}
          Certified Product Developer
        </div>
      </div>
      <div>
        {sent && (
          <p className="text-custom-secondary text-center mt-3">
            Email received! I'll get in touch with you soon.
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center mt-3">
            Something went wrong! Please try again.
          </p>
        )}
      </div>
      <div className="bg-custom-secondary min-h-32 self-stretch -mx-24 mt-20 rounded-tl-3xl rounded-br-3xl overflow-hidden relative">
        <div className="bg-white text-custom-secondary flex items-center justify-center text-4xl font-semibold p-2 gap-3 -rotate-2 absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-fit">
          {Array(2)
            .fill()
            .map((_, index) => (
              <Fragment key={index}>
                {categories.map((category) => (
                  <Fragment key={category}>
                    <SparkleIcon
                      fill="rgb(254 133 58)"
                      width={30}
                      height={30}
                    />
                    <span className="text-custom-primary text-nowrap whitespace-nowrap">
                      {category}
                    </span>
                  </Fragment>
                ))}
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
