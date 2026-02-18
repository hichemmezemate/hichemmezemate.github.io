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

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      experience: "Expériences",
      projects: "Projets",
      skills: "Compétences",
      education: "Formations",
      contact: "Contact",
    },
    sections: {
      experience: "Expériences Professionnelles",
      projects: "Mes Projets",
      skills: "Compétences",
      education: "Formations & Certifications",
      contact: "Me Contacter",
    },
    common: {
      status: "Statut",
      sourceCode: "Code Source",
    }
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    sections: {
      experience: "Professional Experience",
      projects: "My Projects",
      skills: "Technical Skills",
      education: "Education & Certifications",
      contact: "Contact Me",
    },
    common: {
      status: "Status",
      sourceCode: "Source Code",
    }
  }
};

export const getSiteConfig = (lang: 'fr' | 'en') => ({
  title: "Hichem Mezemate | Portfolio",
  description: lang === 'fr' 
    ? "Développeur Full Stack spécialisé en React, Vue.js, Node.js et Python. Découvrez mes projets et mon parcours aux Ministères Sociaux."
    : "Full Stack Developer specialized in React, Vue.js, Node.js and Python. Discover my projects and my career at the Social Ministries.",
  email: "hichem.mezemate@gmail.com", 
  socials: {
    github: "https://github.com/hichemmezemate",
    linkedin: "https://www.linkedin.com/in/hichem-mezemate/",
  },
});

export const getNavLinks = (lang: 'fr' | 'en') => [
  { label: translations[lang].nav.home, href: "#hero" },
  { label: translations[lang].nav.experience, href: "#experience" },
  { label: translations[lang].nav.projects, href: "#projects" },
  { label: translations[lang].nav.skills, href: "#skills" },
  { label: translations[lang].nav.education, href: "#education" },
  { label: translations[lang].nav.contact, href: "#contact" }, 
];

export const getFormations = (lang: 'fr' | 'en'): Formation[] => [
  {
    school: "CFA Insta",
    diploma: lang === 'fr' 
      ? "Architecte des Systèmes d'Informations (Solutions Logicielles)" 
      : "IT Systems Architect (Software Solutions)",
    location: "Paris, France",
    level: "Bac +5 (RNCP niv. 7)",
    period: lang === 'fr' ? "2024 - Présent" : "2024 - Present"
  },
  {
    school: "CFA Insta",
    diploma: lang === 'fr' ? "Concepteur Développeur Logiciel" : "Software Design Developer",
    location: "Paris, France",
    level: "Bac +3 (RNCP niv. 6)",
    period: "2023 - 2024"
  },
  {
    school: "ENS d’architecture Paris la Villette",
    diploma: lang === 'fr' ? "Licence en architecture" : "Bachelor in Architecture",
    location: "Paris, France",
    period: "2020"
  }
];

export const getCertifications = (lang: 'fr' | 'en'): Certification[] => [
  {
    title: lang === 'fr' ? "Docker: Créer et administrer vos conteneurs virtuels" : "Docker: Create and manage virtual containers",
    issuer: "PLB Consultant",
    date: "2025"
  },
  {
    title: "Ultimate Fullstack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2022-2023"
  }
];

export const getExperiences = (lang: 'fr' | 'en'): Experience[] => [
  {
    company: "Direction du numérique des ministères sociaux",
    role: lang === 'fr' ? "Alternance Développeur FullStack" : "FullStack Developer Apprentice",
    period: lang === 'fr' ? "2024 - Présent" : "2024 - Present",
    type: lang === 'fr' ? "Alternance" : "Apprenticeship",
    description: lang === 'fr' 
      ? "Développement et évolution d’une plateforme nationale de vérification d’honorabilité. Conception de fonctionnalités frontend (VueJS) et backend (NodeJS) dans un environnement réglementaire exigeant. Contribution à un dispositif ayant écarté plus de 5 000 profils dangereux. Amélioration de la couverture de tests et optimisation continue."
      : "Development and evolution of a national honorability verification platform. Design of frontend (VueJS) and backend (NodeJS) features in a demanding regulatory environment. Contribution to a system that removed over 5,000 dangerous profiles. Improvement of test coverage and continuous optimization.",
    skills: ["VueJS", "NodeJS", "PostgreSQL", "Tests Automatisés"]
  },
  {
    company: "Direction du numérique des ministères sociaux",
    role: lang === 'fr' ? "Alternance Concepteur Développeur Logiciel" : "Software Developer Apprentice",
    period: "2023 - 2024",
    type: lang === 'fr' ? "Alternance" : "Apprenticeship",
    description: lang === 'fr'
      ? "Contribution au projet Champollion (lutte contre la fraude aux contrats précaires). Conception et développement sur un produit exploitant les données massives de la DSN. Collaboration avec des Data Engineers/Scientists."
      : "Contribution to the Champollion project (fight against precarious contract fraud). Design and development of a product leveraging massive DSN data. Collaboration with Data Engineers/Scientists.",
    skills: ["ReactJS", "Python FastAPI", "PostgreSQL", "Big Data"]
  }
];

