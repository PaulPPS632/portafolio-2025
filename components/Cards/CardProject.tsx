import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { ProjectType } from "@/types";

interface Props {
  project: ProjectType;
}

export default function CardProject({ project }: Props) {
  return (
    <article className="group relative bg-white/5 rounded-xl overflow-hidden flex flex-col hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-emerald-900">
      {project.imageUrl && (
        <div className="aspect-video w-full overflow-hidden bg-black/30">
          <img
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            src={project.imageUrl}
          />
        </div>
      )}

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-start justify-between gap-2">
          {/* El ::after cubre toda la card: hace clicable la card sin anidar <a> */}
          <Link
            className="font-bold text-lg text-titles text-balance after:absolute after:inset-0 after:content-['']"
            href={`/proyectos/${project.id}`}
          >
            {project.title}
          </Link>
          {project.year && (
            <span className="text-xs text-texto/70 shrink-0 mt-1">
              {project.year}
            </span>
          )}
        </div>

        <p className="text-sm text-gray-300">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech.id}
              className="bg-white/10 text-xs px-2 py-1 rounded-md text-texto"
            >
              {tech.title}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-auto pt-3">
          <span className="flex items-center gap-2 text-sm text-titles group-hover:gap-3 transition-all">
            Ver detalle
            <FaArrowRight className="w-3 h-3" />
          </span>

          {project.repoUrl && (
            <a
              className="relative z-10 text-sm text-blue-300 hover:text-blue-200 underline"
              href={project.repoUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Repositorio
            </a>
          )}

          {project.demoUrl && (
            <a
              className="relative z-10 text-sm text-emerald-300 hover:text-emerald-200 underline"
              href={project.demoUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
