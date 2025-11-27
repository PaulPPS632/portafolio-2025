import { ExperienceCard } from "@/types";


export const EXPERIENCES: ExperienceCard[] = [
  {
    id: 'exp-001',
    company: 'Centro de Capacitacion y Desarrollo',
    position: 'Jefe Area de TI',
    startDate: '2025-02',
    endDate: null,
    isCurrent: true,
    logoUrl: '/empresas/ccd.webp',
    companyUrl: 'https://www.ccdcapacitacion.edu.pe',
    location: 'Remoto — Lima, Perú',
    summary: "Lideré la transformación tecnológica del área de TI, impulsando el desarrollo de soluciones escalables para educación en línea, automatización de procesos y optimización de infraestructura.",
    bullets: [
      "Dirigí al equipo de desarrollo en 5 proyectos estratégicos, definiendo arquitectura, buenas prácticas y flujos CI/CD.",
      "Desarrollé una plataforma e-learning escalable basada en Next.js y NestJS, con soporte multiusuario y carga dinámica de contenido.",
      "Migré desde una plataforma heredada y desorganizada hacia una arquitectura modular y desacoplada, permitiendo independencia entre cursos y salas.",
      "Implementé un sistema de gestión de archivos en la nube con Cloudflare R2, optimizando costos y centralizando almacenamiento.",
      "Desarrollé un microservicio para generación masiva de certificados personalizados desde plantillas dinámicas.",
      "Creé una aplicación web para la gestión de bots de WhatsApp y mensajería masiva, orquestada mediante colas de mensajes.",
      "Promoví el desarrollo de una plataforma interna de tickets, canalizando reclamos y sugerencias de clientes para mejorar la toma de decisiones.",
      "Implementé un servidor de correo unificado con Mailu, consolidando múltiples dominios y simplificando la administración interna.",
      "Reemplacé el enfoque de almacenamiento de videos en MP4 por un sistema de streaming transcodificado con Bunny.net, reduciendo quejas de usuarios por tiempos de carga.",
      "Desarrollé y mantuve landing pages optimizadas para campañas de marketing y captación de leads."
    ],
    tech: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "MySQL",
      "TailwindCSS",
      "Mailu",
      "Cloudflare R2",
      "Bunny.net",
      "Docker",
      "GitHub Actions"
    ],
    achievements: [
      "Reducción de quejas de clientes en más de 70% gracias a la transcodificación adaptativa de videos.",
      "+2000 usuarios activos en el primer trimestre tras la modernización de la plataforma e-learning.",
      "Implementación de despliegues automatizados (CI/CD) con Vercel y Render, reduciendo los tiempos de publicación en un 60%.",
      "Centralización de los servicios de correo, mejorando la eficiencia de comunicación interna y reduciendo fallos por configuración.",
      "Mejora sustancial en la gestión de soporte gracias al sistema de ticketing, facilitando métricas de satisfacción y priorización de incidencias.",
      "Estandarización de procesos de desarrollo mediante versionado en GitHub, documentación técnica y metodologías ágiles."
    ],
    color: '#14b8a6',
    media:[
      {
        type:"image",
        url: '/experiencias/ccd/desarrolladores-ccd.webp'
      },
      {
        type:"image",
        url: '/experiencias/ccd/admin-ccd.webp'
      },
      {
        type:"image",
        url: '/experiencias/ccd/home-ccd.webp'
      },
      {
        type:"image",
        url: '/experiencias/ccd/plataforma-ccd.webp'
      },
      {
        type:"image",
        url: '/experiencias/ccd/tickets-ccd.webp'
      }
    ]
  },
  {
    id: 'exp-002',
    company: 'Funcional Neuro Laboral',
    position: 'Backend Developer',
    startDate: '2024-12',
    endDate: '2025-01',
    logoUrl: '/empresas/fnl.webp',
    companyUrl: 'https://fnldigital.com/',
    location: 'Híbrido — Lima, Perú',
    summary: 'Desarrollo de herramientas para monitoreo ambiental y gestión de datos IoT.',
    bullets: [
      'Refactoricé completamente la arquitectura del backend y documenté la API con Swagger, mejorando la mantenibilidad del proyecto.',
      'Reestructuré el modelo de actividades con tags semánticos, permitiendo una segmentación más precisa según el perfil del usuario.',
      'Diseñé un sistema de pre-generación de actividades que reemplazó la generación en tiempo real por búsqueda inteligente basada en similitud de tags, reduciendo el tiempo de respuesta en más de 5000%.',
      'Implementé un banco de más de 5000 actividades generadas con Gemini AI, eliminando la dependencia de claves de pago y permitiendo el despliegue del piloto sin costo.',
      'Contribuí a optimizar el flujo de registro de usuarios, haciendo que las actividades personalizadas estén disponibles instantáneamente tras el ingreso.'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS S3'],
    achievements: ['Implementación en 12 plantas industriales', 'Monitoreo de más de 100k registros diarios'],
    color: '#22c55e',
    media:[
      {
        type:"image",
        url: '/experiencias/fnl/swagger-fnl.webp'
      },
      {
        type:"image",
        url: '/experiencias/fnl/funcy-fnl.webp'
      },
      {
        type:"image",
        url: '/experiencias/fnl/empresas-fnl.webp'
      }
    ]
  },
  {
    id: 'exp-003',
    company: 'A&B EcoConsulting',
    position: 'Frontend Developer',
    startDate: '2024-07',
    endDate: '2024-11',
    logoUrl: '/empresas/ayb.webp',
    companyUrl: 'https://devcorestudio.com',
    location: 'Remoto',
    summary: 'Desarrollo de interfaces modernas para productos SaaS.',
    bullets: [
      'Lideré al equipo de practicantes TI para modernizar y mantener el sitio web de la empresa, optimizando la estructura y el contenido en WordPress.',
      'Capacité al personal interno en la gestión del blog corporativo, potenciando su estrategia de SEO y presencia digital.',
      'Propuse e inicié el desarrollo de una plataforma e-learning y e-commerce para cursos ambientales, alineada con los servicios de capacitación de la empresa.',
      'Diseñé la arquitectura del frontend con Angular y TailwindCSS, y estructuré los módulos de cursos, pagos y visualización de clases grabadas.',
      'Demostré proactividad y liderazgo, transformando unas prácticas limitadas en una oportunidad real de innovación tecnológica.'

    ],
    tech: ['React', 'TailwindCSS', 'Framer Motion', 'Redux'],
    achievements: ['Incremento de 25% en retención de usuarios', 'Interfaces adaptadas a dark mode'],
    color: '#6366f1',
    media:[
      {
        type:"image",
        url: '/experiencias/ayb/login-ayb.webp'
      },
      {
        type:"image",
        url: '/experiencias/ayb/home-ayb.webp'
      },
      {
        type:"image",
        url: '/experiencias/ayb/registrar-curso-ayb.webp'
      },
      {
        type:"image",
        url: '/experiencias/ayb/registrar-curso2-ayb.webp'
      },
      {
        type:"image",
        url: '/experiencias/ayb/registrar-categoria-ayb.webp'
      },
      {
        type:"image",
        url: '/experiencias/ayb/carrito-ayb.webp'
      },
      {
        type:"image",
        url: '/experiencias/ayb/completar-datos-pasarella-ayb.webp'
      }
    ]
  },
  {
    id: 'exp-003',
    company: 'Cuadrado Electronics',
    position: 'FullStack Developer',
    startDate: '2020-09',
    endDate: '2021-12',
    logoUrl: '/empresas/cuadrado.webp',
    companyUrl: 'https://devcorestudio.com',
    location: 'Remoto',
    summary: 'Desarrollo de interfaces modernas para productos SaaS.',
    bullets: [
      'Inicié mi trayectoria profesional como vendedor, identificando oportunidades de mejora tecnológica en la gestión de inventario y ventas.',
      'Desarrollé de forma autodidacta un sistema de inventario y facturación (Kardex) en Java (NetBeans), con base de datos integrada y manejo de productos serializados.',
      'Implementé la integración con la API de facturación electrónica usada por la empresa, automatizando la emisión de comprobantes.',
      'Efectué junto al equipo el primer inventario general digitalizado, optimizando el control de existencias y reduciendo errores manuales.',
      'Fomenté la transformación digital del negocio, demostrando liderazgo y perseverancia desde una posición no técnica.'
    ],
    tech: ['React', 'TailwindCSS', 'Framer Motion', 'Redux'],
    achievements: ['Incremento de 25% en retención de usuarios', 'Interfaces adaptadas a dark mode'],
    color: '#6366f1',
    media:[
      {
        type:"image",
        url: '/experiencias/cuadrado/login-cuadrado.webp'
      },
      {
        type:"image",
        url: '/experiencias/cuadrado/home-cuadrado.webp'
      },
      {
        type:"image",
        url: '/experiencias/cuadrado/registro-clientes-cuadrado.webp'
      },
      {
        type:"image",
        url: '/experiencias/cuadrado/registro-condicion-cuadrado.webp'
      },
      {
        type:"image",
        url: '/experiencias/cuadrado/registro-usuario-cuadrado.webp'
      },
      {
        type:"image",
        url: '/experiencias/cuadrado/reporte-ventas-cuadrado.webp'
      },
      {
        type:"image",
        url: '/experiencias/cuadrado/rastreo-producto-cuadrado.webp'
      }
    ],
  },
];
