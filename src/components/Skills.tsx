import { FaReact, FaNodeJs, FaGithub, FaAws } from "react-icons/fa";
import FadeIn from "./FadeIn";

import {
  SiMongodb,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "React",
      icon: <FaReact size={32} />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={32} />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={32} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={32} />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={32} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={32} />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={32} />,
    },
    {
      name: "AWS",
      icon: <FaAws size={32} />,
    },
  ];

  return (
    <FadeIn>
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border border-zinc-800 rounded-2xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-600"
            >
              {skill.icon}

              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
