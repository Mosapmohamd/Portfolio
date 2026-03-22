"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Artificial Intelligence",
    school: "Helwan International Technology University (HITU)",
    date: "2022 – Expected 2026",
    desc: "Technological College, Cairo",
    icon: <GraduationCap className="w-6 h-6 text-primary" />
  },
  {
    degree: "Generative AI Trainee",
    school: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "Nov 2025 – Jul 2026",
    desc: "Advanced LLMs, prompt engineering, RAG pipelines, fine-tuning. Built production-ready GenAI solutions integrating LLMs with vector databases and agentic frameworks.",
    icon: <Award className="w-6 h-6 text-secondary" />
  },
  {
    degree: "AI for Business (120-Hour)",
    school: "National Telecommunication Institute (NTI)",
    date: "Oct 2025 – Dec 2025",
    desc: "Applied neural networks for segmentation & churn prediction. Evaluated models using revenue-centric metrics (ROI). Translated outputs into executive-ready insights.",
    icon: <Award className="w-6 h-6 text-blue-400" />
  },
  {
    degree: "Data Science Trainee",
    school: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "Oct 2024 – May 2025",
    desc: "EDA, data preprocessing, statistical analysis using Python/SQL. Built predictive models and interactive dashboards for stakeholders.",
    icon: <Award className="w-6 h-6 text-purple-400" />
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold font-outfit text-center mb-16 relative"
        >
          Training & Education
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded"></span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.5 }}
               className="glass-card hover-glow flex items-start gap-4 p-6"
            >
              <div className="p-3 bg-zinc-800 rounded-full shrink-0">
                {edu.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold font-outfit text-white mb-1">{edu.degree}</h3>
                <h4 className="text-zinc-400 font-medium mb-1">{edu.school}</h4>
                <p className="text-primary font-outfit text-sm font-bold mb-3">{edu.date}</p>
                <p className="text-zinc-300 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
