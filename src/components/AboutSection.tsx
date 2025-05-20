import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="section-title mx-auto w-fit">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 px-4">
            I'm a Senior Full-Stack Developer with 6+ years of experience
            building modern web applications. My focus is on creating efficient,
            scalable, and user-friendly interfaces using the latest web
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">Contact Info</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    <a
                      href="mailto:rohithgupthaui97@gmail.com"
                      className="text-gray-700 hover:text-portfolio-blue text-sm sm:text-base break-words"
                    >
                      rohithgupthaui97@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    <a
                      href="tel:+13096126419"
                      className="text-gray-700 hover:text-portfolio-blue text-sm sm:text-base"
                    >
                      (309) 612-6419
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">Work Focus</h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  I specialize in developing Single Page Applications (SPA)
                  using React, Angular, and React-Native. My expertise includes
                  Redux for state management, GraphQL for efficient data
                  queries, and AWS services for cloud infrastructure.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-portfolio-blue"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Key Achievements</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                  <li>Developed full featured React applications with Redux</li>
                  <li>Implemented CI/CD pipelines using Jenkins and AWS</li>
                  <li>Built dynamic UI components with React</li>
                  <li>
                    Integrated GraphQL with Apollo Client for optimized data
                    flows
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
