"use client";

import React from "react";
import Image from "next/image";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function Portfolios() {
  return (
    <div id="portfolio" className="bg-transparent text-center py-16 px-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-white">
        My <span className="text-blue-400">Portfolios</span>
      </h1>

      {/* Cards Section */}
      <section
        className="flex flex-wrap justify-center gap-8 py-12 px-4"
      >
        {/* Card 1 - SaqlainWebDeveloper */}
        <div className="border border-white dark:border-white flex flex-col items-center w-full sm:w-[20rem] md:w-[24rem] p-4 relative rounded-xl">
          {/* Corner Icons */}
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#08f3df]" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#08f3df]" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#08f3df]" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#08f3df]" />

          {/* Evervault Card with Image */}
          <EvervaultCard
            text={
              <Image
                src="/pro2.png"
                alt="SaqlainWebDeveloper"
                width={250}
                height={250}
                className="object-cover rounded-full"
                style={{ aspectRatio: "1 / 1" }}
              />
            }
          />

          {/* Description */}
          <h2 className="text-white mt-4 text-sm font-light text-center">
            Explore my Coding GitHub profile where I share web development projects
            and code snippets.
          </h2>

          {/* Button */}
          <a
            href="https://github.com/saqlainwebdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <button className="border border-white cursor-pointer text-sm font-light rounded-full text-white px-4 py-1.5 transition-all hover:bg-blue-500 hover:text-white">
              Visit GitHub
            </button>
          </a>
        </div>

        {/* Card 2 - CodingChatRoom */}
        <div className="border border-white dark:border-white flex flex-col items-center w-full sm:w-[20rem] md:w-[24rem] p-4 relative rounded-xl">
          {/* Corner Icons */}
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#08f3df]" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#08f3df]" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#08f3df]" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#08f3df]" />

          {/* Evervault Card with Image */}
          <EvervaultCard
            text={
              <Image
                src="/pro.png"
                alt="Coding Chat Room"
                width={250}
                height={250}
                className="object-cover rounded-full"
                style={{ aspectRatio: "1 / 1" }}
              />
            }
          />

          {/* Description */}
          <h2 className="text-white mt-4 text-sm font-light text-center">
            Check out my Cyber GitHub profile for CyberSecurity,
            Ethical Hacking, and labs.
          </h2>

          {/* Button */}
          <a
            href="https://github.com/CodingChatRoom"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <button className="border border-white cursor-pointer text-sm font-light rounded-full text-white px-4 py-1.5 transition-all hover:bg-blue-500 hover:text-white">
              Visit GitHub
            </button>
          </a>
        </div>
      </section>

      {/* Gradient line */}
      <hr className="w-[60%] sm:w-[25rem] md:w-[35rem] mx-auto my-6 h-0.5 border-0 rounded-full bg-gradient-to-r from-[#fff] via-[#00ff37] to-[#ffffff] animate-gradient mt-12 sm:mt-2" />
    </div>
  );
}
