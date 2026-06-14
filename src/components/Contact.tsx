import { personal } from "@/data/personal";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <FadeIn>
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>

        <p className="text-zinc-400 mb-8 max-w-xl">
          I'm actively looking for software development opportunities and always
          open to discussing interesting projects and collaborations.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${personal.email}?subject=Portfolio%20Inquiry`}
            className="px-5 py-3 rounded-xl border border-zinc-700"
          >
            Email
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-zinc-700"
          >
            GitHub
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-zinc-700"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </FadeIn>
  );
}
