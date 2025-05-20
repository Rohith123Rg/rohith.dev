import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, CheckCircle, TrendingUp, Star } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "State Farm Bloomington",
      location: "Bloomington, IL",
      position: "Sr Full stack Developer",
      period: "May 2023 – Present",
      responsibilities: [
        "Developed task management tool using React frontend and GraphQL",
        "Implemented complex data grids using Ag-Grid with features like sorting and filtering",
        "Adopted TDD approach using React for robust and error-free code",
        "Developed responsive UI components with React, enhancing user experience",
        "Integrated Ag-Grid with GraphQL for efficient data management",
      ],
      achievements: [
        "Reduced application load time by 40% through optimized GraphQL queries and Redux store architecture",
        "Led the successful implementation of TDD practices, resulting in 30% fewer production bugs",
        "Mentored 3 junior developers in React and GraphQL best practices",
      ],
      strengths: [
        "Redux Expert",
        "GraphQL",
        "TDD Champion",
        "React 18",
        "UI/UX Design",
      ],
      technologies: "HTML5, CSS, Typescript, React, Redux, React-Native",
    },
    {
      company: "Mastercard Worldwide",
      location: "Hyderabad",
      position: "Full-Stack Developer",
      period: "Aug 2019 – Aug 2022",
      responsibilities: [
        "Participated in Agile Development with daily SCRUM meetings",
        "Designed UI interfaces using HTML5, CSS3, AngularJS, and Bootstrap",
        "Built Single Page Applications using Angular 2/4 with PrimeNG and Bootstrap",
        "Used Git, TFS, and BitBucket for source control operations",
        "Designed automated build & release CI/CD process using GitLab, Jenkins",
      ],
      achievements: [
        "Spearheaded migration to Angular 8, improving performance by 35% and reducing bundle size",
        "Implemented CI/CD pipelines that reduced deployment time from 45 to 10 minutes",
        "Received recognition for developing reusable component library used across 5 projects",
      ],
      strengths: [
        "CI/CD Pipeline Expert",
        "Angular Architecture",
        "Team Collaboration",
        "Performance Optimization",
      ],
      technologies:
        "Angular 8, React, Redux, HTML5, CSS, JSON, Typescript, JavaScript, NodeJS, GIT, AWS CLI, Terraform",
    },
    {
      company: "Yes Bank",
      location: "India",
      position: "UI Developer",
      period: "Aug 2018 – July 2019",
      responsibilities: [
        "Used Angular custom pipes for manipulating REST API JSON data",
        "Created complex TypeScript components using Angular",
        "Implemented custom components with PrimeNG library",
        "Maintained existing systems for business and technology changes",
        "Mentored Software Engineers for skill development",
      ],
      achievements: [
        "Reduced page load time by 50% through optimization of Angular components and services",
        "Developed a component library that increased team development speed by 25%",
        "Recognized as 'Developer of the Quarter' for innovation in UI architecture",
      ],
      strengths: [
        "Angular Expert",
        "Team Collaboration",
        "Performance Tuning",
        "Mentorship",
      ],
      technologies:
        "Angular6, HTML5, CSS, Typescript, JavaScript, NodeJS, Eslint, JSON, REST, SASS",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto w-fit">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Track record of delivering high-performance web applications and
            leading technical innovations
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <Card className="glass-card border-l-4 border-l-portfolio-blue hover:shadow-xl transform-gpu transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Briefcase className="h-5 w-5 text-portfolio-blue" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-gray-600 ml-7">{exp.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right flex flex-col items-start md:items-end">
                      <span className="inline-flex items-center bg-portfolio-blue/10 text-portfolio-blue px-3 py-1 rounded-full text-sm font-medium">
                        {exp.position}
                      </span>
                      <p className="text-gray-500 mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-lg mb-3 text-gray-700 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-portfolio-blue" />
                        Key Responsibilities
                      </h4>
                      <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            className="text-sm"
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            viewport={{ once: true }}
                          >
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-lg mb-3 text-gray-700 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-portfolio-blue" />
                        Achievements
                      </h4>
                      <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="text-sm font-medium"
                            initial={{ opacity: 0, x: 5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            viewport={{ once: true }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-lg mb-3 text-gray-700 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-portfolio-blue" />
                      Core Strengths
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.strengths.map((strength, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="outline"
                            className="bg-white border-portfolio-blue text-portfolio-blue"
                          >
                            {strength}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-lg mb-3 text-gray-700 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-portfolio-blue" />
                      Technologies
                    </h4>
                    <p className="text-gray-700 text-sm bg-gray-50 p-2 rounded border border-gray-100 shadow-inner">
                      {exp.technologies}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
