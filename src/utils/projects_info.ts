import { Project } from "../types";
import DSAPic from "../assets/Project_images/dsa.png";
import EduMatch from "../assets/Project_images/EduMatch.png";
import TTPic from "../assets/Project_images/TaekwonTrack.png";
import ZZPic from "../assets/Project_images/ZZBook.png";
import TempoPic from "../assets/Project_images/tempo.png";
import QueensPic from "../assets/Project_images/Queens.png";
import TKMUic from "../assets/Project_images/tkd.png";
import D3Pic from "../assets/Project_images/d3.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "EduMatch - Consulting Student Management System",
    description:
      "A comprehensive web application for managing student admissions consulting workflows, from initial enrollment to college acceptances.",
    image: EduMatch,
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    category: "Full Stack",
    liveUrl: "https://consultinganalyticssuite.netlify.app/",
    githubUrl: "https://github.com/akabhowmick/consulting-tracker",
    details:
      "Built a full-stack student management platform serving 200+ students and families. Implemented role-based authentication with three distinct user experiences (admin, parent, student). Developed a teacher-student matching algorithm that considers student goals, testing schedules, and teacher specializations. Created a college list management system with real-time collaboration features and integrated class scheduling with automated conflict detection. Includes a centralized study guide repository with version control and search functionality.",
  },
  {
    id: "2",
    title: "Z&Z Interactive Books Platform",
    description:
      "An engaging digital reading platform for children featuring interactive elements, progress tracking, and personalized reading experiences.",
    image: ZZPic,
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    category: "Full Stack",
    githubUrl: "https://github.com/akabhowmick/zara-zen-world-tour",
    liveUrl: "https://zarazenworldtour.netlify.app/",
    details:
      "Developing an interactive children's book platform with animated page transitions and touch-friendly navigation. Built reusable component library for interactive story elements including tap-to-reveal animations, sound effects, and mini-games. Implemented reading progress tracking with parent dashboard for monitoring comprehension and engagement metrics. Designed responsive layouts optimized for tablets and mobile devices with accessibility features including text-to-speech and adjustable font sizes.",
  },
  {
    id: "3",
    title: "TaekwonTrack - Taekwondo School Management System",
    description:
      "A streamlined administrative platform for martial arts school operations, handling attendance, billing, and student records.",
    image: TTPic,
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    category: "Full Stack",
    githubUrl: "https://github.com/akabhowmick/tkd-app-vite",
    liveUrl: "https://taekwontrack.netlify.app/",
    details:
      "Built a complete school management solution reducing administrative workload by 50%. Developed real-time attendance tracking with barcode scanning and automated parent notifications. Implemented membership renewal system with automated billing reminders and payment processing. Created comprehensive student roster with belt progression tracking, test scheduling, and performance analytics. Designed mobile-responsive interface for instructors to manage classes on tablets during sessions.",
  },
  {
    id: "4",
    title: "Tempo ABA Website",
    description: "A fully responsive informational website for an ABA therapy organization",
    image: TempoPic,
    tags: ["React", "TypeScript", "Tailwind", "HTML", "CSS", "JavaScript"],
    category: "Web App",
    liveUrl: "https://tempoaba.com/",
    githubUrl: "https://github.com/akabhowmick/tempo-aba",
    details:
      "Built a clean and accessible platform for ABA therapy services with a modern layout, responsive design, detailed service pages, a team section, and a polished FAQ experience. Styled with Tailwind and optimized for mobile and desktop viewing.",
  },
  {
    id: "5",
    title: "DSA Flashcards",
    description:
      "A comprehensive flashcard application for learning Data Structures and Algorithms using spaced repetition.",
    image: DSAPic,
    tags: ["React", "TypeScript", "Supabase", "LLM", "DSA"],
    category: "Full Stack",
    liveUrl: "https://your-live-url.com",
    githubUrl: "https://github.com/akabhowmick/dsa-deck",
    details:
      "A comprehensive flashcard application for learning Data Structures and Algorithms (DSA) using spaced repetition. Built with React, TypeScript, and Supabase, the platform helps learners master core concepts through efficient review cycles.",
  },
  {
    id: "6",
    title: "Print3Dverse",
    description: "An online store for selling 3D-rendered house designs",
    image: D3Pic,
    tags: ["React", "Firebase", "PayPal", "MUI", "HTML", "CSS", "JavaScript"],
    category: "E-Commerce",
    liveUrl: "https://print3dverse.com/",
    githubUrl: "https://github.com/akabhowmick/3d-site",
    details:
      "Created a polished e-commerce experience for browsing, purchasing, and downloading 3D architectural renders. Features PayPal checkout, product customization, user contact collection, and a fully responsive UI built with React and Material-UI.",
  },
  {
    id: "7",
    title: "TaekwonMaru",
    description: "A responsive website for a Taekwondo school with business-focused features",
    image: TKMUic,
    tags: ["React", "TypeScript", "MUI", "HTML", "CSS", "JavaScript"],
    category: "Web App",
    liveUrl: "https://marutaekwondo.com/",
    githubUrl: "https://github.com/akabhowmick/TaekwonMaru-React",
    details:
      "Designed a clean, responsive site for a New York Taekwondo studio. Includes instructor bios, class offerings, schedules, contact forms, and promotional sections. Built to function as both a brand site and a reusable template for small businesses.",
  },
  {
    id: "8",
    title: "Queens Finest Prints",
    description: "A 3D customization shop for signs, card stands, and accessories",
    image: QueensPic,
    tags: ["React", "React-Bootstrap", "PayPal", "HTML", "CSS", "JavaScript"],
    category:"E-Commerce",
    liveUrl: "https://queensfinestprints.com/",
    githubUrl: "https://github.com/akabhowmick/queens-finest-prints",
    details:
      "Built a custom 3D e-commerce platform with PayPal checkout, product customization, mobile-responsive UI, and smooth browsing built with React and React-Bootstrap. Designed to showcase and sell NYC-themed 3D designs.",
  },
];
