"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#faf9f6]/80 border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="focus:outline-none"
            >
              <img
                src="/profile.jpeg"
                alt="Dasaradh D"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#2a5c6e] hover:scale-105 transition-transform duration-300 shadow-md"
              />
            </button>

            <span className="font-semibold text-lg tracking-wide text-[#1a1e24]">
              Dasaradh D
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#home" className="hover:text-[#2a5c6e] transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-[#2a5c6e] transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-[#2a5c6e] transition-colors duration-300">Projects</a>
            <a href="#skills" className="hover:text-[#2a5c6e] transition-colors duration-300">Skills</a>
            <a href="#resume" className="hover:text-[#2a5c6e] transition-colors duration-300">Resume</a>
            <a href="#contact" className="hover:text-[#2a5c6e] transition-colors duration-300">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/dasaradhdharmesh" target="_blank">
              <Github className="w-5 h-5 hover:scale-110 hover:text-[#2a5c6e] transition-all duration-300" />
            </a>

            <a href="https://www.linkedin.com/in/dasaradh-d-81b05b390/" target="_blank">
              <Linkedin className="w-5 h-5 hover:scale-110 hover:text-[#2a5c6e] transition-all duration-300" />
            </a>

            <a href="https://medium.com/@dharmeshdasaradh" target="_blank">
              <BookOpen className="w-5 h-5 hover:scale-110 hover:text-[#2a5c6e] transition-all duration-300" />
            </a>

            <a href="mailto:dharmeshdasaradh@gmail.com">
              <Mail className="w-5 h-5 hover:scale-110 hover:text-[#2a5c6e] transition-all duration-300" />
            </a>
          </div>
        </div>
      </nav>

      {/* Image Preview Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] transition"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-scaleIn"
          >
            <img
              src="/profile.jpeg"
              alt="Dasaradh Full"
              className="w-[350px] md:w-[450px] rounded-full shadow-2xl border-4 border-white object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}