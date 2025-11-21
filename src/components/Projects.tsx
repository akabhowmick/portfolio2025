import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "../types";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Tempo ABA Website",
      description: "A fully responsive informational website for an ABA therapy organization",
      image: "",
      tags: ["React", "TypeScript", "Tailwind", "HTML", "CSS", "JavaScript"],
      category: "Web App",
      liveUrl: "https://tempoaba.com/",
      githubUrl: "https://github.com/akabhowmick/tempo-aba",
      details:
        "Built a clean and accessible platform for ABA therapy services with a modern layout, responsive design, detailed service pages, a team section, and a polished FAQ experience. Styled with Tailwind and optimized for mobile and desktop viewing.",
    },

    {
      id: "2",
      title: "Etsy E-Commerce Template",
      description: "A customizable e-commerce storefront designed for Etsy-style businesses",
      image: "",
      tags: ["React", "TypeScript", "Supabase", "MUI", "HTML", "CSS", "JavaScript"],
      category: "Web App",
      liveUrl: "https://etsy-e-commerce-template.netlify.app/",
      githubUrl: "https://github.com/akabhowmick/etsy-e-commerce-template",
      details:
        "Developed a feature-rich e-commerce template with PayPal integration, inventory management features, product pages, and responsive layouts. Built for creators who want a secure, customizable storefront with a clean and intuitive shopping experience.",
    },

    {
      id: "3",
      title: "Print3Dverse",
      description: "An online store for selling 3D-rendered house designs",
      image: "",
      tags: ["React", "Firebase", "PayPal", "MUI", "HTML", "CSS", "JavaScript"],
      category: "Web App",
      liveUrl: "https://print3dverse.com/",
      githubUrl: "https://github.com/akabhowmick/3d-site",
      details:
        "Created a polished e-commerce experience for browsing, purchasing, and downloading 3D architectural renders. Features PayPal checkout, product customization, user contact collection, and a fully responsive UI built with React and Material-UI.",
    },

    {
      id: "4",
      title: "TaekwonMaru",
      description: "A responsive website for a Taekwondo school with business-focused features",
      image: "",
      tags: ["React", "TypeScript", "MUI", "HTML", "CSS", "JavaScript"],
      category: "Web App",
      liveUrl: "https://marutaekwondo.com/",
      githubUrl: "https://github.com/akabhowmick/TaekwonMaru-React",
      details:
        "Designed a clean, responsive site for a New York Taekwondo studio. Includes instructor bios, class offerings, schedules, contact forms, and promotional sections. Built to function as both a brand site and a reusable template for small businesses.",
    },

    {
      id: "5",
      title: "Queens Finest Prints",
      description: "A 3D customization shop for signs, card stands, and accessories",
      image: "",
      tags: ["React", "React-Bootstrap", "PayPal", "HTML", "CSS", "JavaScript"],
      category: "Web App",
      liveUrl: "https://queensfinestprints.com/",
      githubUrl: "https://github.com/akabhowmick/queens-finest-prints",
      details:
        "Built a custom 3D e-commerce platform with PayPal checkout, product customization, mobile-responsive UI, and smooth browsing built with React and React-Bootstrap. Designed to showcase and sell NYC-themed 3D designs.",
    },
  ];

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8" />
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills and experience in web development
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {selectedProject.details}
              </p>

              <div className="flex gap-4">
                <a
                  href={selectedProject.liveUrl}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
