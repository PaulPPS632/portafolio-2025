import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectNotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-28 flex flex-col items-center gap-6 text-center">
      <h1 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-titles">
        Proyecto no encontrado
      </h1>
      <p className="text-gray-300 text-sm sm:text-base">
        El proyecto que buscas no existe o fue movido.
      </p>
      <Link
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-titles px-4 py-2 rounded-xl transition-colors"
        href="/#proyectos"
      >
        <FaArrowLeft className="w-3 h-3" />
        Volver a proyectos
      </Link>
    </section>
  );
}
