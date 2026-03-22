"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown, ChevronUp } from "lucide-react";

const trainingAndCources = [
  // Training 
  { isTraining: true, degree: "Generative AI Trainee", school: "Digital Egypt Pioneers Initiative (DEPI)", date: "Nov 2025 – Jul 2026", desc: "Advanced LLMs, prompt engineering, RAG pipelines, fine-tuning. Built production-ready GenAI solutions integrating LLMs with vector databases and agentic frameworks." },
  { isTraining: true, degree: "AI for Business (120-Hour)", school: "National Telecommunication Institute (NTI)", date: "Oct 2025 – Dec 2025", desc: "Applied neural networks for segmentation & churn prediction. Evaluated models using revenue-centric metrics (ROI). Translated outputs into executive-ready insights." },
  { isTraining: true, degree: "Data Science Trainee", school: "Digital Egypt Pioneers Initiative (DEPI)", date: "Oct 2024 – May 2025", desc: "EDA, data preprocessing, statistical analysis using Python/SQL. Built predictive models and interactive dashboards for stakeholders." },

  // Certifications
  { isTraining: false, name: "Data Scientist Career Track", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Delegation, Coaching and Mentoring Skills", issuer: "Edraak", date: "Oct 2024" },
  { isTraining: false, name: "Deep Learning with TensorFlow 2", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Machine Learning in Python", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Supervised Learning with scikit-learn", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Unsupervised Learning in Python", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Power BI", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Introduction to R Programming", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Mathematics", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Probability", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "SQL", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Statistics", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Introduction to Data and Data Science", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Python Programmer Bootcamp", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Introduction to Python", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "The Machine Learning Process A-Z", issuer: "365 Data Science", date: "Nov 2024" },
  { isTraining: false, name: "Working with Categorical Data in Python", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Python Toolbox", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Introduction to Functions in Python", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Hypothesis Testing in Python", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Sampling in Python", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Exploratory Data Analysis in Python", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Introduction to Data Visualization with Seaborn", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Introduction to Data Visualization with Matplotlib", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Introduction to Statistics in Python", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Joining Data with pandas", issuer: "365 Data Science", date: "2024" },
  { isTraining: false, name: "Data Manipulation with pandas", issuer: "365 Data Science", date: "2024" },
];

export default function TrainingCourses() {
  const [showAll, setShowAll] = useState(false);
  
  const trainingItems = trainingAndCources.filter(item => item.isTraining);
  const certItems = trainingAndCources.filter(item => !item.isTraining);
  
  const displayedCerts = showAll ? certItems : certItems.slice(0, 6);

  return (
    <section id="training" className="py-24 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold font-outfit text-center mb-16 relative"
        >
          Training &amp; Cources
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded"></span>
        </motion.h2>

        {/* Training Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {trainingItems.map((edu, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.5 }}
               className="glass-card hover-glow p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-zinc-800 rounded-lg shrink-0 text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit text-white leading-tight mb-1">{edu.degree}</h3>
                  <p className="text-primary font-outfit text-sm font-bold">{edu.date}</p>
                </div>
              </div>
              <h4 className="text-zinc-300 font-medium mb-3 border-b border-zinc-700/50 pb-3">{edu.school}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{edu.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Separator */}
        <div className="flex items-center gap-6 mb-12">
            <h3 className="text-2xl font-bold font-outfit text-white shrink-0">Earned Certificates</h3>
            <div className="h-px bg-zinc-800 w-full rounded"></div>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {displayedCerts.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: showAll ? (index % 10) * 0.05 : index * 0.1 }}
                layout
                className="glass-card hover-glow p-5 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-zinc-800/50 flex items-center justify-center text-secondary group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold font-outfit text-lg text-white mb-1 group-hover:text-secondary transition-colors max-w-full break-words">
                    {cert.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-400">
                    <span className="text-primary font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <span className="whitespace-nowrap">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {certItems.length > 6 && (
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex justify-center mt-12"
           >
             <button
               onClick={() => setShowAll(!showAll)}
               className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium transition-all hover:scale-105 active:scale-95 border border-zinc-700 hover:border-secondary/50"
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
