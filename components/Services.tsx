"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FaPaintBrush, FaCode, FaLock } from "react-icons/fa";

export function Services() {
  return (
    <section id="services" className="bg-transparent text-center py-1 px-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-white">
        My <span className="text-blue-400">Services</span>
      </h1>

      {/* Services grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {/* Graphics Designer */}
        <CardSpotlight className="p-6 rounded-2xl shadow-lg h-full transition-transform hover:scale-105 relative">
          <div className="flex flex-col items-center relative z-20">
            <FaPaintBrush className="text-5xl text-blue-400 mb-4 transition-colors" />
            <h2 className="text-2xl font-semibold text-white mb-2">
              Graphics Designer
            </h2>
            <p className="text-neutral-300 text-sm md:text-base mb-4">
              I am Saqlain, a graphic designer passionate about creating impactful
              visual designs. From logos to branding, I specialize in delivering
              eye-catching and professional work that communicates effectively.
            </p>
            <a
              href="https://www.instagram.com/codingchatroom/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30"
            >
              <button className="cursor-pointer px-5 py-2 text-sm font-semibold text-white bg-blue-400 rounded-lg shadow-md hover:bg-blue-500 transition-all">
                Contact Me
              </button>
            </a>
          </div>
        </CardSpotlight>

        {/* Web Developer */}
        <CardSpotlight className="p-6 rounded-2xl shadow-lg h-full transition-transform hover:scale-105 relative">
          <div className="flex flex-col items-center relative z-20">
            <FaCode className="text-5xl text-blue-400 mb-4 transition-colors" />
            <h2 className="text-2xl font-semibold text-white mb-2">
              Web Developer
            </h2>
            <p className="text-neutral-300 text-sm md:text-base mb-4">
              I’m Saqlain, a web developer skilled in HTML, CSS, JavaScript, React JS and Next JS. I don't just build responsive, user-friendly websites , I also teach with awesome style.
            </p>
            <a
              href="https://www.instagram.com/codingchatroom/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30"
            >
              <button className="cursor-pointer px-5 py-2 text-sm font-semibold text-white bg-blue-400 rounded-lg shadow-md hover:bg-blue-500 transition-all">
                Contact Me
              </button>
            </a>
          </div>
        </CardSpotlight>

        {/* Ethical Hacker */}
        <CardSpotlight className="p-6 rounded-2xl shadow-lg h-full transition-transform hover:scale-105 relative">
          <div className="flex flex-col items-center relative z-20">
            <FaLock className="text-5xl text-blue-400 mb-4 transition-colors" />
            <h2 className="text-2xl font-semibold text-white mb-2">
              Ethical Hacker
            </h2>
            <p className="text-neutral-300 text-sm md:text-base mb-4">
              I’m Saqlain, an ethical hacker with a focus on security and
              penetration testing. I specialize in Phishing Attack, MITM Attack, SQL Injection, Tools and ensuring systems are secure.
            </p>
            <a
              href="https://www.instagram.com/codingchatroom/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30"
            >
              <button className="cursor-pointer px-5 py-2 text-sm font-semibold text-white bg-blue-400 rounded-lg shadow-md hover:bg-blue-500 transition-all">
                Contact Me
              </button>
            </a>
          </div>
        </CardSpotlight>
      </div>
      {/* Gradient line */}
      <hr className="w-[80%] sm:w-[25rem] md:w-[35rem] mx-auto my-6 h-0.5 border-0 rounded-full bg-gradient-to-r from-[#fff] via-[#00ff37] to-[#ffffff] animate-gradient mt-12 sm:mt-16" />
    </section>
  );
}
