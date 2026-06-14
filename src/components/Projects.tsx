import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/30 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-52 object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium mb-3">
                {project.highlight}
              </p>

              <Link href={`/project/${project.slug}`}>
                <h3 className="text-2xl font-semibold hover:text-blue-400 transition">
                  {project.title}
                </h3>
              </Link>

              <p className="text-zinc-400 mt-4 line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-6 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:scale-105 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-zinc-700 text-sm hover:border-zinc-500 transition"
                >
                  GitHub
                </a>

                <Link
                  href={`/project/${project.slug}`}
                  className="px-4 py-2 rounded-lg border border-blue-500 text-blue-400 text-sm hover:bg-blue-500 hover:text-white transition"
                >
                  Case Study →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
