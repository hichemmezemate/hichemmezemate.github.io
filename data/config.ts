export const siteConfig = {
  title: "Hichem Mezemate | Portfolio",
  description: "Développeur Full Stack & DevOps",
  email: "ton-email@example.com", 
  socials: {
    github: "https://github.com/hichemmezemate",
    linkedin: "https://www.linkedin.com/in/hichem-mezemate/",
  },
};

export const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: 'Compétences', href: '#skills' },
  { label: "Formations", href: "#education" },
  { label: "Contact", href: "#contact" }, 
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubLinks?: { label: string; url: string }[];
  status?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
}

export interface Formation {
  school: string;
  diploma: string;
  location: string;
  level?: string;
  period?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const formations: Formation[] = [
  {
    school: "CFA Insta",
    diploma: "Architecte des Systèmes d'Informations (Solutions Logicielles)",
    location: "Paris, France",
    level: "Bac +5 (RNCP niv. 7)",
    period: "2024 - Present"
  },
  {
    school: "CFA Insta",
    diploma: "Concepteur Développeur Logiciel",
    location: "Paris, France",
    level: "Bac +3 (RNCP niv. 6)",
    period: "2023 - 2024"
  },
  {
    school: "ENS d’architecture Paris la Villette",
    diploma: "Licence en architecture",
    location: "Paris, France",
    period: "2020"
  }
];

export const certifications: Certification[] = [
  {
    title: "Docker: Créer et administrer vos conteneurs virtuels",
    issuer: "PLB Consultant",
    date: "2025"
  },
  {
    title: "Ultimate Fullstack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2022-2023"
  }
];

export const experiences: Experience[] = [
  {
    company: "Direction du numérique des ministères sociaux",
    role: "Alternance Développeur FullStack",
    period: "2024 - Présent",
    type: "Alternance",
    description: "Développement et évolution d’une plateforme nationale de vérification d’honorabilité. Conception de fonctionnalités frontend (VueJS) et backend (NodeJS) dans un environnement réglementaire exigeant. Contribution à un dispositif ayant écarté plus de 5 000 profils dangereux. Amélioration de la couverture de tests et optimisation continue.",
    skills: ["VueJS", "NodeJS", "PostgreSQL", "Tests Automatisés"]
  },
  {
    company: "Direction du numérique des ministères sociaux",
    role: "Alternance Concepteur Développeur Logiciel",
    period: "2023 - 2024",
    type: "Alternance",
    description: "Contribution au projet Champollion (lutte contre la fraude aux contrats précaires). Conception et développement sur un produit exploitant les données massives de la DSN. Collaboration avec des Data Engineers/Scientists.",
    skills: ["ReactJS", "Python FastAPI", "PostgreSQL", "Big Data"]
  }
];

export const projects: Project[] = [
  {
    title: "Doctolib Clone",
    description: "Application complète de gestion de rendez-vous médicaux. Permet aux patients de réserver des créneaux et aux médecins de gérer leur planning. Système d'authentification sécurisé et interface moderne.",
    tech: ["VueJS", "Tailwind CSS", "NodeJS", "Express", "MongoDB", "Docker"],
    githubLinks: [
      { label: "Code Source", url: "https://github.com/hichemmezemate/doctolib-clone" }
    ],
    status: "En développement"
  },
  {
    title: "Gestion de Demandes (.NET / Azure)",
    description: "Application Full Stack sécurisée intégrant une authentification Azure AD. Backend construit en Clean Architecture (Hexagonale) avec .NET 9 et Entity Framework, couplé à une base de données PostgreSQL conteneurisée.",
    tech: [".NET 9", "React", "Azure AD", "PostgreSQL", "Docker", "Clean Arch"],
    githubLinks: [
      { label: "Code Source", url: "https://github.com/hichemmezemate/dotNet-project" }
    ],
    status: "Terminé"
  },
  {
    title: "BackOffice E-commerce",
    description: "Plateforme d'administration pour la gestion de produits et de stocks (TiG). Interface Angular moderne connectée à une API REST Django robuste pour piloter le catalogue et la banque d'images.",
    tech: ["Angular 19", "TypeScript", "Python", "Django", "Django REST Framework"],
    githubLinks: [
      { label: "Frontend", url: "https://github.com/hichemmezemate/monbackofficeFront" },
      { label: "API Backend", url: "https://github.com/hichemmezemate/monbackofficeAPI" }
    ],
    status: "Terminé"
  },
  {
    title: "Team Onboarding Chatbot",
    description: "Assistant IA intelligent pour l'onboarding technique. Utilise une architecture RAG (Retrieval-Augmented Generation) avec FastAPI, PyTorch et Sentence-Transformers pour analyser la documentation et répondre aux questions via un modèle QA (RoBERTa).",
    tech: ["Python", "FastAPI", "PyTorch", "Hugging Face", "NLP", "RAG"],
    githubLinks: [
      { label: "Code Source", url: "https://github.com/hichemmezemate/TeamOnboardingChatBot" }
    ],
    status: "Terminé"
  },
  {
    title: "MovieBrowser Mobile",
    description: "Application Android native développée en Java. Permet aux utilisateurs de consulter les films populaires, de rechercher des titres et d'accéder aux détails via une API externe. Architecture basée sur les Fragments.",
    tech: ["Android SDK", "Java", "XML", "Gradle", "API REST"],
    githubLinks: [
      { label: "Code Source", url: "https://github.com/hichemmezemate/moviebrowser_mobile" }
    ],
    status: "Terminé"
  }
];

export const skillsData: SkillCategory[] = [
  { 
    title: "Languages", 
    skills: ["Ruby", "Python", "PHP", "Java", "TypeScript", "JavaScript", "HTML", "CSS"] 
  },
  { 
    title: "Bases de données", 
    skills: ["PostgreSQL", "MySQL", "MongoDB"] 
  },
  { 
    title: "Outils & Frameworks", 
    skills: ["Ruby on Rails", "ReactJS", "VueJS", "Angular", "NodeJS", "Django", "Spring Boot", "Symfony", "NestJS"] 
  },
  { 
    title: "CI / CD", 
    skills: ["GitHub Actions", "GitLab CI/CD"] 
  },
  { 
    title: "Logiciels", 
    skills: ["Docker", "Postman", "Jira", "Trello", "Figma", "Office 365"] 
  },
  { 
    title: "Soft Skills", 
    skills: ["Autonomie", "Autodidaxie", "Ponctualité", "Organisation", "Communication", "Travail en équipe"] 
  }
];