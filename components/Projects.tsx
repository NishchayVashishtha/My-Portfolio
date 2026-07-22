"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Heart, DollarSign } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Heart Disease Prediction & Analysis",
      icon: Heart,
      description: "An end-to-end Machine Learning project featuring comprehensive Exploratory Data Analysis (EDA) on 918 patient records and a Logistic Regression model deployed as an interactive web application.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Streamlit", "Matplotlib", "Seaborn"],
      highlights: [
        "Performed in-depth EDA on 918 medical records with statistical analysis",
        "Built and trained Logistic Regression model achieving 86.14% accuracy",
        "Interactive Streamlit web app for real-time heart disease risk prediction",
        "Data visualization with correlation heatmaps and distribution plots",
        "Feature engineering and preprocessing pipeline for robust predictions"
      ],
      metrics: [
        { label: "Model Accuracy", value: "86.14%" },
        { label: "Dataset Size", value: "918 records" },
        { label: "Features Analyzed", value: "13 attributes" }
      ],
      github: "https://github.com/NishchayVashishtha/Heart_Disease_Prediciton/",
      demo: "https://heartdiseaseprediciton.streamlit.app/",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Bank Management System",
      icon: DollarSign,
      description: "A Python-based banking application deployed on Streamlit Cloud featuring secure authentication, comprehensive transaction handling, and JSON-based persistent storage for reliable data management.",
      tech: ["Python", "Streamlit", "JSON", "File I/O", "Object-Oriented Programming"],
      highlights: [
        "Secure PIN-based authentication system with validation",
        "Complete transaction management (deposits, withdrawals, transfers)",
        "JSON-based persistent storage for reliable data retention",
        "Object-oriented design with modular architecture",
        "User-friendly Streamlit interface with real-time balance updates",
        "Transaction history tracking and account management features"
      ],
      metrics: [
        { label: "Security", value: "PIN Auth" },
        { label: "Storage", value: "JSON-based" },
        { label: "Deployment", value: "Streamlit Cloud" }
      ],
      github: "https://github.com/NishchayVashishtha/Bank-Management-Project",
      demo: "https://bankmanagementpythonproject.streamlit.app/",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            End-to-end ML and Python applications deployed to production
          </p>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  {/* Header with Icon */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4 md:mt-0 md:ml-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-black/50 hover:bg-cyan-600/20 border border-gray-700 hover:border-cyan-500 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-lg bg-black/30">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                        <div className="text-xs text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features & Highlights:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-600/10 to-blue-600/10 text-cyan-400 border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/NishchayVashishtha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-600 hover:bg-cyan-600/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              View More Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
