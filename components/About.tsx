"use client";

import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-transparent text-center py-20 px-6 relative z-10"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-5xl font-bold text-white mb-12">
          About <span className="text-blue-400">me!</span>
        </h1>

        {/* Profile Image with Spin */}
       <div className="relative w-48 h-48 flex justify-center items-center mb-8">
  <img
    src="me.jpg"
    alt="Saqlain"
    className="w-full h-full rounded-full border-2 border-blue-400 object-cover"
  />
  <div className="circle-spin"></div>
</div>

        {/* Typing Animation */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 animate-pulse">
          Developer | PenTester
        </h2>

        {/* About Text */}
        <div className="max-w-3xl text-gray-300 font-medium leading-relaxed text-lg md:text-1xl px-4">
          <p>
  I am <span className="text-blue-400 font-semibold">Saqlain</span>, a passionate 
  <span className="text-blue-400"> full-stack web developer </span> with expertise in{" "}
  <span className="text-blue-400">Next.js, Python and MySQL</span>. 
  With a keen eye for design and functionality, I specialize in creating{" "}
  <span className="text-blue-400">responsive, scalable, and user-friendly applications</span> 
  that deliver high performance. Beyond development, I also have 
  a strong interest in <span className="text-blue-400">penetration testing</span> to better understand and 
  secure digital systems. My goal is to keep learning and evolving, mastering both{" "}
  <span className="text-blue-400">modern development and cybersecurity</span> to deliver 
  top-notch digital experiences for users.
</p>


          {/* Contact Button */}
          <div className="mt-10">
            <a
              href="https://www.instagram.com/codingchatroom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer px-5 py-2 text-white font-semibold text-lg bg-blue-400 rounded-lg shadow-lg hover:bg-blue-500 transition-all">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Gradient line */}
      <hr className="w-[80%] sm:w-[25rem] md:w-[35rem] mx-auto my-6 h-0.5 border-0 rounded-full bg-gradient-to-r from-[#fff] via-[#00ff37] to-[#ffffff] animate-gradient mt-12 sm:mt-16" />
    </section>
  );
}
