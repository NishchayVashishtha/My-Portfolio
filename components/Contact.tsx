"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiGithub, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nishchayvashishtha@outlook.com",
      href: "mailto:nishchayvashishtha@outlook.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9084683907",
      href: "tel:+919084683907",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: SiGithub,
      label: "GitHub",
      href: "https://github.com/NishchayVashishtha",
      color: "#ffffff",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nishchayvashishtha/",
      color: "#0A66C2",
    },
    {
      icon: SiLeetcode,
      label: "LeetCode",
      href: "https://leetcode.com/u/NishchayVashishtha/",
      color: "#FFA116",
    },
    {
      icon: SiGeeksforgeeks,
      label: "GeeksForGeeks",
      href: "https://www.geeksforgeeks.org/profile/nishchayvashbeju",
      color: "#2F8D46",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <info.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 flex items-center justify-center transition-all group"
                    whileHover={{ y: -5, scale: 1.1 }}
                    aria-label={social.label}
                  >
                    <social.icon 
                      className="w-6 h-6 group-hover:scale-110 transition-transform" 
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
