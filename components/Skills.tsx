"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiGit, SiDocker, SiLinux, SiFigma, SiTensorflow, SiFlask 
} from "react-icons/si";
import { Coffee } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: Coffee, color: "#007396" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "Flask", icon: SiFlask, color: "#000000" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      ],
    },
  ];

  const concepts = [
    "Data Structures & Algorithms",
    "AI/ML & Deep Learning",
    "Zero-Trust Architecture",
    "Web3 & Blockchain",
    "REST APIs",
    "System Design (HLD/LLD)",
    "Distributed Systems",
    "Federated Learning",
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
            Technologies and tools I use to bring ideas to life
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-6 text-blue-400">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
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

          {/* Concepts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="gradient-text">Core Concepts</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {concepts.map((concept, index) => (
                <motion.span
                  key={concept}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-sm hover:border-blue-500 transition-all cursor-default"
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
