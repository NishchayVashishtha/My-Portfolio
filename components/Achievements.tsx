"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Award, TrendingUp, Coffee } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Coffee,
      title: "100+ DSA Problems in Java",
      description: "Strong problem-solving foundation with over 100 Data Structures and Algorithms problems solved in Core Java",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Code,
      title: "ML Project Development",
      description: "Built and deployed production-ready ML models with 86%+ accuracy on real-world datasets",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintaining 7.28 CGPA while specializing in AI Engineering and Data Science",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const codingStats = [
    {
      platform: "LeetCode",
      icon: SiLeetcode,
      stats: "100+ Problems Solved",
      link: "https://leetcode.com/u/NishchayVashishtha/",
      color: "#FFA116",
      description: "Core Java • DSA"
    },
    {
      platform: "GitHub",
      icon: TrendingUp,
      stats: "Active Contributor",
      link: "https://github.com/NishchayVashishtha",
      color: "#3b82f6",
      description: "Python • ML Projects"
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-black/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Milestones in AI, Data Science, and Problem Solving
          </p>

          {/* Main Achievements */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coding Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="gradient-text">Coding & Development Profiles</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {codingStats.map((platform, index) => (
                <motion.a
                  key={platform.platform}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <platform.icon 
                      className="w-12 h-12 group-hover:scale-110 transition-transform" 
                      style={{ color: platform.color }}
                    />
                    <div>
                      <h4 className="text-xl font-bold">{platform.platform}</h4>
                      <p className="text-sm text-gray-500">{platform.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-lg font-semibold">{platform.stats}</p>
                  <div className="mt-4 text-cyan-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Profile
                    <span>→</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-center mb-6">
              <span className="gradient-text">GitHub Contributions</span>
            </h3>
            <div className="flex flex-col items-center gap-6">
              <img
                src="https://github-readme-stats.vercel.app/api?username=NishchayVashishtha&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=06b6d4&icon_color=06b6d4&text_color=c9d1d9"
                alt="GitHub Stats"
                className="rounded-lg w-full max-w-md"
              />
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=NishchayVashishtha&theme=radical&hide_border=true&background=0d1117&ring=06b6d4&fire=06b6d4&currStreakLabel=06b6d4"
                alt="GitHub Streak"
                className="rounded-lg w-full max-w-md"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
