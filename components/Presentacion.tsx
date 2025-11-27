'use client'
import { createTimeline } from "animejs";
import { useEffect } from "react";

export default function Presentacion() {
  useEffect(() => {
    const tl = createTimeline({
      defaults: { duration: 1500, ease: "inOutQuad" },
      delay: 500,
    });
    tl.add(".hero", {
      top: "-100px",
      height: "0px",
      display: {
        to: "absolute",
        from: "none",
      },
    }).add(
      ".title",
      {
        top: "31px",
        display: {
          to: "block",
          from: "none",
        },
        fontSize: "1.25rem",
      },
      0
    );
  }, []);
  return (
    <div className="hero absolute z-50 top-0 left-0 h-screen w-screen bg-back flex items-center justify-center">
      <h1 className="title absolute z-50 top-1/2 left-1/2 -translate-1/2 text-[#E7BABE] text-[6rem] font-orbitron font-extrabold w-full text-center">
        PAUL PEREZ
      </h1>
    </div>
  );
}
