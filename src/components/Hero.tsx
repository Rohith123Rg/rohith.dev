import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Rohith_Dev from "../../public/rohith_dev.jpg";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const handleScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 pb-8 md:pb-0 bg-gradient-to-br from-white to-portfolio-lightBlue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Content section - now second on mobile */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 px-4">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
                  VEERAMALLA{" "}
                  <motion.span
                    className="text-portfolio-blue inline-block"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    ROHITH GUPTHA
                  </motion.span>
                </h1>
              </motion.div>

              <motion.h2
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600"
              >
                Sr. Full Stack Developer
              </motion.h2>

              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0"
              >
                6+ years of experience developing modern web applications using
                React, Angular, and React-Native with expertise in AWS services
                and CI/CD pipelines.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 justify-center md:justify-start"
              >
                <Button
                  onClick={handleScroll}
                  className="bg-portfolio-blue hover:bg-portfolio-blue/90 text-white px-6 py-6 group transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Me
                  <motion.div
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
                {/* <Button 
                  variant="outline" 
                  className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10 px-6 py-6 transition-all duration-300 w-full sm:w-auto"
                >
                  View Resume
                </Button> */}
              </motion.div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="relative"
            >
              <motion.div
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-portfolio-blue/20 flex items-center justify-center overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(51, 195, 240, 0.3)",
                    "0 0 20px rgba(51, 195, 240, 0.6)",
                    "0 0 0 rgba(51, 195, 240, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-76 xl:h-76 rounded-full bg-portfolio-blue/40 flex items-center justify-center">
                  <img
                    src={Rohith_Dev}
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full bg-white shadow-xl flex items-center justify-center"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg"
              >
                <motion.span
                  className="text-xs sm:text-sm text-portfolio-blue font-medium"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  6+ Years Exp.
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
