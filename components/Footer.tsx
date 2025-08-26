"use client";

import React from "react";
import { ArrowUp } from "lucide-react"; // using lucide instead of boxicons

export function Footer() {
  return (
    <footer className="px-6 md:px-16 py-6 flex justify-between gap-3 items-center bg-transparent">
      {/* Copyright Text */}
      <p className="text-sm md:text-base text-white">
        Copyright &copy; {new Date().getFullYear()} By{" "} <span className="text-blue-400">Saqlain</span> | All Rights Reserved
      </p>

      {/* Scroll to Top Icon */}
      <div className="relative w-8 h-8 flex items-center justify-center rounded-md border-2 border-blue-500 text-blue-500 overflow-hidden group cursor-pointer">
        <span className="absolute inset-0 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
        <a
          href="#"
          className="relative z-10 flex items-center justify-center w-full h-full text-blue-500 group-hover:text-black font-bold"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
}
