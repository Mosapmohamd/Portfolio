"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI Engineer",
    company: "Core Business Solutions (CBS)",
    date: "Nov 2025 – Present",
    bullets: [
      "Designed and deployed machine learning models for prediction and multi-class classification tasks in production environments.",
      "Built end-to-end ML pipelines covering data ingestion, preprocessing, training, evaluation, and model deployment.",
      "Developed and fine-tuned supervised and unsupervised models using Python and Scikit-learn, improving accuracy and minimizing overfitting.",
      "Collaborated with cross-functional teams to translate business requirements into scalable AI solutions.",
    ],
  },
  {
    role: "Python Instructor",
    company: "TM Academy",
    date: "Nov 2024 – Present",
    bullets: [
      "Delivered structured Python curriculum: variables, control flow, OOP, functions, and file handling.",
      "Designed hands-on projects and assessments to reinforce practical coding and problem-solving skills.",
      "Applied gamification techniques (quizzes, challenges, leaderboards) to boost learner engagement.",
      "Provided individualized mentoring and feedback, significantly accelerating student progress.",
    ],
  },
  {
    role: "AI & Machine Learning Instructor",
    company: "RTC (Volunteer)",
    date: "Jul 2024 – Present",
    bullets: [
      "Mentored students in applied ML techniques using Python, Scikit-learn, and Pandas.",
      "Facilitated collaborative learning through structured Q&A sessions and performance-based feedback.",
      "Designed bite-sized learning modules and project-based assessments aligned to real-world use cases.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold font-outfit text-center mb-16 relative"
        >
          Work Experience
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded"></span>
        </motion.h2>

        <div className="relative border-l border-zinc-700 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="mb-12 pl-8 relative last:mb-0"
            >
              <span className="absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-zinc-950 border-4 border-primary z-10"></span>
              
              <div className="glass-card hover-glow p-6 md:p-8">
                <span className="inline-block text-secondary font-bold mb-2 tracking-wide uppercase text-sm">
                  {exp.date}
                </span>
                <h3 className="text-2xl font-bold font-outfit text-white mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-zinc-400 mb-6 font-medium">
                  {exp.company}
                </h4>
                <ul className="list-disc list-inside space-y-3 text-zinc-300 marker:text-primary pl-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed pl-2 -indent-6 relative">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