export const getProjects = (lang: 'fr' | 'en'): Project[] => [
  {
    title: "Doctolib Clone",
    description: lang === 'fr' 
      ? "Application complète de gestion de rendez-vous médicaux. Permet aux patients de réserver des créneaux et aux médecins de gérer leur planning. Système d'authentification sécurisé et interface moderne."
      : "Complete medical appointment management application. Allows patients to book slots and doctors to manage their schedule. Secure authentication system and modern interface.",
    tech: ["VueJS", "Tailwind CSS", "NodeJS", "Express", "MongoDB", "Docker"],
    githubLinks: [
      { label: translations[lang].common.sourceCode, url: "https://github.com/hichemmezemate/doctolib-clone" }
    ],
    status: lang === 'fr' ? "En développement" : "In Development"
  },
  {
    title: "Gestion de Demandes (.NET / Azure)",
    description: lang === 'fr'
      ? "Application Full Stack sécurisée intégrant une authentification Azure AD. Backend construit en Clean Architecture (Hexagonale) avec .NET 9 et Entity Framework, couplé à une base de données PostgreSQL conteneurisée."
      : "Secure Full Stack application integrating Azure AD authentication. Backend built using Clean Architecture (Hexagonal) with .NET 9 and Entity Framework, coupled with a containerized PostgreSQL database.",
    tech: [".NET 9", "React", "Azure AD", "PostgreSQL", "Docker", "Clean Arch"],
    githubLinks: [
      { label: translations[lang].common.sourceCode, url: "https://github.com/hichemmezemate/dotNet-project" }
    ],
    status: lang === 'fr' ? "Terminé" : "Completed"
  },
  {
    title: "BackOffice E-commerce",
    description: lang === 'fr'
      ? "Plateforme d'administration pour la gestion de produits et de stocks (TiG). Interface Angular moderne connectée à une API REST Django robuste pour piloter le catalogue et la banque d'images."
      : "Administration platform for product and stock management (TiG). Modern Angular interface connected to a robust Django REST API to manage the catalog and image bank.",
    tech: ["Angular 19", "TypeScript", "Python", "Django", "Django REST Framework"],
    githubLinks: [
      { label: "Frontend", url: "https://github.com/hichemmezemate/monbackofficeFront" },
      { label: "API Backend", url: "https://github.com/hichemmezemate/monbackofficeAPI" }
    ],
    status: lang === 'fr' ? "Terminé" : "Completed"
  },
  {
    title: "Team Onboarding Chatbot",
    description: lang === 'fr'
      ? "Assistant IA intelligent pour l'onboarding technique. Utilise une architecture RAG (Retrieval-Augmented Generation) avec FastAPI, PyTorch et Sentence-Transformers pour analyser la documentation et répondre aux questions via un modèle QA (RoBERTa)."
      : "Smart AI assistant for technical onboarding. Uses RAG (Retrieval-Augmented Generation) architecture with FastAPI, PyTorch, and Sentence-Transformers to analyze documentation and answer questions via a QA model (RoBERTa).",
    tech: ["Python", "FastAPI", "PyTorch", "Hugging Face", "NLP", "RAG"],
    githubLinks: [
      { label: translations[lang].common.sourceCode, url: "https://github.com/hichemmezemate/TeamOnboardingChatBot" }
    ],
    status: lang === 'fr' ? "Terminé" : "Completed"
  },
  {
    title: "MovieBrowser Mobile",
    description: lang === 'fr'
      ? "Application Android native développée en Java. Permet aux utilisateurs de consulter les films populaires, de rechercher des titres et d'accéder aux détails via une API externe. Architecture basée sur les Fragments."
      : "Native Android application developed in Java. Allows users to browse popular movies, search for titles, and access details via an external API. Architecture based on Fragments.",
    tech: ["Android SDK", "Java", "XML", "Gradle", "API REST"],
    githubLinks: [
      { label: translations[lang].common.sourceCode, url: "https://github.com/hichemmezemate/moviebrowser_mobile" }
    ],
    status: lang === 'fr' ? "Terminé" : "Completed"
  }
];

export const getSkillsData = (lang: 'fr' | 'en'): SkillCategory[] => [
  { 
    title: "Languages", 
    skills: ["Ruby", "Python", "PHP", "Java", "TypeScript", "JavaScript", "HTML", "CSS"] 
  },
  { 
    title: lang === 'fr' ? "Bases de données" : "Databases", 
    skills: ["PostgreSQL", "MySQL", "MongoDB"] 
  },
  { 
    title: lang === 'fr' ? "Outils & Frameworks" : "Tools & Frameworks", 
    skills: ["ReactJS", "VueJS", "Angular", "NodeJS", "Django", "Spring Boot", "NestJS"] 
  },
  { 
    title: "CI / CD", 
    skills: ["GitHub Actions", "GitLab CI/CD"] 
  },
  { 
    title: lang === 'fr' ? "Logiciels" : "Software", 
    skills: ["Docker", "Postman", "Jira", "Trello", "Figma", "Office 365"] 
  },
  { 
    title: "Soft Skills", 
    skills: lang === 'fr' 
      ? ["Autonomie", "Autodidaxie", "Ponctualité", "Organisation", "Communication", "Travail en équipe"] 
      : ["Autonomy", "Self-teaching", "Punctuality", "Organization", "Communication", "Teamwork"] 
  }
];