import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">Benedict</div>
              <p className="text-gray-300">Web Developer & Designer for New Businesses</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-brand-primary transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-6 h-6" />
              </motion.button>
              <div className="text-gray-300 text-sm">
                © 2024 Benedict. All rights reserved.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
