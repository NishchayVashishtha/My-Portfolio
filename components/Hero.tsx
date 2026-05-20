"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, ArrowDown } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/NishchayVashishtha", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nishchayvashishtha/", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/NishchayVashishtha/", label: "LeetCode" },
    { icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/profile/nishchayvashbeju", label: "GeeksForGeeks" },
    { icon: Mail, href: "mailto:nishchayvashishtha@outlook.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: "1s" }}></div>
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
            <span className="text-blue-400 text-lg font-mono">Hi, my name is</span>
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
            className="text-2xl md:text-4xl text-gray-400 mb-6"
          >
            Full-Stack Developer & AI Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            B.Tech CSE student at BMU specializing in building intelligent, scalable web applications 
            with React, Node.js, and AI/ML technologies. Passionate about product engineering and 
            creating impactful solutions.
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
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 size={20} />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg font-medium transition-colors"
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
                className="text-gray-400 hover:text-blue-400 transition-colors"
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
