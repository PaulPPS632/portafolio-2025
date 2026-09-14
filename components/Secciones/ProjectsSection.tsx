"use client";

import { useMemo, useState } from "react";

import { ProjectType, Technology } from "@/types";
import { PROJECTS } from "@/static/projects";
import { TECHNOLOGIES } from "@/static/technologies";
import CardProject from "../Cards/CardProject";

const CATEGORIES = ["FRONTEND", "BACKEND", "FULLSTACK", "TOOL"] as const;

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Solo tecnologías que realmente se usan en algún proyecto
  const usedTechnologies = useMemo(() => {
    const ids = new Set(
      PROJECTS.flatMap((proj) => proj.technologies.map((tech) => tech.id))
    );

    return Object.values(TECHNOLOGIES).filter((tech: Technology) =>
      ids.has(tech.id)
    );
  }, []);

  // Filtrar proyectos según categoría y tecnología seleccionadas
  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter((proj: ProjectType) => {
        const categoryMatch = selectedCategory
          ? proj.category.includes(selectedCategory as any)
          : true;
        const techMatch = selectedTech
          ? proj.technologies.some((tech) => tech.id === selectedTech)
          : true;

        return categoryMatch && techMatch;
      }),
    [selectedCategory, selectedTech]
  );

  return (
    <section
      className="flex flex-col bg-back max-w-7xl mx-auto py-10 px-4 sm:px-6 min-h-screen"
      id="proyectos"
    >
      <h2 className="text-2xl sm:text-5xl font-orbitron font-bold text-titles text-center my-5 sm:my-10 mx-auto">
        Proyectos
      </h2>

      {/* Filtros por categoría */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`rounded-xl px-3 sm:px-4 py-1 text-sm sm:text-base font-semibold transition-colors ${
              selectedCategory === cat
                ? "bg-white/30 text-white"
                : "bg-white/10 text-titles hover:bg-white/20"
            }`}
            onClick={() =>
              setSelectedCategory(selectedCategory === cat ? null : cat)
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtros por tecnología */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
        {usedTechnologies.map((tech: Technology) => (
          <button
            key={tech.id}
            className={`rounded-xl px-3 py-1 text-xs sm:text-sm transition-colors ${
              selectedTech === tech.id
                ? "bg-white/30 text-white"
                : "bg-white/10 text-titles hover:bg-white/20"
            }`}
            onClick={() =>
              setSelectedTech(selectedTech === tech.id ? null : tech.id)
            }
          >
            {tech.title}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {filteredProjects.map((proj: ProjectType) => (
          <CardProject key={proj.id} project={proj} />
        ))}

        {filteredProjects.length === 0 && (
          <p className="col-span-full text-center text-gray-400 mt-10">
            No hay proyectos que coincidan con este filtro.
          </p>
        )}
      </div>
    </section>
  );
}
