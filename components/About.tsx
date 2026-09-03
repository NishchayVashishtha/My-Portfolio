"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Code2, TrendingUp } from "lucide-react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Brain,
      title: "Gen AI & LLM Expert",
      description: "Building RAG systems, multi-agent workflows with LangChain, Mistral AI, and ChromaDB",
    },
    {
      icon: Database,
      title: "ML Engineering",
      description: "Production AI with FastAPI, TensorFlow, Deep Learning (ANN, CNN, RNN, Transformers)",
    },
    {
      icon: Code2,
      title: "Strong Problem Solver",
      description: "150+ DSA problems solved in Java with expertise in OOP and algorithms",
    },
    {
      icon: TrendingUp,
      title: "AI Application Builder",
      description: "End-to-end AI systems from model training to deployment with Docker & MLOps",
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
            Passionate about building intelligent AI/ML solutions that solve real-world problems
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a <span className="text-cyan-400 font-semibold">B.Tech Computer Science (4th Year)</span> student 
                at <span className="text-cyan-400 font-semibold">BML Munjal University</span>, specializing in 
                <span className="text-blue-400 font-semibold"> Generative AI</span>, 
                <span className="text-purple-400 font-semibold"> Large Language Models (LLMs)</span>, and 
                <span className="text-cyan-400 font-semibold"> ML Engineering</span>.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                My expertise includes building <span className="text-cyan-400 font-semibold">RAG-powered AI systems</span> with 
                <span className="text-blue-400 font-semibold"> LangChain</span>, deploying 
                <span className="text-purple-400 font-semibold"> production-ready APIs with FastAPI</span>, and implementing 
                <span className="text-cyan-400 font-semibold"> multi-agent AI workflows</span>. Proficient in TensorFlow, 
                ChromaDB, and NLP with hands-on experience in transformers and attention mechanisms.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With <span className="text-cyan-400 font-semibold">150+ DSA problems solved in Java</span>, I combine strong 
                algorithmic thinking with cutting-edge AI/ML implementation. Completed comprehensive training in Deep Learning 
                (ANN, CNN, RNN), Generative AI, and MLOps ecosystem (Git, Docker, Kubernetes).
              </p>
            </motion.div>

            {/* Photo & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Profile Photo */}
              <div className="relative mb-8 max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                  <Image
                    src="/profile.jpeg"
                    alt="Nishchay Vashishtha - AI/ML Engineer"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">AI/ML</div>
                  <div className="text-xs">Engineer</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/30 text-center">
                  <div className="text-3xl font-bold text-cyan-400">150+</div>
                  <div className="text-gray-400 text-sm">DSA Problems</div>
                  <div className="text-gray-500 text-xs mt-1">Java</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-500/30 text-center">
                  <div className="text-3xl font-bold text-blue-400">5+</div>
                  <div className="text-gray-400 text-sm">AI Projects</div>
                  <div className="text-gray-500 text-xs mt-1">Deployed</div>
                </div>
                <div className="col-span-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 text-center">
                  <div className="text-3xl font-bold text-purple-400">RAG + LLM</div>
                  <div className="text-gray-400 text-sm">Specialized In</div>
                  <div className="text-gray-500 text-xs mt-1">LangChain & Generative AI</div>
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
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all group"
              >
                <item.icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
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
