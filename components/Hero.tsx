"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Brain, ArrowDown } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/NishchayVashishtha", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nishchayvashishtha/", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/NishchayVashishtha/", label: "LeetCode" },
    { icon: Mail, href: "mailto:nishchayvashishtha0505@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-blue-400 text-lg font-mono">Hi, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">Nishchay Vashishtha</span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl text-gray-400 mb-6 flex items-center justify-center gap-3"
          >
            <Brain className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
            AI Engineer & Data Science Specialist
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            B.Tech CSE (4th Year) at BMU specializing in <span className="text-cyan-400 font-semibold">Generative AI</span>, 
            <span className="text-blue-400 font-semibold"> LLMs & RAG Systems</span>, and 
            <span className="text-purple-400 font-semibold"> ML Engineering</span>. 
            Expert in LangChain, FastAPI, and production AI applications with 150+ DSA problems solved in Java.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-medium transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Brain size={20} />
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 justify-center mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={32} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
