"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

import ProjectStats from "@/components/sections/projects/ProjectStats";
import ProjectTechWall from "@/components/sections/projects/ProjectTechWall";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/sections/projects/ProjectModal";
import SectionBackground from "@/components/ui/SectionBackground";
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
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050816]
        px-6
        py-28
      "
    >
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span
            className="
              inline-block
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              px-4
              py-2
              font-mono
              text-xs
              tracking-[4px]
              text-cyan-400
            "
          >
            APPLICATION LIBRARY
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-7xl">
            Projects
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Browse production-ready applications, AI systems, automation tools,
            dashboards, APIs, and full-stack software engineered with
            performance and scalability in mind.
          </p>

          {/* Project Stats */}
          <ProjectStats />

          {/* Project Tech Wall */}
          <ProjectTechWall />

          <div className="mt-8 flex items-center gap-4">
            <div className="h-[2px] w-24 bg-cyan-400" />
            <span
              className="
                font-mono
                text-xs
                tracking-[3px]
                text-cyan-400
              "
            >
              LIVE INDEX
            </span>
          </div>
        </motion.div>

        {/* Search */}
        <div className="relative mb-10">
          <Search
            size={18}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-cyan-400
            "
          />

          <input
            type="text"
            placeholder="Search applications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              py-4
              pl-14
              pr-36
              text-white
              outline-none
              backdrop-blur-xl
              transition-all
              duration-300
              placeholder:text-gray-500
              focus:border-cyan-400
              focus:shadow-[0_0_40px_rgba(0,255,255,.18)]
            "
          />

          <div
            className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              rounded-full
              border
              border-green-400/20
              bg-green-400/10
              px-3
              py-1
              font-mono
              text-[11px]
              tracking-[2px]
              text-green-400
            "
          >
            {filteredProjects.length} MODULES
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-16 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                group
                rounded-xl
                border
                px-5
                py-3
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  activeCategory === category
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(0,255,255,.2)]"
                    : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-cyan-400/40 hover:text-cyan-300"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
            <h3 className="text-3xl font-bold">No Projects Found</h3>
            <p className="mt-4 text-gray-400">
              Try another search keyword or category.
            </p>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}