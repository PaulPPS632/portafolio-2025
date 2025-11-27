import { Technology } from "@/types";

export const TECHNOLOGIES: Record<string, Technology> = {
  // FRONTEND
  astro: { id: "astro", title: "Astro", category: "FRONTEND" },
  react: { id: "react", title: "React", category: "FRONTEND" },
  angular: { id: "angular", title: "Angular", category: "FRONTEND" },
  tailwind: { id: "tailwind", title: "TailwindCSS", category: "FRONTEND" },
  typescript: { id: "typescript", title: "TypeScript", category: "FRONTEND" },
  framer: { id: "framer", title: "Framer Motion", category: "FRONTEND" },

  // BACKEND
  nodejs: { id: "nodejs", title: "Node.js", category: "BACKEND" },
  express: { id: "express", title: "Express.js", category: "BACKEND" },
  springboot: { id: "springboot", title: "Spring Boot", category: "BACKEND" },
  java: { id: "java", title: "Java", category: "BACKEND" },

  // DATABASE
  mysql: { id: "mysql", title: "MySQL", category: "DATABASE" },
  postgresql: { id: "postgresql", title: "PostgreSQL", category: "DATABASE" },

  // DEPLOY / CLOUD
  docker: { id: "docker", title: "Docker", category: "DEPLOY" },
  aws: { id: "aws", title: "AWS", category: "DEPLOY" },
  r2: { id: "r2", title: "Cloudflare R2", category: "DEPLOY" },

  // TOOLS
  rabbitmq: { id: "rabbitmq", title: "RabbitMQ", category: "TOOL" },
  swagger: { id: "swagger", title: "Swagger", category: "TOOL" },

  // OTHER / UTILITIES
  json: { id: "json", title: "JSON Templates", category: "OTHER" },
  html: { id: "html", title: "HTML", category: "OTHER" },
  css: { id: "css", title: "CSS", category: "OTHER" },
  javascript: { id: "javascript", title: "JavaScript", category: "OTHER" },
};


export const TECNOLOGIAS: Technology[] = [
  { "id": "react", "title": "React", "category": "FRONTEND" },
  { "id": "angular", "title": "Angular", "category": "FRONTEND" },
  { "id": "astro", "title": "Astro", "category": "FRONTEND" },
  { "id": "tailwind", "title": "TailwindCSS", "category": "FRONTEND" },
  { "id": "typescript", "title": "TypeScript", "category": "FRONTEND" },
  { "id": "express", "title": "Express.js", "category": "BACKEND" },
  { "id": "nodejs", "title": "Node.js", "category": "BACKEND" },
  { "id": "springboot", "title": "Spring Boot", "category": "BACKEND" },
  { "id": "java", "title": "Java", "category": "BACKEND" },
  { "id": "rabbitmq", "title": "RabbitMQ", "category": "TOOL" },
  { "id": "docker", "title": "Docker", "category": "DEPLOY" },
  { "id": "mysql", "title": "MySQL", "category": "DATABASE" },
  { "id": "postgresql", "title": "PostgreSQL", "category": "DATABASE" },
  { "id": "r2", "title": "Cloudflare R2", "category": "DEPLOY" },
  { "id": "aws", "title": "AWS", "category": "DEPLOY" },
  { "id": "framer", "title": "Framer Motion", "category": "FRONTEND" },
  { "id": "swagger", "title": "Swagger", "category": "TOOL" },
  { "id": "json", "title": "JSON Templates", "category": "OTHER" }
]
