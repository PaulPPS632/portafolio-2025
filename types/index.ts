import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// Categorías principales para agrupar tecnologías
export type Category = 'FRONTEND' | 'BACKEND' | 'TOOL' | 'DATABASE' | 'DEPLOY' | 'OTHER';

// Tecnología individual
export interface Technology {
  id: string;          // identificador único
  title: string;       // nombre visible (React, Node.js, etc.)
  category: Category;  // tipo de tecnología
}

// Proyecto (para tu sección "Proyectos")
export interface ProjectType {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];      // IDs de Technology
  category: ('FRONTEND' | 'BACKEND' | 'FULLSTACK' | 'TOOL')[];
  repoUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  year?: number;
  highlights?: string[];

  // --- Campos para la página de detalle (todos opcionales) ---
  longDescription?: string;                              // contexto extendido del proyecto
  role?: string;                                         // rol desempeñado en el proyecto
  company?: string;                                      // empresa / cliente
  status?: 'EN PRODUCCION' | 'EN DESARROLLO' | 'ARCHIVADO';
  features?: string[];                                   // funcionalidades principales
  challenges?: { title: string; description: string }[]; // retos técnicos y cómo se resolvieron
  media?: { type: 'image' | 'video'; url: string; caption?: string }[];
}


export interface ExperienceCard {
  id?: string;
  company: string;
  position: string;
  startDate?: string;               // "YYYY-MM" o ISO
  endDate?: string | null;          // null => still working
  isCurrent?: boolean;              // atajo para mostrar "Presente"
  logoUrl?: string;                 // imagen/ico de la empresa
  companyUrl?: string;              // link al sitio de la empresa
  location?: string;                // ciudad / remoto
  summary?: string;                 // una línea resumen
  bullets?: string[];               // responsabilidades / logros cortos
  tech?: string[];                  // stack (React, Node, Docker...)
  tags?: string[];                  // p.ej. "Fullstack", "Liderazgo"
  color?: string;                   // color para borde/fondo (hex)
  achievements?: string[];          // métricas o logros concretos
  media?: { type: 'image' | 'video'; url: string }[]; 
}
export interface ExperienceDetail extends ExperienceCard {
  highlights?: { title: string; description: string }[]; // puntos destacados
   // screenshots, demos
  repoUrl?: string;                                     // link a proyecto/repos
  certificateUrl?: string;                              // si aplica
  durationLabel?: string;                               // "Sep 2022 — Actualidad"
}