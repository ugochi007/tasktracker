import { motion } from "framer-motion";
import BadgePill from "./badge-pill";
import FloatingCard from "./floating-card";
import SocialSidebar from "./social-sidebar";
import { Star, Users, Code, Palette } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative flex justify-center items-center min-h-screen py-20">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-3xl shadow-2xl overflow-visible p-8 md:p-12"
        >
          
          {/* Social Sidebar */}
          <SocialSidebar />

          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-brand-black mb-4">
                Hi, I'm <span className="gradient-text">Benedict</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">Web Developer & Designer for New Businesses</p>
              <p className="text-lg text-gray-500 mb-8 max-w-lg">
                I help new businesses establish their online presence with professional, modern websites. 
                From concept to launch, I create websites that help your business grow.
              </p>
              
              {/* Skill Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <BadgePill text="Web Development" variant="primary" />
                <BadgePill text="Website Design" variant="secondary" />
                <BadgePill text="Business Sites" variant="dark" />
                <BadgePill text="Responsive Design" variant="light" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-4 bg-brand-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border-2 border-brand-primary text-brand-primary rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300"
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>

            {/* Portrait Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 mt-12 lg:mt-0 lg:pl-12 relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                {/* Main Portrait */}
                <img
                  src="/images/benedict-portrait.jpg"
                  alt="Benedict - Web Developer Portrait"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
                
                {/* Floating Info Cards */}
                <FloatingCard
                  className="absolute -top-4 -right-4 animate-float"
                  icon={<Star className="w-6 h-6 text-white" />}
                  value="4.5"
                  label="Client Rating"
                  bgColor="bg-brand-primary"
                />

                <FloatingCard
                  className="absolute -bottom-6 -left-6 animate-float-reverse"
                  icon={<Users className="w-6 h-6 text-white" />}
                  value="500+"
                  label="Websites Built"
                  bgColor="bg-brand-secondary"
                />

                <FloatingCard
                  className="absolute top-1/2 -left-8 animate-pulse-slow"
                  icon={<Code className="w-4 h-4 text-white" />}
                  compact
                  bgColor="bg-brand-primary"
                />

                <FloatingCard
                  className="absolute top-1/4 -right-8 animate-float"
                  icon={<Palette className="w-4 h-4 text-white" />}
                  compact
                  bgColor="bg-brand-secondary"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
