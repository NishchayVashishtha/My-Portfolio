"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Designed & Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            by
            <span className="gradient-text font-semibold">Nishchay Vashishtha</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
