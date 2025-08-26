"use client";

import React, { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function Typewriter({
  texts,
  className,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseTime = 1000,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[index];

      if (isDeleting) {
        setText(currentText.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
      } else {
        setText(currentText.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      }

      if (!isDeleting && subIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}
