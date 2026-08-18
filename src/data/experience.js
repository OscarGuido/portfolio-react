export const experiences = [
  {
    id: 1,
    title: "Backend Software Engineer",
    company: "Solvento",
    companyUrl: "https://solvento.ai/",
    type: "Full-time",
    period: "January 2022 - June 2026",
    image: "/portfolio/img/experience/solvento-logo.png",
    description: "Built scalable REST APIs and event-driven microservices in Fintech. Designed and optimized architecture across NestJS monoliths and Ruby microservices, achieving 95%+ test coverage.",
    responsibilities: [
      "Designed and optimized API endpoints (Ruby Grape, NestJS/TypeScript) across microservices and monoliths in Fintech environment.",
      "Built event-driven, asynchronous processing on AWS (Lambda, SQS, S3) and Google Cloud (Cloud Tasks, Pub/Sub, GCS) including invoice pipeline with ZIP/XML parsing and SAT validation.",
      "Strengthened reliability at scale: idempotent API requests via Redis caching to prevent duplicate transactions, biometric KYC onboarding (Incode) to mitigate fraud risk.",
      "Applied AI-Driven Development (Cursor, Claude, SDD) reducing delivery cycles by 50% and automated support workflows with Python."
    ],
    technologies: ["NestJS", "TypeScript", "Ruby", "Python", "PostgreSQL", "AWS Lambda", "Amazon SQS", "Google Cloud Platform", "Redis"]
  },
  {
    id: 2,
    title: "Software Developer",
    company: "Coordinación del Sistema Penitenciario de Michoacán",
    companyUrl: "https://cspemo.michoacan.gob.mx/",
    type: "Full-time",
    period: "May 2021 - September 2021",
    image: "/portfolio/img/experience/cspemo.svg",
    description: "Developed cross-platform mobile application and secure REST API for centralized data management in government operations.",
    responsibilities: [
      "Designed and deployed from scratch a cross-platform mobile application (iOS & Android) using Flutter to centralize critical data queries.",
      "Architected secure REST API endpoints using Django and PostgreSQL ensuring real-time data integrity and high availability.",
      "Provided preventive and corrective maintenance to legacy internal systems based on CodeIgniter/PHP."
    ],
    technologies: ["Flutter", "Django", "PostgreSQL", "CodeIgniter", "iOS", "Android", "PHP"]
  }
];
