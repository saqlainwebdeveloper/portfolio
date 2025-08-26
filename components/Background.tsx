import { cn } from "@/lib/utils";
import React from "react";

interface DotBackgroundProps {
  children?: React.ReactNode;
}

export function DotBackgroundDemo({ children }: DotBackgroundProps) {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden overflow-y-auto">
      {/* Dots Background */}
      <div
        className={cn(
          "fixed inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#1ef_0.5px,transparent_0.5px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Page Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
