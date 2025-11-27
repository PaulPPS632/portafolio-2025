'use client'
import { animate, splitText, stagger } from "animejs";
import { useEffect } from "react";

export default function CareerTitle() {
  useEffect(() => {
    const { chars } = splitText("p", { chars: { wrap: "clip" } });
    animate(chars, {
      y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 750, ease: "in(3)" }],
      duration: 1000,
      ease: "out(3)",
      delay: stagger(50),
      loop: true,
    });
  }, []);

  return (
    <>
      <p className="careertitle hidden md:block absolute z-0 top-1/5 left-1/12 text-titles  text-3xl md:text-5xl font-orbitron font-medium tracking-widest md:leading-16">
        Ingeniero de
        <br />
        Sistemas
      </p>
      <p className="absolute z-0 top-1/3 right-1/12 text-titles text-3xl font-orbitron font-bold">Ubicado en <br /> Lima</p>
    </>
  );
}
