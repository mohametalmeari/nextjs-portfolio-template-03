"use client";

import { cn } from "@/lib/utils";
import { QuoteIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const testimonialsData = [
  {
    name: "Alex Ryder",
    image: "/avatar.png",
    review:
      "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Veniam nobfdafjutis voluptates commodi excepturi ad iure, perferendis, pariatur fugit accusamus atque quidem, soluta error.",
    rating: 5,
  },
  {
    name: "Alex Ryder",
    image: "/avatar.png",
    review:
      "Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Veniam nobfdafjutis voluptates commodi excepturi ad iure, perferendis, pariatur fugit accusamus atque quidem, soluta error.",
    rating: 5,
  },
  {
    name: "Alex Ryder",
    image: "/avatar.png",
    review:
      "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Veniam nobfdafjutis voluptates commodi excepturi ad iure, perferendis, pariatur fugit accusamus atque quidem, soluta error.",
    rating: 5,
  },
  {
    name: "Alex Ryder",
    image: "/avatar.png",
    review:
      "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Veniam nobfdafjutis voluptates commodi excepturi ad iure, perferendis, pariatur fugit accusamus atque quidem, soluta error.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const displayTestimonials = [
    current !== 0
      ? testimonialsData[current - 1]
      : testimonialsData[testimonialsData.length - 1],
    testimonialsData[current],
    current < testimonialsData.length - 1
      ? testimonialsData[current + 1]
      : testimonialsData[0],
  ];

  return (
    <section
      className="text-white flex flex-col items-center -mx-24 py-36 rounded-[48px] bg-cover z-0 relative overflow-hidden scroll-m-0"
      style={{ backgroundImage: "url(/images/testimonials-bg.webp)" }}
      id="reviews"
    >
      <div className="-z-10 absolute top-0 left-0 w-full h-full bg-custom-primary/70" />
      <h2 className="text-4xl text-center font-semibold leading-[52px] mb-3">
        Testimonials That <br />
        Speak to <span className="text-custom-secondary">My Results</span>
      </h2>
      <p className="text-center w-[600px] pb-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        nobfdafjutis voluptates commodi excepturi ad iure, perferendis, pariatur
        fugit accusamus atque quidem, soluta error.
      </p>
      <div className="flex justify-center items-stretch gap-5">
        {/* {current !== 0 ? (
          <TestimonialCard
            name={testimonialsData[current - 1].name}
            image={testimonialsData[current - 1].image}
            review={testimonialsData[current - 1].review}
            rating={testimonialsData[current - 1].rating}
          />
        ) : (
          <TestimonialCard
            name={testimonialsData[testimonialsData.length - 1].name}
            image={testimonialsData[testimonialsData.length - 1].image}
            review={testimonialsData[testimonialsData.length - 1].review}
            rating={testimonialsData[testimonialsData.length - 1].rating}
          />
        )}
        <TestimonialCard
          name={testimonialsData[current].name}
          image={testimonialsData[current].image}
          review={testimonialsData[current].review}
          rating={testimonialsData[current].rating}
        />
        {current < testimonialsData.length - 1 ? (
          <TestimonialCard
            name={testimonialsData[current + 1].name}
            image={testimonialsData[current + 1].image}
            review={testimonialsData[current + 1].review}
            rating={testimonialsData[current + 1].rating}
          />
        ) : (
          <TestimonialCard
            name={testimonialsData[0].name}
            image={testimonialsData[0].image}
            review={testimonialsData[0].review}
            rating={testimonialsData[0].rating}
          />
        )} */}

        {displayTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            image={testimonial.image}
            review={testimonial.review}
            rating={testimonial.rating}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-10">
        {Array(testimonialsData.length)
          .fill()
          .map((_, index) => (
            <div
              className={cn(
                "w-3 h-3 bg-custom-faint rounded-full cursor-pointer",
                current === index
                  ? "w-10 bg-custom-secondary"
                  : "hover:bg-custom-light"
              )}
              onClick={() => setCurrent(index)}
            />
          ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

const TestimonialCard = ({ name, image, review, rating }) => {
  return (
    <div className="w-[700px] rounded-3xl z-0 relative overflow-hidden p-5">
      <div className="bg-custom-faint/20 absolute top-0 bottom-0 left-0 right-0 z-[-10] backdrop-blur-sm" />
      <QuoteIcon className="absolute right-12 top-12 text-custom-faint/30 scale-[3]" />
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={image}
          width={50}
          height={50}
          alt="Profile"
          className="rounded-full aspect-square object-cover object-top bg-blue-600/50"
        />
        <div className="flex flex-col">
          <span>{name}</span>
          <span className="font-thin">CEO, NextY</span>
        </div>
      </div>
      <div className="flex gap-1 mb-2 items-center">
        {Array(5)
          .fill()
          .map((_, index) => (
            <StarIcon
              fill={rating > index ? "#fe853a" : "rgb(242,244,247)"}
              key={index}
              className={
                rating > index ? "text-custom-secondary" : "text-custom-light"
              }
            />
          ))}
        <span className="text-white ml-2 text-xl font-semibold">
          {Number(rating).toFixed(1)}
        </span>
      </div>
      <p>{review}</p>
    </div>
  );
};
