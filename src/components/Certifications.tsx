"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown, ChevronUp } from "lucide-react";

const certifications = [
  { name: "Data Scientist Career Track", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Delegation, Coaching and Mentoring Skills", issuer: "Edraak", date: "Oct 2024" },
  { name: "Deep Learning with TensorFlow 2", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Machine Learning in Python", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Supervised Learning with scikit-learn", issuer: "365 Data Science", date: "2024" },
  { name: "Unsupervised Learning in Python", issuer: "365 Data Science", date: "2024" },
  { name: "Power BI", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Introduction to R Programming", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Mathematics", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Probability", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "SQL", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Statistics", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Introduction to Data and Data Science", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Python Programmer Bootcamp", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Introduction to Python", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "The Machine Learning Process A-Z", issuer: "365 Data Science", date: "Nov 2024" },
  { name: "Working with Categorical Data in Python", issuer: "365 Data Science", date: "2024" },
  { name: "Python Toolbox", issuer: "365 Data Science", date: "2024" },
  { name: "Introduction to Functions in Python", issuer: "365 Data Science", date: "2024" },
  { name: "Hypothesis Testing in Python", issuer: "365 Data Science", date: "2024" },
  { name: "Sampling in Python", issuer: "365 Data Science", date: "2024" },
  { name: "Exploratory Data Analysis in Python", issuer: "365 Data Science", date: "2024" },
  { name: "Introduction to Data Visualization with Seaborn", issuer: "365 Data Science", date: "2024" },
  { name: "Introduction to Data Visualization with Matplotlib", issuer: "365 Data Science", date: "2024" },
  { name: "Introduction to Statistics in Python", issuer: "365 Data Science", date: "2024" },
  { name: "Joining Data with pandas", issuer: "365 Data Science", date: "2024" },
  { name: "Data Manipulation with pandas", issuer: "365 Data Science", date: "2024" },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className="py-24 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold font-outfit text-center mb-16 relative"
        >
          Certifications
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded"></span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {displayedCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: showAll ? (index % 10) * 0.05 : index * 0.1 }}
                layout
                className="glass-card hover-glow p-6 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-zinc-800/50 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold font-outfit text-lg text-white mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className="text-secondary font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {certifications.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium transition-all hover:scale-105 active:scale-95 border border-zinc-700 hover:border-primary/50"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={20} />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
