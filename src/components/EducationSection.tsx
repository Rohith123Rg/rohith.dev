
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const educations = [
    {
      degree: "Masters in Information Technology",
      institution: "Campbellsville University",
      year: "March 2024",
      location: "Campbellsville, KY",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Anurag Group of Institutions",
      year: "July 2017",
      location: "Hyderabad, India",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-gradient-to-b from-portfolio-lightGray to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="section-title mx-auto w-fit">Education</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 px-4">
            My academic journey and educational qualifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 50
              }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start">
                    <motion.div 
                      className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0"
                      whileHover={{ 
                        rotate: 10,
                        scale: 1.1,
                        backgroundColor: "rgba(51, 195, 240, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <edu.icon className="h-6 w-6 text-portfolio-blue" />
                    </motion.div>
                    <div className="text-center sm:text-left w-full">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-gray-600 mt-1">{edu.institution}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center mt-3 text-sm text-gray-500 justify-center sm:justify-start">
                        <div className="flex items-center justify-center sm:justify-start">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-portfolio-blue font-medium">{edu.year}</span>
                        </div>
                        <span className="hidden sm:block mx-2">•</span>
                        <div className="flex items-center mt-1 sm:mt-0 justify-center sm:justify-start">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 text-center px-4"
        >
          <p className="text-gray-600 italic text-sm sm:text-base">
            "Education is not the learning of facts, but the training of the mind to think." - Albert Einstein
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
