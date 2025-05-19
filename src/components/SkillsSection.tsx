
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React", "Redux", "Angular", "React-Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Webpack"],
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "GraphQL", "REST API", "SQL", "MongoDB", "Oracle", "Amazon RDS", "Cassandra DB"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS EC2", "S3", "ELB", "CloudFormation", "CloudFront", "Lambda", "Jenkins", "CI/CD", "Docker"],
    },
    {
      title: "Testing & Tools",
      skills: ["Jest", "React Testing Library", "Enzyme", "Bit Bucket", "Insomania", "Postman", "JIRA", "Git", "SonarQube"],
    },
  ];  

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-portfolio-lightGray to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto w-fit">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 px-2 sm:px-4">
            Here's a comprehensive list of technologies and tools I've worked with throughout my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 border-b border-portfolio-blue pb-2 text-center sm:text-left">
                {category.title}
              </h3>
              <div className="flex flex-wrap mt-4 justify-center sm:justify-start">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    custom={skillIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#33C3F0", 
                      color: "white" 
                    }}
                    className="skill-tag hover:shadow-md transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
