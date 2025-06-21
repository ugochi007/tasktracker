import { motion } from "framer-motion";
import { Github, Linkedin, Dribbble } from "lucide-react";

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <i className="fab fa-behance text-lg"></i>, href: "#", label: "Behance" },
  { icon: <Dribbble className="w-5 h-5" />, href: "#", label: "Dribbble" }
];

export default function SocialSidebar() {
  return (
    <div className="absolute left-[-4rem] top-1/3 hidden lg:flex flex-col space-y-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-brand-primary hover:scale-110 transition-all"
          aria-label={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
