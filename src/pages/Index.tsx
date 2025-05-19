
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
// import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Veeramalla Rohith Guptha | Senior React Developer";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-x-hidden"
    >
      <Header />
      <Hero />
      <AboutSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
