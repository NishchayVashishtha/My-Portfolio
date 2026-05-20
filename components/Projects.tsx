"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Edge-Fog Hybrid System: AI-Driven FinTech Fraud Detection",
      description: "Engineered a scalable Edge-Fog-Cloud architecture utilizing Federated Machine Learning to intercept high-velocity financial fraud at the network edge, ensuring zero transmission of raw PII for strict enterprise data privacy.",
      tech: ["MATLAB", "Federated Learning", "Distributed Cloud Architecture"],
      period: "April 2026 - May 2026",
      highlights: [
        "Zero-Trust AI routing engine with adaptive risk thresholds",
        "Reduced network latency by up to 5x",
        "Mathematically minimized economic cost of false positives",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Q-Shield: AI-Driven Decentralized E-Voting Identity System",
      description: "Developed a secure e-voting pipeline utilizing TensorFlow.js for client-side identity verification and real-time liveness checks, ensuring strict data privacy before server transmission.",
      tech: ["Python", "TensorFlow.js", "React.js", "Algorand", "Flask"],
      period: "Mar 2026 - April 2026",
      highlights: [
        "Zero-Trust KYC AI for secure identity verification",
        "Bot Detection Scalable Architecture with custom Watchdog AI",
        "Integrated with Flask backend and distributed ledger for encrypted data handling",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "AlgoBurn: AI-Driven Autonomous Data Privacy Ecosystem",
      description: "Automated FinTech Compliance AI Agent that engineered an autonomous data privacy pipeline where a Python AI agent continuously monitors distributed networks and automatically executes secure data purging (Kill Switch) across enterprise databases upon user consent revocation.",
      tech: ["Python", "Node.js", "React.js", "PostgreSQL", "REST APIs", "Distributed Ledgers"],
      period: "Feb 2026 - Mar 2026",
      highlights: [
        "Scalable Full-Stack Architecture with custom Node.js SDK",
        "Secure REST APIs for zero-trust security",
        "Tamper-proof cryptographic audit trails for DPDP regulatory adherence",
      ],
      github: "#",
      demo: "#",
    },
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
            Building intelligent, scalable solutions with cutting-edge technologies
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
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <span className="text-blue-400 text-sm font-mono">{project.period}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-black/50 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-black/50 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-blue-400 mr-2">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/NishchayVashishtha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
