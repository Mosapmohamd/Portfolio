"use client";

import { motion } from "framer-motion";
import { Bot, Search, Languages, LineChart } from "lucide-react";

const projects = [
  {
    title: "Agentic AI System",
    desc: "Autonomous multi-step AI framework capable of planning, executing, and iterating tasks using tool-calling. Integrated external tools (web search, file I/O) and a structured Observe -> Think -> Act loop.",
    tags: ["Agentic AI", "LLMs", "Tool-Calling"],
    icon: <Bot className="w-8 h-8 text-primary" />,
  },
  {
    title: "Mini-RAG System",
    desc: "Lightweight Retrieval-Augmented Generation pipeline. Implemented document chunking, embedding generation, and similarity search with a vector database for context-aware LLM response generation via a clean API.",
    tags: ["RAG", "Vector DB", "NLP"],
    icon: <Search className="w-8 h-8 text-secondary" />,
  },
  {
    title: "Multilingual Sentiment Analysis",
    desc: "Graduation project (DEPI): Built an NLP pipeline for Arabic/English datasets. Handled preprocessing, back-translation augmentation, and benchmarked Logistic Regression, SVM, LSTM, and BERT models with Streamlit dashboards.",
    tags: ["BERT", "LSTM", "NLP", "Streamlit"],
    icon: <Languages className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Customer Churn Prediction",
    desc: "Deployed a Streamlit-based Random Forest model achieving 91% accuracy to predict churn risk. Outperformed manual methods by 28%, enabling significant reduction in acquisition costs through targeted intervention.",
    tags: ["Random Forest", "Data Science", "EDA"],
    icon: <LineChart className="w-8 h-8 text-purple-400" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold font-outfit text-center mb-16 relative"
        >
          Featured Projects
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card flex flex-col hover-glow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-zinc-800/50 rounded-xl">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white font-outfit">{project.title}</h3>
              </div>
              <p className="text-zinc-300 mb-6 flex-grow leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm font-medium font-outfit"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
