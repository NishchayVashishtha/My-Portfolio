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
      title: "AI & ML Specialist",
      description: "Building intelligent systems with Python, Scikit-Learn, and Statistical Analysis",
    },
    {
      icon: Database,
      title: "Data Science Expert",
      description: "Expert in EDA, data visualization with Pandas, NumPy, Matplotlib, and Power BI",
    },
    {
      icon: Code2,
      title: "Strong Problem Solver",
      description: "100+ DSA problems solved in Java with strong algorithmic thinking",
    },
    {
      icon: TrendingUp,
      title: "Analytics Focused",
      description: "Turning data into actionable insights with statistical modeling and ML",
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
                I'm a <span className="text-cyan-400 font-semibold">4th year B.Tech Computer Science Engineering</span> student 
                at <span className="text-cyan-400 font-semibold">BMU (BML Munjal University)</span>, specializing in 
                <span className="text-blue-400 font-semibold"> AI Engineering</span>, 
                <span className="text-purple-400 font-semibold"> Data Science</span>, and 
                <span className="text-cyan-400 font-semibold"> Python Development</span>.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                My expertise lies in building <span className="text-cyan-400 font-semibold">end-to-end Machine Learning projects</span>, 
                performing <span className="text-blue-400 font-semibold">Exploratory Data Analysis (EDA)</span>, and creating 
                <span className="text-purple-400 font-semibold"> interactive data visualizations</span>. I've deployed production-ready 
                ML applications using <span className="text-cyan-400 font-semibold">Streamlit</span> and 
                <span className="text-blue-400 font-semibold"> FastAPI</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a strong foundation in <span className="text-cyan-400 font-semibold">Data Structures & Algorithms</span> (100+ problems in Java), 
                I combine analytical thinking with practical ML implementation to deliver impactful solutions in healthcare prediction, 
                statistical modeling, and data-driven decision making.
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
                    alt="Nishchay Vashishtha - AI Engineer"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">7.33</div>
                  <div className="text-xs">CGPA</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/30 text-center">
                  <div className="text-3xl font-bold text-cyan-400">100+</div>
                  <div className="text-gray-400 text-sm">DSA Problems</div>
                  <div className="text-gray-500 text-xs mt-1">Java</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-500/30 text-center">
                  <div className="text-3xl font-bold text-blue-400">2+</div>
                  <div className="text-gray-400 text-sm">ML Projects</div>
                  <div className="text-gray-500 text-xs mt-1">Deployed</div>
                </div>
                <div className="col-span-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 text-center">
                  <div className="text-3xl font-bold text-purple-400">86.14%</div>
                  <div className="text-gray-400 text-sm">ML Model Accuracy</div>
                  <div className="text-gray-500 text-xs mt-1">Heart Disease Prediction</div>
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
