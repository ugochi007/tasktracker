import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    id: 1,
    title: "Local Restaurant Website",
    description: "Created a modern website for a new Italian restaurant featuring online menu, reservations, and location details to attract local customers.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Business Website", "Responsive"],
    link: "/project/restaurant"
  },
  {
    id: 2,
    title: "RISE ATHLETE STUDIO",
    description: "Built a professional website for a new fitness studio with class schedules, trainer profiles, and membership signup forms.",
    image: "/images/rise-athlete-studio.jpg",
    tags: ["Business Website", "Forms"],
    link: "/project/fitness"
  },
  {
    id: 3,
    title: "Boutique E-commerce Store",
    description: "Developed an online store for a new fashion boutique with product catalog, shopping cart, and secure payment processing.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["E-commerce", "Payment"],
    link: "/project/boutique"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Recent Client Websites</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional websites I've created for new businesses, helping them establish their online presence and attract customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 h-full">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 text-xs rounded ${
                            tag === "Business Website" || tag === "Responsive"
                              ? "bg-brand-primary/10 text-brand-primary"
                              : "bg-brand-secondary/10 text-brand-secondary"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={project.link}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer"
                        title="View Project Details"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Client Websites
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
