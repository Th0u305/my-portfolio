import React from "react";
import { LinkPreview } from "../ui/Card-hover-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

export function ProjectsCard() {
  useState(() => {
    AOS.init({
      easing: "ease-in-out", // default easing for AOS animations
    });
  }, []);
  const projects = [
    {
      id: 1,
      image: "https://i.ibb.co.com/GtSx8kB/flower-Shop.jpg",
      title: "TopicTree",
      description: "Buy your favorite flower with great discount",
      link: "https://forum-website-pi.vercel.app/",
      data: "fade-right",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/997Lccy/gadget.jpg",
      title: "Gadget Heaven",
      description:
        "An online store specializing in the latest and most reliable technology products.",
      link: "https://gadgets-heaven-kohl.vercel.app/",
      data: "fade-down",
    },
    {
      id: 1,
      image: "https://i.ibb.co.com/8XY8wwn/service.jpg",
      title: "TrustWise",
      description: "A Service company that provides various services",
      link: "https://simple-service-three.vercel.app/",
      data: "fade-up",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/6g4JCFj/influencer-Gear.jpg",
      title: "Influencer Gears",
      description:
        "Are you an influencer? . View our website to see if you have the necessary gears",
      link: "https://th0u305.github.io/influencer-gears/",
      data: "fade-up",
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/BgjkPbv/pet.jpg",
      title: "Furry-Friends",
      description:
        "Welcome to Paws Kingdom, your trusted destination for finding the perfect pet! We specialize in offering a variety of healthy, well-cared-for pets, including dogs, cats, birds, reptiles, fish, and small animals. ",
      link: "https://paws-kingdom.vercel.app/",
      data: "fade-right",
    },
    {
      id: 6,
      image: "https://i.ibb.co.com/ZKXngNm/penguin-Fashion-Back.jpg",
      title: "PenguinFashion",
      description:
        "In need of backpack visit our shop to buy premium quality backpacks",
      link: "https://th0u305.github.io/shopping-landing-pages/Option-3-Backpack-Moon/",
      data: "fade-down",
    },
  ];

  return (
    <div className="mt-28 mb-28">
      <h1 className="text-4xl text-center lg:mb-14" data-aos="fade-up" data-aos-delay="300">
        Projects
      </h1>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:gap-5 lg:grid-cols-1">
        {projects.map((item, index) => (
          <div
            className="text-xl md:text-3xl mb-10 space-y-12"
            key={index}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="justify-between items-center hidden lg:flex">
              <LinkPreview
                url={item?.link}
                className="flex flex-row justify-between w-fit"
              >
                <div className="flex flex-row gap-3">
                  <p className="text-gray-400 text-4 text-2xl h-16">
                    0{item?.id}
                  </p>
                  <p className="h-fit my-auto text-4xl">{item?.title}</p>
                </div>
              </LinkPreview>
              <LinkPreview
                className="text-gray-800 text-xl break-words break-all max-w-xl text-ellipsis"
                url={item?.link}
              >
                {item?.description}
              </LinkPreview>
            </div>

            <div className="lg:hidden text-center md:text-start">
              <div className="flex flex-col gap-5">
                <img
                  src={item?.image}
                  className="rounded-3xl mx-auto border-2"
                  alt=""
                />
                <a
                  href={item?.link}
                  className="mb-5 mx-auto h-12 text-4xl bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                  {item?.title}
                </a>
              </div>

              <a className="text-gray-800 text-xl" href={item?.link}>
                {item?.description}
              </a>
            </div>
            {/* <hr className="border border-gray-500" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
