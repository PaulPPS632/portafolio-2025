"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        console.log(window.screenY);
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //${scrolled ? "text-emerald-400" : "text-emerald-950"}
  return (
    <nav className="fixed flex z-40 font-orbitron font-extrabold items-center justify-center py-4 backdrop-blur-sm w-screen">
      <button className="hidden">Projects</button>
      <h1 className={`text-[1.25rem] w-fit text-center mix-blend-multiply transition-colors duration-500 text-titles
        `}
        // style={{color: scrolled ? '#000': '#fff'}}
        >
        PAUL PEREZ
      </h1>
      <button className="hidden">Experiencies</button>
    </nav>
  );
}
