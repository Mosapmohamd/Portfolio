"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    icon: "P",
    iconBg: "bg-blue-500/20 text-blue-400",
    title: "Programming",
    desc: "Core programming languages for data science and AI development",
    level: 95,
    keySkills: ["Python", "SQL", "R"]
  },
  {
    icon: "M",
    iconBg: "bg-pink-500/20 text-pink-400",
    title: "Machine Learning",
    desc: "Comprehensive ML techniques and methodologies",
    level: 90,
    keySkills: ["Supervised Learning", "Unsupervised Learning", "Ensemble Methods", "Feature Engineering", "Model Evaluation"]
  },
  {
    icon: "D",
    iconBg: "bg-cyan-500/20 text-cyan-400",
    title: "Deep Learning",
    desc: "Advanced deep learning architectures and frameworks",
    level: 85,
    keySkills: ["Neural Networks", "CNN", "RNN", "LSTM", "Transformers", "BERT", "TensorFlow", "PyTorch"]
  },
  {
    icon: "D",
    iconBg: "bg-orange-500/20 text-orange-400",
    title: "Data Processing & Analysis",
    desc: "Data manipulation, cleaning, and statistical analysis",
    level: 92,
    keySkills: ["Pandas", "NumPy", "Data Cleaning", "EDA", "Statistical Analysis"]
  },
  {
    icon: "D",
    iconBg: "bg-indigo-500/20 text-indigo-400",
    title: "Data Visualization",
    desc: "Creating compelling visualizations and interactive dashboards",
    level: 88,
    keySkills: ["Matplotlib", "Seaborn", "Plotly", "Streamlit", "Power BI"]
  },
  {
    icon: "N",
    iconBg: "bg-rose-500/20 text-rose-400",
    title: "Natural Language Processing",
    desc: "NLP techniques and language models",
    level: 80,
    keySkills: ["Text Preprocessing", "Sentiment Analysis", "Tokenization", "BERT"]
  },
  {
    icon: "T",
    iconBg: "bg-teal-500/20 text-teal-400",
    title: "Tools & Technologies",
    desc: "Essential tools and technologies for development",
    level: 85,
    keySkills: ["Git", "Jupyter Notebook", "VS Code", "Excel", "APIs"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold font-outfit text-center mb-16 relative"
        >
          Technical Skills
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 hover:bg-zinc-900/80 transition-all hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${data.iconBg}`}>
                  {data.icon}
                </div>
                <h3 className="text-xl font-bold font-outfit text-white">
                  {data.title}
                </h3>
              </div>
              
              <p className="text-sm text-zinc-400 mb-6 min-h-[40px]">
                {data.desc}
              </p>

              <div className="mb-6">
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-white">Proficiency Level</span>
                  <span className="text-yellow-500">{data.level}%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${data.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-yellow-500 h-2.5 rounded-full"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white mb-3">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {data.keySkills.map((skill, i) => (
                    <span 
                      key={i}
                      className="bg-zinc-800/80 border border-zinc-700 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
