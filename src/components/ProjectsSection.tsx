
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Task Management Tool",
    description: "A comprehensive task management application featuring task prioritization, tagging, and collaboration capabilities.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "GraphQL", "Apollo Client", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "Implemented complex state management using Redux",
      "Built custom drag-and-drop functionality for task prioritization",
      "Integrated real-time collaboration features"
    ]
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard displaying complex data sets with filtering, sorting and custom views.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["React-Native", "D3.js", "TypeScript", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "Created responsive data visualizations using D3.js",
      "Implemented advanced filtering and sorting functionalities",
      "Optimized performance for large data sets"
    ]
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with shopping cart, payment processing, and inventory management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Angular", "Node.js", "MongoDB", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "Built secure payment processing with Stripe integration",
      "Implemented real-time inventory management",
      "Created responsive design optimized for mobile shopping"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-portfolio-lightBlue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title mx-auto w-fit">Personal Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 px-4">
            Explore some of my personal projects showcasing my technical skills and creative problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full"
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-xl font-bold text-gray-800 text-left">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-left">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue/20 hover:scale-105 transition-transform"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2 text-left">Key Features:</h4>
                      <ul className="text-sm space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-start text-left" 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <span className="text-portfolio-blue mr-2">•</span>
                            <span className="text-gray-600">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between mt-auto px-4 sm:px-6 pb-4">
                  <a 
                    href={project.liveUrl}
                    className="text-portfolio-blue hover:underline font-medium text-sm inline-flex items-center transition-all duration-200 hover:text-portfolio-blue/80"
                  >
                    View Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-gray-700 hover:text-portfolio-blue transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 mr-1" /> Source Code
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
