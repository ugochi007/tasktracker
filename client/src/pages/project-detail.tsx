import { useRoute } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, User, Globe, Smartphone } from "lucide-react";
import { Link } from "wouter";

const projectsData = {
  "restaurant": {
    id: 1,
    title: "Bella Vista Italian Restaurant",
    description: "A modern, elegant website for a new Italian restaurant featuring online menu browsing, table reservations, and location details to help attract local customers and build an online presence.",
    fullDescription: "Bella Vista needed a professional website to establish their brand and attract customers in their first year of operation. The challenge was creating an appetizing visual experience while maintaining fast loading times and mobile responsiveness for customers browsing on-the-go.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    ],
    client: "Bella Vista Restaurant",
    timeline: "3 weeks",
    category: "Business Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Interactive menu with high-quality food photography",
      "Online table reservation system",
      "Location and contact information",
      "Chef and restaurant story section",
      "Mobile-optimized for smartphone users",
      "SEO optimization for local search"
    ],
    challenge: "The restaurant needed to establish an online presence quickly before their grand opening. They required a website that would showcase their authentic Italian cuisine and create an inviting atmosphere that would encourage bookings.",
    solution: "I created a warm, inviting design using rich colors and appetizing food photography. The site features an easy-to-navigate menu, simple reservation system, and compelling storytelling about the restaurant's heritage.",
    results: [
      "40% increase in table reservations within first month",
      "Improved local SEO ranking for 'Italian restaurant near me'",
      "95% mobile user satisfaction score",
      "Featured in local food blogs due to professional presentation"
    ],
    testimonial: {
      text: "Benedict delivered exactly what we needed. Our website looks professional and has helped us attract so many new customers. The reservation system works perfectly!",
      author: "Maria Rossi",
      position: "Owner, Bella Vista Restaurant"
    }
  },
  "fitness": {
    id: 2,
    title: "RISE ATHLETE STUDIO",
    description: "A dynamic website for a new fitness studio featuring class schedules, trainer profiles, membership options, and online signup forms to help build their member base.",
    fullDescription: "RISE ATHLETE STUDIO was launching their first fitness studio location and needed a website that would convey energy, professionalism, and community. They wanted to showcase their trainers, class offerings, and make it easy for potential members to join.",
    image: "/images/rise-athlete-studio.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    ],
    client: "RISE ATHLETE STUDIO",
    timeline: "4 weeks",
    category: "Business Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "Form Integration"],
    features: [
      "Interactive class schedule and booking system",
      "Trainer profiles with specializations",
      "Membership pricing and signup forms",
      "Virtual tour of the fitness facility",
      "Success stories and testimonials",
      "Mobile app integration"
    ],
    challenge: "RISE ATHLETE STUDIO needed to differentiate themselves in a competitive fitness market while making it easy for people to understand their class offerings and join as members.",
    solution: "I designed an energetic, motivational website with bold colors and dynamic imagery. The site includes an intuitive class booking system and detailed trainer profiles to build trust with potential members.",
    results: [
      "200+ new memberships signed up online in first 2 months",
      "60% of class bookings now made through website",
      "Reduced front desk workload by 30%",
      "98% user satisfaction with booking system"
    ],
    testimonial: {
      text: "The website Benedict created has been a game-changer for our business. Members love being able to book classes online, and we've seen a huge increase in signups.",
      author: "Jake Thompson",
      position: "Owner, RISE ATHLETE STUDIO"
    }
  },
  "boutique": {
    id: 3,
    title: "Luna Fashion Boutique",
    description: "An elegant e-commerce website for a new fashion boutique featuring product catalogs, shopping cart functionality, and secure payment processing to sell their curated clothing collection online.",
    fullDescription: "Luna Fashion Boutique wanted to expand beyond their physical store and reach customers online. They needed an e-commerce solution that would showcase their carefully curated fashion pieces while providing a seamless shopping experience.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMijA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    gallery: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    ],
    client: "Luna Fashion Boutique",
    timeline: "6 weeks",
    category: "E-commerce Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "E-commerce Platform", "Payment Gateway"],
    features: [
      "Product catalog with high-quality imagery",
      "Shopping cart and checkout system",
      "Secure payment processing (Stripe integration)",
      "Customer account management",
      "Inventory tracking and management",
      "Order tracking and email notifications"
    ],
    challenge: "Luna needed to translate their boutique's intimate, personalized shopping experience to an online platform while ensuring security and ease of use for their customers.",
    solution: "I created an elegant, minimalist design that lets the fashion pieces speak for themselves. The e-commerce platform includes secure payment processing and an intuitive admin panel for inventory management.",
    results: [
      "300% increase in sales within 3 months of launch",
      "45% of total revenue now comes from online sales",
      "99.8% payment processing success rate",
      "Expanded customer base to 3 neighboring cities"
    ],
    testimonial: {
      text: "Benedict transformed our business! The e-commerce site he built has opened up so many new opportunities. Our online sales have exceeded all expectations.",
      author: "Sarah Chen",
      position: "Owner, Luna Fashion Boutique"
    }
  },
  "coffee": {
    id: 4,
    title: "MIKE COFFEE SHOP",
    description: "Artisan coffee shop website with online ordering, subscription services, and coffee education content to help build their customer base and increase sales.",
    fullDescription: "MIKE COFFEE SHOP wanted to expand their local coffee business by offering online ordering and delivery services. They needed a website that would showcase their artisan coffee blends while providing customers with convenient ordering options.",
    image: "/images/mike-coffee-shop.png",
    gallery: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    ],
    client: "MIKE COFFEE SHOP",
    timeline: "4 weeks",
    category: "E-commerce Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "E-commerce Platform", "Payment Gateway"],
    features: [
      "Online coffee ordering and delivery system",
      "Coffee subscription service setup",
      "Coffee education blog and brewing guides",
      "Customer loyalty program integration",
      "Mobile-optimized ordering experience",
      "Real-time inventory management"
    ],
    challenge: "MIKE COFFEE SHOP needed to transition from purely in-store sales to include online ordering while maintaining their personal touch and coffee expertise that customers loved.",
    solution: "I created a warm, inviting website that captures the cozy atmosphere of the coffee shop. The site features easy online ordering, educational content about coffee brewing, and a subscription service for regular customers.",
    results: [
      "150% increase in daily sales through online orders",
      "80+ coffee subscription customers within first month",
      "45% reduction in phone orders due to online system",
      "Featured in local business directory for excellent online presence"
    ],
    testimonial: {
      text: "Benedict's website has revolutionized our business. We now serve customers beyond our neighborhood, and the subscription service has created steady recurring revenue.",
      author: "Mike Rodriguez",
      position: "Owner, MIKE COFFEE SHOP"
    }
  }
};

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:slug");
  const project = params?.slug ? projectsData[params.slug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <Link href="/" className="text-brand-primary hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/#projects">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                  <p className="text-xl opacity-90">{project.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Project Info */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.fullDescription}</p>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.challenge}</p>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                </Card>

                {/* Features */}
                <Card className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Results */}
                <Card className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Results & Impact</h2>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Project Details */}
                <Card className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-brand-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Client</p>
                        <p className="font-medium text-gray-800">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-brand-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Timeline</p>
                        <p className="font-medium text-gray-800">{project.timeline}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-brand-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="font-medium text-gray-800">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Technologies */}
                <Card className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>

                {/* Testimonial */}
                <Card className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl shadow-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Client Testimonial</h3>
                  <blockquote className="text-sm leading-relaxed mb-4">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div>
                    <p className="font-medium">{project.testimonial.author}</p>
                    <p className="text-sm opacity-90">{project.testimonial.position}</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <Card className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <Card className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to start your project?
              </h2>
              <p className="text-gray-600 mb-6">
                Let's discuss how I can help bring your business online with a professional website.
              </p>
              <Link href="/#contact">
                <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}