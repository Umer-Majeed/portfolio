"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { projects } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(projects.map((project) => project.category)),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory;

      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        project.shortDescription
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        project.tech.some((tech) =>
          tech.toLowerCase().includes(search.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#050816] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
            PROJECTS
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Things I've Built
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Explore my work in Artificial Intelligence,
            Machine Learning, Full Stack Development,
            and modern UI/UX design.
          </p>

          <div className="mt-6 h-1 w-28 rounded-full bg-cyan-400"></div>
        </motion.div>

        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-cyan-400/20
              bg-white/5
              px-6
              py-4
              text-white
              outline-none
              backdrop-blur-xl
              transition-all
              duration-300
              placeholder:text-gray-500
              focus:border-cyan-400
              focus:shadow-[0_0_30px_rgba(0,245,255,.20)]
            "
          />
        </div>

        {/* Categories */}
        <div className="mb-16 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                rounded-full
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  activeCategory === category
                    ? "bg-cyan-400 text-black shadow-[0_0_25px_rgba(0,245,255,.35)]"
                    : "border border-cyan-400/20 bg-white/5 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() =>
                  setSelectedProject(project)
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="
              mt-20
              rounded-3xl
              border
              border-cyan-400/20
              bg-white/5
              p-16
              text-center
              backdrop-blur-xl
            "
          >
            <h3 className="text-3xl font-bold">
              No Projects Found
            </h3>

            <p className="mt-4 text-gray-400">
              Try another search keyword or category.
            </p>
          </motion.div>
        )}

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      </div>
    </section>
  );
}