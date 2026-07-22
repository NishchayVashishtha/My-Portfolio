"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiPython, SiPandas, SiNumpy, SiScikitlearn, SiStreamlit,
  SiMysql, SiJupyter, SiFastapi
} from "react-icons/si";
import { Coffee, BarChart3, Database, LineChart, Zap } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Pandas", icon: SiPandas, color: "#150458" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Matplotlib", icon: LineChart, color: "#11557c" },
        { name: "Seaborn", icon: BarChart3, color: "#4C9A9B" },
        { name: "SQL", icon: SiMysql, color: "#4479A1" },
        { name: "Power BI", icon: Zap, color: "#F2C811" },
        { name: "Jupyter", icon: SiJupyter, color: "#F37726" },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "EDA", icon: Database, color: "#06B6D4" },
        { name: "Regression", icon: LineChart, color: "#8B5CF6" },
        { name: "Statistics", icon: BarChart3, color: "#EC4899" },
      ],
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
      ],
    },
    {
      title: "Problem Solving",
      skills: [
        { name: "Core Java", icon: Coffee, color: "#007396" },
        { name: "DSA (100+)", icon: Coffee, color: "#f89820" },
      ],
    },
  ];

  const concepts = [
    "Exploratory Data Analysis (EDA)",
    "Statistical Analysis",
    "Supervised Learning",
    "Unsupervised Learning",
    "Logistic Regression",
    "Data Visualization",
    "Feature Engineering",
    "Model Evaluation",
  ];

  return (
    <section id="skills" className="py-20 bg-black/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Core competencies in AI, Data Science, and Python Development
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-6 text-cyan-400">{category.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-black/50 hover:bg-black/70 transition-all group cursor-pointer"
                      whileHover={{ y: -5 }}
                    >
                      <skill.icon 
                        className="w-8 h-8 group-hover:scale-110 transition-transform" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-xs text-gray-400 text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ML Concepts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="gradient-text">Core ML & Data Science Concepts</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {concepts.map((concept, index) => (
                <motion.span
                  key={concept}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-sm hover:border-cyan-500 transition-all cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {concept}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
