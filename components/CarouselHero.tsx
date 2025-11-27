"use client";
import { animate } from "animejs";
import { useEffect } from "react";

export default function CarouselHero() {
  useEffect(() => {
    animate(".carousel", {
      x: "-50%",
      duration: 10000,
      loop: true,
      ease: "linear",
      alternate: true,
    });
  }, []);
//2f2f2f
  return (
    <div className="absolute left-0 bottom-1/12 overflow-hidden h-fit w-screen px-20">
      <div className="carousel flex flex-nowrap font-extrabold text-[#7AF298] mix-blend-exclusion text-[10rem] space-x-20 w-fit h-fit scale-y-150">
        <span>DEVELOPER</span>
        <span>BACKEND</span>
        <span>FRONTEND</span>
        <span>TESTING</span>
        <span>ARQUITECTURE</span>
      </div>
    </div>
  );
}
