"use client";

import { motion } from "framer-motion";
import { BrainCircuit, BookText, CodeXml, GraduationCap } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-extrabold font-outfit text-center mb-16 relative">
            Professional Summary
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded"></span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
            <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
              <div className="glass-card p-8 h-full">
                <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
                  Results-driven AI Engineer and Data Scientist with hands-on experience designing and deploying machine learning systems across diverse domains including fraud detection, NLP, and customer analytics.
                </p>
                <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
                  Proficient in Python, SQL, and modern AI frameworks, with a track record of translating complex data into measurable business impact. Combines deep technical expertise in ML, NLP, and Generative AI with strong instructional-design skills including gamification strategies and engaging presentation techniques.
                </p>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Passionate about continuous learning, scalable AI solutions, and actively contributing to both industry and education roles through practical, real-world instruction.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <div className="glass-card hover-glow flex items-center gap-4 p-6">
                <BrainCircuit className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-white">Agentic AI</h3>
                  <p className="text-zinc-400 text-sm">Multi-step reasoning</p>
                </div>
              </div>
              <div className="glass-card hover-glow flex items-center gap-4 p-6">
                <CodeXml className="text-secondary w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-white">ML Pipelines</h3>
                  <p className="text-zinc-400 text-sm">End-to-End deployment</p>
                </div>
              </div>
              <div className="glass-card hover-glow flex items-center gap-4 p-6">
                <BookText className="text-blue-400 w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-white mb-1 leading-tight">AI Instruction</h3>
                  <p className="text-zinc-400 text-sm/tight">+120 Hrs Python, AI &amp; Data Analysis</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="w-full mt-4">
            <div className="bg-[#111111] border border-zinc-800/80 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-xl hover:border-zinc-700 transition-colors">
              <div className="p-4 bg-zinc-800 rounded-xl shrink-0 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold font-outfit text-white mb-1.5">B.Sc. in Artificial Intelligence</h3>
                <h4 className="text-zinc-400 font-medium text-base mb-1.5">Helwan International Technology University (HITU)</h4>
                <p className="text-[#3b82f6] font-inter text-sm font-semibold mb-1.5 min-h-[0px]">2022 – Expected 2026</p>
                <p className="text-zinc-300 text-sm">Technological College, Cairo</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
