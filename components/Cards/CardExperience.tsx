"use client";
import { ExperienceCard } from "@/types";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronDown, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  experience: ExperienceCard;
  index: number;
}

const RESPONSIVE = {
  desktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const VISIBLE_BULLETS = 3;

export default function CardExperience({ experience, index }: Props) {
  const [expanded, setExpanded] = useState(false);

  const bullets = experience.bullets ?? [];
  const media = experience.media ?? [];
  const hasMoreBullets = bullets.length > VISIBLE_BULLETS;
  const visibleBullets = expanded ? bullets : bullets.slice(0, VISIBLE_BULLETS);

  return (
    <article
      id={`cardexperience-${index}`}
      className="neumorphism-cardexperience sticky top-24 sm:top-28
      w-[92vw] md:w-[80vw] lg:w-[72vw] max-w-5xl
      max-h-[calc(100dvh-7rem)] sm:max-h-[calc(100dvh-8rem)]
      overflow-y-auto overscroll-contain
      bg-card border border-emerald-900 rounded-2xl shadow-xl backdrop-blur-sm
      px-4 py-5 sm:px-8 sm:py-6
      flex flex-col gap-4 sm:gap-6
      transition-shadow duration-300 hover:shadow-2xl
      [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {/* Cabecera */}
      <header className="flex flex-col-reverse sm:flex-row sm:items-center gap-3 sm:gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-2 flex-1 min-w-0">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-orbitron text-xl sm:text-2xl lg:text-3xl font-extrabold text-texto tracking-widest text-center sm:text-left text-balance hover:text-titles transition-colors"
            >
              {experience.company}
              <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </a>
          ) : (
            <h3 className="font-orbitron text-xl sm:text-2xl lg:text-3xl font-extrabold text-texto tracking-widest text-center sm:text-left text-balance">
              {experience.company}
            </h3>
          )}

          <p className="font-orbitron text-sm sm:text-lg text-texto text-center sm:text-left">
            {experience.position}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="border border-gray-200/60 px-2 py-0.5 rounded-xl text-texto text-xs sm:text-sm">
              <b>from: </b>
              {experience.startDate} <b>to: </b>
              {experience.isCurrent ? "present" : experience.endDate}
            </span>
            {experience.location && (
              <span className="text-texto/80 text-xs sm:text-sm">
                {experience.location}
              </span>
            )}
          </div>
        </div>

        {experience.logoUrl && (
          <div className="w-28 h-16 sm:w-44 sm:h-28 shrink-0 mx-auto sm:mx-0">
            <img
              src={experience.logoUrl}
              alt={`logo de ${experience.company}`}
              className="logo object-contain w-full h-full"
              loading="lazy"
            />
          </div>
        )}
      </header>

      {/* Contenido */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
        <div className="flex flex-col items-start gap-3 sm:gap-4 min-w-0">
          <h4 className="text-texto font-bold text-lg sm:text-xl">Actividades</h4>

          <ul className="text-texto w-full space-y-2 text-sm sm:text-base">
            {visibleBullets.map((bullet: string, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaChevronRight className="w-3 h-3 mt-1 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {hasMoreBullets && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="text-texto flex items-center gap-2 text-sm sm:text-base hover:text-titles transition-colors"
            >
              <span>{expanded ? "ver menos" : "ver mas"}</span>
              <FaChevronDown
                className="transition-transform duration-300"
                style={{ rotate: expanded ? "180deg" : "0deg" }}
              />
            </button>
          )}

          {experience.tech && experience.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {experience.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/10 text-texto text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {media.length > 0 && (
          <div className="w-full min-w-0">
            <Carousel
              responsive={RESPONSIVE}
              showDots={false}
              autoPlay
              autoPlaySpeed={3000}
              infinite
              draggable
              ssr
              arrows
            >
              {media.map((item, i) => (
                <div
                  key={i}
                  className="aspect-video w-full rounded-lg overflow-hidden bg-black/30"
                >
                  <img
                    src={item.url}
                    alt={`${experience.company} - captura ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </article>
  );
}
