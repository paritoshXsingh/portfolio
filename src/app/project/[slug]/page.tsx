import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <Link
        href="/"
        className="inline-flex items-center mb-10 text-zinc-400 hover:text-white transition"
      >
        ← Back to Portfolio
      </Link>

      {/* Hero Image */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full rounded-3xl border border-zinc-800"
      />

      {/* Header */}
      <div className="mt-10">
        <h1 className="text-5xl md:text-6xl font-bold">{project.title}</h1>

        <p className="mt-4 text-blue-400 uppercase tracking-[0.2em] text-sm font-medium">
          {project.highlight}
        </p>

        <p className="text-zinc-400 text-lg mt-6 leading-8 max-w-4xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <span className="px-4 py-2 rounded-full border border-zinc-700">
            {project.tech.length} Technologies
          </span>

          <span className="px-4 py-2 rounded-full border border-zinc-700">
            {project.features.length} Features
          </span>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-zinc-700"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Features + Challenges */}
      <section className="mt-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-900/20">
            <h2 className="text-3xl font-bold mb-8">Features</h2>

            <div className="space-y-4">
              {project.features.map((feature) => (
                <div key={feature} className="flex gap-3 items-start">
                  <span className="text-green-400">✓</span>

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-900/20">
            <h2 className="text-3xl font-bold mb-8">Challenges</h2>

            <div className="space-y-4">
              {project.challenges.map((challenge) => (
                <div key={challenge} className="flex gap-3 items-start">
                  <span className="text-yellow-400">⚡</span>

                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-3 rounded-xl bg-zinc-900/40 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title}-${index}`}
              className="rounded-2xl border border-zinc-800 transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/40"
            />
          ))}
        </div>
      </section>

      {/* What I Learned */}
      <section className="mt-24 mb-16">
        <h2 className="text-3xl font-bold mb-8">What I Learned</h2>

        <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-900/20">
          <div className="space-y-4">
            {project.lessons.map((lesson) => (
              <div key={lesson} className="flex gap-3">
                <span className="text-blue-400">→</span>

                <span>{lesson}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
