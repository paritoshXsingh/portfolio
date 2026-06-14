"use client";
import Image from "next/image";
import { personal } from "@/data/personal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            <p className="text-blue-400 font-medium mb-4">👋 Hi, I'm</p>

            <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight">
              PARITOSH
              <br />
              SINGH
            </h1>

            <h2 className="mt-6 text-2xl text-zinc-300">{personal.title}</h2>

            <p className="mt-6 text-zinc-400 max-w-xl leading-8">
              {personal.tagline}
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["React", "Node.js", "MongoDB", "Next.js", "AWS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-zinc-700 text-sm"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-white text-black font-medium"
              >
                View Projects
              </a>

              <a
                href={personal.resume}
                target="_blank"
                className="px-6 py-3 rounded-xl border border-zinc-700"
              >
                Resume
              </a>

              <a
                href={personal.github}
                target="_blank"
                className="px-6 py-3 rounded-xl border border-zinc-700"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative w-[320px] md:w-[420px]">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-3xl" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-900/40 backdrop-blur-sm shadow-2xl">
                <Image
                  src={personal.image}
                  alt={personal.name}
                  width={450}
                  height={550}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
