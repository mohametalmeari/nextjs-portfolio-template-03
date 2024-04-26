"use client";

import {
  ArrowRightIcon,
  FacebookIcon,
  LinkedinIcon,
  SendHorizontalIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Achievements",
    link: "#records",
  },
  {
    title: "Reviews",
    link: "#reviews",
  },
];

const socialMediaLinks = [
  {
    link: "https://www.facebook.com",
    icon: <FacebookIcon size={24} className="text-transparent" fill="white" />,
  },
  {
    link: "https://www.twitter.com",
    icon: <TwitterIcon size={24} className="text-transparent" fill="white" />,
  },
  {
    link: "https://www.linkedin.com",
    icon: <LinkedinIcon size={24} className="text-transparent" fill="white" />,
  },
];

const Footer = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const handleSend = async (e) => {
    setSent(false);
    setError(false);

    e.preventDefault();
    const data = {
      email: e.target.email.value,
      message: "Please send me the latest information",
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
    <footer className="text-white bg-custom-primary/90 rounded-t-3xl p-20">
      <div className="pb-20 flex justify-between">
        <h2 className="text-5xl font-bold">Let's Connect There</h2>
        <Link
          href={"#contact"}
          className="bg-custom-secondary gap-1 py-3 px-8 rounded-full text-xl font-semibold flex items-center"
        >
          Hire me
          <ArrowRightIcon className="-rotate-45" width={30} height={30} />
        </Link>
      </div>
      <div className="border-y py-10 border-custom-faint flex gap-5">
        <div className="max-w-[600px] flex flex-col gap-5 justify-center">
          <div className="text-2xl font-bold mb-5">LOGO</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus fuga
            quo repudiandae unde cupiditate enim dicta facilis, temporibus nemo.
            Minima beatae ea hic possimus consequuntur blanditiis error quidem
            unde cum.
          </p>
          <div className="flex gap-1">
            {socialMediaLinks.map((link) => (
              <Link href={link.link} target="_blank">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-grow-[1]">
          <h4 className="text-custom-secondary font-bold">Navigation</h4>
          {navLinks.map((link) => (
            <Link
              href={link.link}
              key={link.link}
              className="text-sm hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-5 flex-grow-[1]">
          <h4 className="text-custom-secondary font-bold">Contact</h4>
          <span className="text-sm">+1 123 456 7890</span>
          <span className="text-sm">name@example.com</span>
          <span className="text-sm">example.com</span>
        </div>
        <div className="flex flex-col gap-5 w-80">
          <h4 className="text-custom-secondary font-bold">
            Get the latest information
          </h4>
          <form
            onSubmit={handleSend}
            className="flex h-12 has-[:focus]:ring-2 w-fit rounded-xl"
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="rounded-l-xl p-3 outline-none text-custom-dark"
              required
            />
            <button
              className="bg-custom-secondary rounded-r-xl p-3"
              type="submit"
            >
              <SendHorizontalIcon className="text-white" />
            </button>
          </form>
          {sent && !error && (
            <span className="text-sm text-green-400">Subscribed</span>
          )}
          {error && (
            <span className="text-sm text-red-400">Failed to subscribe</span>
          )}
        </div>
      </div>
      <div className="pt-10 flex justify-between flex-grow-[1]">
        <span className="text-sm">
          Copyright &copy; 2023 Mohamad. All Rights Reserved
        </span>
        <div className="flex gap-2 items-center text-sm">
          <Link href="/user-terms-and-conditions">User Terms & conditions</Link>
          |<Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
