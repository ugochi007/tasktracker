import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic Website",
    price: "$300",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO setup",
      "Mobile optimization",
      "1 month support"
    ],
    popular: false,
    color: "bg-white"
  },
  {
    name: "Business Website",
    price: "$500",
    description: "Ideal for growing businesses",
    features: [
      "Up to 10 pages",
      "Custom design",
      "Contact & quote forms",
      "Advanced SEO",
      "Social media integration",
      "Google Analytics setup",
      "3 months support"
    ],
    popular: true,
    color: "bg-gradient-to-br from-brand-primary to-brand-secondary"
  },
  {
    name: "E-commerce Store",
    price: "$800",
    originalPrice: "$1000",
    description: "Complete online store solution",
    features: [
      "Unlimited pages",
      "Shopping cart system",
      "Payment integration",
      "Product management",
      "Inventory tracking",
      "Advanced SEO",
      "6 months support"
    ],
    popular: false,
    color: "bg-white"
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional websites for your business at affordable prices. All packages include modern design, 
            mobile optimization, and ongoing support to help your business succeed online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <Card className={`${plan.color} ${plan.popular ? 'text-white' : 'text-gray-800'} rounded-2xl shadow-xl overflow-hidden h-full`}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mb-4 ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                    <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-brand-primary'}`}>
                      {plan.price}
                      {plan.originalPrice && (
                        <span className={`text-lg line-through ml-2 ${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-500'}`}>
                      One-time payment
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-brand-primary'} flex-shrink-0`} />
                        <span className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-white text-brand-primary hover:bg-gray-100'
                        : 'bg-brand-primary text-white hover:bg-brand-primary/90'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-4">
            Need something custom? All packages can be tailored to your specific business needs.
          </p>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-800"
          >
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}