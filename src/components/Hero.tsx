"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h3 className="text-xl md:text-2xl text-primary font-medium mb-4">Hi, I&apos;m</h3>
          <h1 className="text-5xl md:text-7xl font-extrabold font-outfit tracking-tight mb-4 text-white">
            Mosap Abdel-Ghany
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-zinc-400 mb-6">
            <span className="text-white">AI Engineer</span> &amp;{" "}
            <span className="text-white">Data Scientist</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            Passionate AI Engineer, Data Scientist, and Instructor who turns complex AI concepts into practical learning experiences. Build and apply solutions in machine learning, NLP, and generative AI with focus on real-world impact and hands-on training.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#projects"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-bold font-outfit shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)] hover:-translate-y-1 transition-all"
            >
              View My Work
            </a>
            <div className="flex items-center gap-5 text-zinc-400">
              <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 block"><Github size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 block"><Linkedin size={24} /></a>
              <a href="mailto:abdelghanymosap@gmail.com" className="hover:text-primary transition-colors hover:-translate-y-1 block"><Mail size={24} /></a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[30px] h-[50px] border-2 border-zinc-500 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-3 bg-zinc-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
