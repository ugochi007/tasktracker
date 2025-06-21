import { motion } from "framer-motion";

interface BadgePillProps {
  text: string;
  variant?: "primary" | "secondary" | "dark" | "light";
  className?: string;
}

export default function BadgePill({ text, variant = "primary", className = "" }: BadgePillProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-brand-primary text-white";
      case "secondary":
        return "bg-brand-secondary text-white";
      case "dark":
        return "bg-gray-800 text-white";
      case "light":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-brand-primary text-white";
    }
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-full text-sm font-medium inline-block ${getVariantClasses()} ${className}`}
    >
      {text}
    </motion.span>
  );
}
