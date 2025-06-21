import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";
import { Link } from "wouter";

const allProjects = [
  {
    id: 1,
    title: "Bella Vista Italian Restaurant",
    slug: "restaurant",
    description: "A modern, elegant website for a new Italian restaurant featuring online menu browsing, table reservations, and location details.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    client: "Bella Vista Restaurant",
    timeline: "3 weeks",
    category: "Business Website",
    tags: ["Restaurant", "Reservations", "Menu"]
  },
  {
    id: 2,
    title: "RISE ATHLETE STUDIO",
    slug: "fitness",
    description: "A dynamic website for a new fitness studio featuring class schedules, trainer profiles, and membership signup forms.",
    image: "/images/rise-athlete-studio.jpg",
    client: "RISE ATHLETE STUDIO",
    timeline: "4 weeks",
    category: "Business Website",
    tags: ["Fitness", "Booking", "Memberships"]
  },
  {
    id: 3,
    title: "Luna Fashion Boutique",
    slug: "boutique",
    description: "An elegant e-commerce website for a new fashion boutique with product catalogs and secure payment processing.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMijA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    client: "Luna Fashion Boutique",
    timeline: "6 weeks",
    category: "E-commerce Website",
    tags: ["Fashion", "E-commerce", "Payments"]
  },

  {
    id: 4,
    title: "MIKE COFFEE SHOP",
    slug: "coffee",
    description: "Artisan coffee shop website with online ordering, subscription services, and coffee education content.",
    image: "/images/mike-coffee-shop.png",
    client: "MIKE COFFEE SHOP",
    timeline: "4 weeks",
    category: "E-commerce Website",
    tags: ["Coffee", "Subscriptions", "E-commerce"]
  }
];

export default function AllProjects() {
  return (
    <Layout>
      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All Client Websites
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the complete portfolio of professional websites I've created for businesses. 
              Each project represents a unique solution tailored to help businesses succeed online.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 h-full">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    {/* Project Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {project.client}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.timeline}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-brand-primary/10 text-brand-primary rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center">
                      <Link href={`/project/${project.slug}`}>
                        <Button size="sm" className="bg-brand-primary hover:bg-brand-primary/90 text-white">
                          View Details
                        </Button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(`/project/${project.slug}`, '_blank')}
                        className="text-brand-secondary hover:text-brand-primary transition-colors"
                        title="View Live Website"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <Card className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-300">Websites Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">4.5★</div>
                  <div className="text-gray-300">Average Rating</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg mb-6 opacity-90">
                Join the growing list of successful businesses that have launched their online presence with professional websites.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/#pricing">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
                    View Pricing
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button className="bg-white text-brand-primary hover:bg-gray-100">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}