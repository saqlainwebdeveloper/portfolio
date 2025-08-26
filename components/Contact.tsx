"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";
import {
  IconMapPin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";
import { FaYoutube, FaInstagramSquare } from "react-icons/fa";


export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // auto reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 2000);
  

    emailjs
      .send(
        "service_d0dhc18",
        "template_egynged",
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        "QOmFTh5S3nYtd8RxU"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong: " + error.text);
        }
      );
  };

  return (
    <div className="bg-transparent text-center px-6">
    <section className="contact flex flex-col md:flex-row items-center justify-between gap-10 py-1 px-6 md:px-16 bg-transparent">
      {/* Left Side - Address + Socials */}
      <div className="left-section-details w-full md:w-1/2">
        {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-white pb-3">
        Get in <span className="text-blue-400">Touch</span>
      </h1>

        <div className="address-contact space-y-8">
          <div className="flex items-center gap-3 text-lg text-white dark:text-neutral-300">
            <IconMapPin size={26} />
            <p>Saqlain, Pakistan, Layyah</p>
          </div>
          <div className="flex items-center gap-3 text-lg text-white dark:text-neutral-300">
            <IconPhone size={26} />
            <p>+92 306 1825684</p>
          </div>
          <div className="flex items-center gap-3 text-lg text-white dark:text-neutral-300">
            <IconMail size={26} />
            <p>saqlainshoukat500@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">
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
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div id="contact" className="contact-form w-full md:w-1/2 text-center">
        {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-white">
        Contact <span className="text-blue-400">Me</span>
      </h1>

        <form className="my-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <LabelInputContainer>
              <Label className="text-white" htmlFor="name">Your Name</Label>
              <Input className="bg-transparent text-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="name"
                name="name"
                placeholder="John Doe"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label className="text-white" htmlFor="email">Email</Label>
              <Input className="bg-transparent text-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                name="email"
                placeholder="johndoe@email.com"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <LabelInputContainer>
              <Label className="text-white" htmlFor="phone">Phone</Label>
              <Input className="bg-transparent text-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="phone"
                name="phone"
                placeholder="+92 ..."
                type="text"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label className="text-white" htmlFor="subject">Subject</Label>
              <Input className="bg-transparent text-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                type="text"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-6">
            <Label className="text-white" htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent text-white dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            />
          </LabelInputContainer>

          <button
        className="cursor-pointer group/btn relative block h-11 w-full rounded-md bg-gradient-to-br from-black to-neutral-700 font-medium text-white shadow-lg dark:from-zinc-900 dark:to-zinc-900"
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Sending..."
          : success
          ? "✅ Message Sent!"
          : "Send Message →"}
      </button>

      {/* Success message if you want separate (instead of inside button) */}
      {/* {success && (
        <p className="mt-2 text-green-500 text-center">
          ✅ Message sent successfully!
        </p>
      )} */}
        </form>
      </div>
    </section>
    {/* Gradient line */}
      <hr className="w-[60%] sm:w-[25rem] md:w-[35rem] mx-auto my-6 h-0.5 border-0 rounded-full bg-gradient-to-r from-[#fff] via-[#00ff37] to-[#ffffff] animate-gradient mt-12 sm:mt-2" />
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
