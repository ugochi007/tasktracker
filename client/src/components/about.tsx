import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, PencilRuler } from "lucide-react";

const timeline = [
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 - Present",
    description: "Creating professional websites for new businesses, helping entrepreneurs establish their online presence and grow their customer base.",
    icon: <Code className="w-6 h-6 text-white" />,
    color: "bg-brand-primary"
  },
  {
    title: "Web Developer & Designer",
    company: "Local Agency",
    period: "2021 - 2022",
    description: "Developed websites for small businesses and startups, gaining experience in client communication and project management.",
    icon: <PencilRuler className="w-6 h-6 text-white" />,
    color: "bg-brand-secondary"
  },
  {
    title: "Junior Web Developer",
    company: "Tech Startup",
    period: "2020 - 2021",
    description: "Started my career learning modern web technologies and best practices for building responsive, user-friendly websites.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    color: "bg-gray-800"
  }
];

const skills = [
  { name: "Web Development", percentage: 95, color: "bg-brand-primary" },
  { name: "Website Design", percentage: 90, color: "bg-brand-secondary" },
  { name: "Responsive Design", percentage: 90, color: "bg-brand-primary" },
  { name: "Business Websites", percentage: 85, color: "bg-brand-secondary" }
];

const tools = [
  { name: "Figma", icon: "fab fa-figma" },
  { name: "React", icon: "fab fa-react" },
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "Sass/CSS", icon: "fab fa-sass" }
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Card className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 3 years of experience in web development and design, I specialize in creating professional websites 
              for new businesses. I help entrepreneurs and startups establish their online presence with modern, responsive websites 
              that attract customers and drive business growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">My Journey</h3>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className={`font-medium ${item.color === 'bg-brand-primary' ? 'text-brand-primary' : item.color === 'bg-brand-secondary' ? 'text-brand-secondary' : 'text-gray-600'}`}>
                        {item.company} • {item.period}
                      </p>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className={`${skill.color} h-2 rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tools & Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8"
              >
                <h4 className="font-bold text-gray-800 mb-4">Tools & Technologies</h4>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <i className={`${tool.icon} text-brand-primary text-lg`}></i>
                      <span className="text-gray-700">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
}
