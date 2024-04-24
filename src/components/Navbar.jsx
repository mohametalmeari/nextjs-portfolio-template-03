"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const links = [
  {
    title: "Home",
    path: "",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Records",
    path: "#records",
  },
  {
    title: "Reviews",
    path: "#reviews",
  },
  {
    title: "Blog",
    path: "#blog",
  },
];

const leftLinks = links.slice(0, links.length / 2);
const rightLinks = links.slice(links.length / 2);
const logoLink = [
  {
    title: (
      <div className="flex justify-center text-white min-w-28 mx-20 text-4xl">
        LOGO
      </div>
    ),
    path: "",
  },
];

const Navbar = () => {
  const [active, setActive] = useState();

  useEffect(() => {
    setActive(window.location.hash);
  }, [typeof window]);

  console.log("path:", active);

  return (
    <nav className="flex justify-between mx-auto p-2 sticky top-10 bg-custom-primary rounded-full max-w-[1200px]">
      {[leftLinks, logoLink, rightLinks].map((side, index) => (
        <ul
          key={index}
          className={cn(
            "flex justify-between",
            index !== 1 && "flex-1 text-white"
          )}
        >
          {side.map((link) => (
            <li
              key={link.path}
              className={cn(
                "flex justify-center items-center",
                index !== 1 && "rounded-full py-5 px-2 flex-1 max-w-32",
                index !== 1 &&
                  active === link.path &&
                  "bg-custom-secondary font-semibold"
              )}
            >
              <Link
                href={link.path}
                onClick={() => {
                  setActive(link.path);
                }}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
};

export default Navbar;
