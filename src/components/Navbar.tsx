"use client";

import { useState } from "react";
import { personal } from "@/data/personal";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl shadow-xl">
        {/* Logo */}
        <a
          href="/"
          className="font-bold text-xl tracking-wider hover:text-blue-400 transition"
        >
          PS
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-zinc-800 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-zinc-800 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-xl overflow-hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 border-b border-zinc-800 hover:bg-zinc-900 transition"
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center justify-center gap-6 py-5">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={22} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white text-black text-sm"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
