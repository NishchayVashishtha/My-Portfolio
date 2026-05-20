"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Trophy, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "Proficient in React, Node.js, MongoDB, and modern web technologies",
    },
    {
      icon: Rocket,
      title: "Product Mindset",
      description: "Building scalable, user-centric applications with focus on impact",
    },
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "3rd Position at DTU CryptoForge Hackathon with Team V-Sentinels",
    },
    {
      icon: Users,
      title: "Problem Solver",
      description: "60+ DSA problems solved, 100x Devs Cohort 3 graduate",
    },
  ];

  return (
    <section id="about" className="py-20 bg-black/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Passionate about building intelligent solutions that make a difference
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a <span className="text-blue-400 font-semibold">B.Tech Computer Science Engineering</span> student 
                at <span className="text-blue-400 font-semibold">BMU (BML Munjal University)</span>, graduating in 2027. 
                With a strong foundation in full-stack development and AI/ML, I specialize in creating scalable, 
                intelligent web applications.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                My journey includes building cutting-edge projects like <span className="text-purple-400 font-semibold">Edge-Fog 
                Hybrid Systems for FinTech Fraud Detection</span>, <span className="text-purple-400 font-semibold">Decentralized 
                E-Voting Systems</span>, and <span className="text-purple-400 font-semibold">AI-Driven Data Privacy Ecosystems</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I thrive in hackathons, love solving complex DSA problems, and am always exploring new technologies 
                to build products that create real-world impact. Currently focused on mastering system design, 
                distributed systems, and AI integrations.
              </p>
            </motion.div>

            {/* Stats/Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-2">7.28</div>
                  <div className="text-gray-400 text-xl">CGPA</div>
                  <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-400">60+</div>
                      <div className="text-gray-400 text-sm">DSA Problems</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-400">3+</div>
                      <div className="text-gray-400 text-sm">Major Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all group"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
