import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

import { PROJECTS } from "@/static/projects";
import { ProjectType } from "@/types";
import CardProject from "@/components/Cards/CardProject";

interface Props {
  params: Promise<{ id: string }>;
}

function getProject(id: string): ProjectType | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.imageUrl ? [project.imageUrl] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  // Proyectos relacionados: comparten categoría o alguna tecnología
  const related = PROJECTS.filter((item) => {
    if (item.id === project.id) return false;

    const sameCategory = item.category.some((cat) =>
      project.category.includes(cat),
    );
    const sameTech = item.technologies.some((tech) =>
      project.technologies.some((current) => current.id === tech.id),
    );

    return sameCategory || sameTech;
  }).slice(0, 3);

  const hasLinks = Boolean(project.repoUrl || project.demoUrl);

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-28 flex flex-col gap-10 sm:gap-14">
      <Link
        className="flex items-center gap-2 text-texto hover:text-titles transition-colors w-fit"
        href="/#proyectos"
      >
        <FaArrowLeft className="w-3 h-3" />
        <span className="text-sm sm:text-base">Volver a proyectos</span>
      </Link>

      {/* Cabecera */}
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="bg-white/10 text-titles text-xs px-3 py-1 rounded-xl font-semibold"
            >
              {cat}
            </span>
          ))}
          {project.year && (
            <span className="text-texto/80 text-xs sm:text-sm">
              {project.year}
            </span>
          )}
          {project.status && (
            <span className="border border-emerald-900 text-texto text-xs px-3 py-1 rounded-xl">
              {project.status}
            </span>
          )}
        </div>

        <h1 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-titles tracking-wide text-balance">
          {project.title}
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-3xl">
          {project.description}
        </p>

        {(project.role || project.company) && (
          <p className="text-texto text-sm sm:text-base">
            {project.role}
            {project.role && project.company ? " — " : ""}
            {project.company}
          </p>
        )}

        {hasLinks && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.demoUrl && (
              <a
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-titles px-4 py-2 rounded-xl text-sm sm:text-base transition-colors"
                href={project.demoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                Ver demo
              </a>
            )}
            {project.repoUrl && (
              <a
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-titles px-4 py-2 rounded-xl text-sm sm:text-base transition-colors"
                href={project.repoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="w-4 h-4" />
                Repositorio
              </a>
            )}
          </div>
        )}
      </header>

      {project.imageUrl && (
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black/40 border border-emerald-900">
          <img
            alt={project.title}
            className="w-full h-full object-contain"
            src={project.imageUrl}
          />
        </div>
      )}

      {project.longDescription && (
        <section className="flex flex-col gap-3">
          <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-titles">
            Sobre el proyecto
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </section>
      )}

      {/* Stack */}
      <section className="flex flex-col gap-4">
        <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-titles">
          Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech.id}
              className="bg-white/10 text-texto text-sm px-3 py-1.5 rounded-lg"
            >
              {tech.title}
              <span className="text-texto/50 text-xs ml-2">
                {tech.category}
              </span>
            </span>
          ))}
        </div>
      </section>

      {project.features && project.features.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-titles">
            Funcionalidades
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-300 text-sm sm:text-base"
              >
                <FaChevronRight className="w-3 h-3 mt-1 shrink-0 text-titles" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-titles">
            Resultados
          </h2>
          <ul className="flex flex-col gap-3">
            {project.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-300 text-sm sm:text-base"
              >
                <FaChevronRight className="w-3 h-3 mt-1 shrink-0 text-titles" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.challenges && project.challenges.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-titles">
            Retos técnicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-card border border-emerald-900 rounded-xl p-5 flex flex-col gap-2"
              >
                <h3 className="text-titles font-bold text-base sm:text-lg">
                  {challenge.title}
                </h3>
                <p className="text-gray-300 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.media && project.media.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-titles">
            Galería
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.media.map((item, index) => (
              <figure
                key={index}
                className="flex flex-col gap-2 rounded-xl overflow-hidden"
              >
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/40 border border-emerald-900">
                  {item.type === "video" ? (
                    <video
                      controls
                      className="w-full h-full object-contain"
                      src={item.url}
                    >
                      {/* Las capturas de producto no llevan audio ni diálogo */}
                      <track kind="captions" />
                    </video>
                  ) : (
                    <img
                      alt={
                        item.caption ??
                        `${project.title} - captura ${index + 1}`
                      }
                      className="w-full h-full object-contain"
                      loading="lazy"
                      src={item.url}
                    />
                  )}
                </div>
                {item.caption && (
                  <figcaption className="text-texto/80 text-xs sm:text-sm">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-titles">
            Proyectos relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((item) => (
              <CardProject key={item.id} project={item} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
