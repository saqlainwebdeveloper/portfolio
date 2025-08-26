"use client";

import React from "react";
import Typewriter from "./Typewriter";
import { FaYoutube, FaInstagramSquare } from "react-icons/fa";

export function Hero() {
  return (
    <div
      id="home"
      className="relative z-10 mx-auto text-center px-4 flex flex-col items-center justify-center h-full mt-20 sm:mt-16 md:mt-20"
    >
      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white leading-snug">
        Hi I&apos;m{" "}
        <span className="text-transparent text-stroke2">Saqlain</span>
      </h1>

      {/* Typing animation */}
      <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-4 text-white">
        I am{" "}
        <Typewriter
          texts={[
            "Web Developer",
            "Ethical Hacker",
            "Programmer",
            "Youtuber",
            "Content Creator",
          ]}
          className="text-transparent text-stroke"
        />
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-10 leading-relaxed max-w-md sm:max-w-2xl md:max-w-3xl mx-auto text-center font-medium">
        Hi, I&apos;m{" "}
        <span className="text-blue-400 font-semibold">
          Muhammad Saqlain Shoukat
        </span>{" "}
        — a passionate{" "}
        <span className="text-blue-400 font-semibold">Web Developer</span>,
        tech <span className="text-blue-400 font-semibold">Youtuber</span>,
        skilled <span className="text-blue-400 font-semibold">Programmer</span>,
        and{" "}
        <span className="text-blue-400 font-semibold">Ethical Hacker</span>. I
        strive to combine creativity with technical expertise to deliver
        outstanding results.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
        <a
          href="https://www.instagram.com/codingchatroom/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold text-base sm:text-lg bg-blue-400 rounded-lg shadow-lg hover:bg-blue-500 transition-all">
            Hire me
          </button>
        </a>
        <a
          href="https://www.instagram.com/codingchatroom/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 text-blue-400 font-semibold text-base sm:text-lg border-2 border-blue-400 rounded-lg hover:text-white hover:bg-blue-400 transition-all">
            Let's talk
          </button>
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 sm:gap-6 text-xl sm:text-2xl">
        <a
          href="https://www.youtube.com/@CodingChatRoom"
          target="_blank"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-blue-400 border-2 border-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-colors"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/codingchatroom/"
          target="_blank"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-blue-400 border-2 border-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-colors"
        >
          <FaInstagramSquare />
        </a>
      </div>

      {/* Gradient line */}
      <hr className="w-[80%] sm:w-[25rem] md:w-[35rem] mx-auto my-6 h-0.5 border-0 rounded-full bg-gradient-to-r from-[#fff] via-[#00ff37] to-[#ffffff] animate-gradient mt-12 sm:mt-16" />
    </div>
  );
}
