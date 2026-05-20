"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      type: "education",
      title: "B.Tech Computer Science Engineering",
      organization: "BML Munjal University (BMU)",
      period: "2023 - 2027",
      description: "CGPA: 7.28 | Specializing in Full-Stack Development, AI/ML, and System Design",
      icon: GraduationCap,
    },
    {
      type: "internship",
      title: "UI/UX Design Intern",
      organization: "Rannlab Technologies Pvt. Ltd.",
      period: "June 2025 - July 2025",
      description: "Designed end-to-end UI/UX for VETGPT, creating intuitive dashboards and interactive learning components. Established a scalable Design System in Figma for pixel-perfect design-to-code transition.",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Class XII (CBSE)",
      organization: "Senior Secondary Education",
      period: "2022",
      description: "74.40% | Strong foundation in Mathematics and Computer Science",
      icon: GraduationCap,
    },
    {
      type: "education",
      title: "Class X (CBSE)",
      organization: "Secondary Education",
      period: "2020",
      description: "83.33% | Academic excellence with focus on STEM subjects",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            My journey through education and professional experiences
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center z-10 border-4 border-black">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-24 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all">
                      <span className="text-blue-400 text-sm font-mono">{item.period}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-1">{item.title}</h3>
                      <h4 className="text-purple-400 font-semibold mb-3">{item.organization}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
