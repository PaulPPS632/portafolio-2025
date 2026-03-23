'use client';

import { useState } from "react";

import { ProjectType, Technology } from "@/types";
import { PROJECTS } from "@/static/projects";
import { TECHNOLOGIES } from "@/static/technologies";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const categories = ["FRONTEND", "BACKEND", "FULLSTACK"];

  // Filtrar proyectos según categoría y tecnología seleccionadas
  const filteredProjects = PROJECTS.filter((proj: ProjectType) => {
    const categoryMatch = selectedCategory
      ? proj.category.includes(selectedCategory as any)
      : true;
    const techMatch = selectedTech
      ? proj.technologies.some((tech) => tech.id === selectedTech)
      : true;
    return categoryMatch && techMatch;
  });

  return (
    <section className="flex flex-col bg-back max-w-7xl mx-auto py-10 px-5 min-h-screen">
      <h2 className="text-2xl sm:text-5xl font-orbitron font-bold text-titles text-center my-5 sm:my-10 mx-auto">
        Proyectos
      </h2>

      {/* Filtros por categoría */}
      <div className="flex flex-wrap justify-center gap-3 mb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setSelectedCategory(selectedCategory === cat ? null : cat)
            }
            className={`rounded-xl px-4 py-1 font-semibold transition-colors ${
              selectedCategory === cat
                ? "bg-white/30 text-white"
                : "bg-white/10 text-titles hover:bg-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtros por tecnología */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.values(TECHNOLOGIES).map((tech: Technology) => (
          <button
            key={tech.id}
            onClick={() =>
              setSelectedTech(selectedTech === tech.id ? null : tech.id)
            }
            className={`rounded-xl px-3 py-1 text-sm transition-colors ${
              selectedTech === tech.id
                ? "bg-white/30 text-white"
                : "bg-white/10 text-titles hover:bg-white/20"
            }`}
          >
            {tech.title}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj: ProjectType) => (
          <div
            key={proj.id}
            className="bg-white/5 rounded-xl p-5 flex flex-col gap-3 hover:bg-white/10 transition-colors"
          >
            <h3 className="font-bold text-lg">{proj.title}</h3>
            <p className="text-sm text-gray-300">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.technologies.map((tech) => (
                <span
                  key={tech.id}
                  className="bg-white/10 text-xs px-2 py-1 rounded-md"
                >
                  {tech.title}
                </span>
              ))}
            </div>

            {(proj.repoUrl || proj.demoUrl) && (
              <div className="flex gap-3 mt-3">
                {proj.repoUrl && (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-300 hover:text-blue-200 underline"
                  >
                    Repositorio
                  </a>
                )}

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-300 hover:text-emerald-200 underline"
                  >
                    Demo
                  </a>
                )}
              </div>
            )}
          </div>
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
