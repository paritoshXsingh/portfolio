import { personal } from "@/data/personal";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-zinc-400 leading-8 max-w-3xl">{personal.bio}</p>
      </section>
    </FadeIn>
  );
}
