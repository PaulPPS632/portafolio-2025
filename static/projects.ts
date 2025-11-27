import { ProjectType } from "@/types";
import { TECHNOLOGIES } from "./technologies";


export const PROJECTS: ProjectType[] = [
  {
    id: "proj-001",
    title: "Game of Thrones Hub",
    description: "Sitio web con todas las temporadas, libros y reparto de Game of Thrones.",
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
    category: ["FRONTEND"],
    year: 2019,
  },
  {
    id: "proj-002",
    title: "TechNet E-Commerce",
    description: "E-commerce desarrollado primero con Spring Boot y luego migrado a Angular + Express.",
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.express, TECHNOLOGIES.springboot, TECHNOLOGIES.mysql],
    category: ["FULLSTACK"],
    year: 2023,
  },
  {
    id: "proj-003",
    title: "WhatsApp Marketing System",
    description: "Sistema de envío de mensajes promocionales usando colas con RabbitMQ y microservicios en Docker.",
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.express, TECHNOLOGIES.rabbitmq, TECHNOLOGIES.docker],
    category: ["FULLSTACK"],
    year: 2024,
  },
  {
    id: "proj-004",
    title: "File Manager R2",
    description: "Gestor de archivos con permisos por usuario, historial de acciones y almacenamiento en Cloudflare R2.",
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.express, TECHNOLOGIES.r2, TECHNOLOGIES.postgresql],
    category: ["FULLSTACK"],
    year: 2024,
  },
  {
    id: "proj-005",
    title: "Landing CCD",
    description: "Landing page en Astro como embudo de ventas para campañas de Meta y TikTok.",
    technologies: [TECHNOLOGIES.astro, TECHNOLOGIES.tailwind, TECHNOLOGIES.typescript],
    category: ["FRONTEND"],
    year: 2025,
  },
  {
    id: "proj-006",
    title: "PDF Certificate Generator",
    description: "Microservicio Node.js para generar certificados PDF a partir de plantillas JSON.",
    technologies: [TECHNOLOGIES.nodejs, TECHNOLOGIES.express, TECHNOLOGIES.json],
    category: ["BACKEND"],
    year: 2024,
  },
  {
    id: "proj-007",
    title: "Funcional Neuro Laboral Backend",
    description: "Backend con Node.js y Express para app de bienestar psicológico con IA.",
    technologies: [TECHNOLOGIES.nodejs, TECHNOLOGIES.express, TECHNOLOGIES.swagger, TECHNOLOGIES.postgresql],
    category: ["BACKEND"],
    year: 2025,
  },
  {
    id: "proj-008",
    title: "Kardex Cuadrado Electronics",
    description: "Software de escritorio en Java para gestión de inventario, facturación y trazabilidad de productos.",
    technologies: [TECHNOLOGIES.java, TECHNOLOGIES.mysql],
    category: ["BACKEND"],
    year: 2021,
  },
  {
    id: "proj-009",
    title: "PRFACT SaaS",
    description: "Aplicación SaaS de gestión de inventario y facturación con dashboards en tiempo real.",
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.express, TECHNOLOGIES.postgresql, TECHNOLOGIES.docker],
    category: ["FULLSTACK"],
    year: 2025,
  },
  {
    id: "proj-010",
    title: "E-Learning CCD",
    description: "Plataforma de aprendizaje para Centro de Capacitación y Desarrollo con certificados masivos y gestión de cursos.",
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.express, TECHNOLOGIES.nodejs, TECHNOLOGIES.postgresql],
    category: ["FULLSTACK"],
    year: 2024,
  },
  {
    id: "proj-011",
    title: "E-Learning Digital College",
    description: "Sistema e-learning con ecommerce, evaluaciones y visualización del progreso del alumno.",
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.express, TECHNOLOGIES.nodejs, TECHNOLOGIES.mysql],
    category: ["FULLSTACK"],
    year: 2024,
  }
];
