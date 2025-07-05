"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { NextPage } from "next";

// Define TypeScript interfaces
interface SocialLink {
  icon: React.ReactNode;
  color: string;
  url: string;
}

interface FloatingTechBadge {
  text: string;
  position: string;
  color: string;
}

const DynamicParticles = dynamic(() => import("./Particles"), {
  ssr: false,
  loading: () => null,
});

const Hero: NextPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -25, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks: SocialLink[] = [
    { 
      icon: <Github size={22} />, 
      color: "from-gray-200 to-gray-400",
      url: "https://github.com/Roshanram123"
    },
    { 
      icon: <Linkedin size={22} />, 
      color: "from-blue-400 to-blue-600",
      url: "https://www.linkedin.com/in/roshan-ram-154238219"
    },
  ];

  const techStack: string[] = [
    "React",
    "Next.js",
    "Three.js",
    "Node",
    "TypeScript",
    "Framer Motion",
    "Tailwind",
  ];

  const floatingBadges: FloatingTechBadge[] = [
    {
      text: "React",
      position: "top-10 left-0",
      color: "bg-cyan-500/10 border-cyan-400/30 text-cyan-400",
    },
    {
      text: "UI/UX",
      position: "bottom-10 right-0",
      color: "bg-pink-500/10 border-pink-400/30 text-pink-400",
    },
    {
      text: "NextJS",
      position: "top-1/3 right-10",
      color: "bg-purple-500/10 border-purple-400/30 text-purple-400",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 -z-50">
        <Canvas camera={{ fov: 40, position: [0, 0, 2] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <DynamicParticles />
        </Canvas>
      </div>

      <div className="absolute inset-0 -z-30 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-10" />
      </div>

      <div className="container mx-auto px-4 py-24">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={heroRef}
        >
          <motion.div
            className="lg:w-1/2 text-center lg:text-left relative"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center mb-8 px-5 py-2.5 bg-gray-900/50 backdrop-blur-md rounded-full border border-purple-500/30 shadow-lg"
              initial={{ scale: 0.9, rotate: -5 }}
              animate={{
                scale: 1,
                rotate: 0,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(17, 24, 39, 0.7)",
              }}
            >
              <Sparkles className="text-purple-400 mr-2" size={15} />
              <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Building Cool Websites Since 2022
              </p>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block text-gray-100"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                Creating{" "}
              </motion.span>
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Awesome
              </motion.span>
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Web Experiences
              </motion.span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl mb-8 text-gray-300 font-light"
              variants={itemVariants}
            >
              <span className="text-purple-300">Roshan Ram</span> • Web Developer • UI Lover
            </motion.h2>

            <motion.p
              className="text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
              variants={itemVariants}
            >
              Hey there! I'm Roshan, and I love building websites that look great and work smoothly. I use tools like React and Next.js to make fun, interactive web experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 items-center"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="relative group flex items-center gap-3 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3.5 px-8 rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center">
                  Let's Create Something Cool
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.a>

              <motion.div
                className="flex gap-4 mt-4 sm:mt-0"
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`p-3 rounded-full bg-gradient-to-br ${social.color} text-gray-900 shadow-md hover:shadow-lg transition-all`}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-14 flex flex-wrap gap-3 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 text-sm text-gray-200 flex items-center gap-2 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5 + index * 0.1 },
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(124, 58, 237, 0.2)",
                    borderColor: "rgba(124, 58, 237, 0.8)",
                  }}
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/3 flex justify-center relative h-[500px]"
          >
            <div className="relative w-full h-full">
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                animate={{
                  borderColor: [
                    "rgba(139, 92, 246, 0.3)",
                    "rgba(236, 72, 153, 0.3)",
                    "rgba(6, 182, 212, 0.3)",
                    "rgba(139, 92, 246, 0.3)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  boxShadow: "0 0 40px rgba(139, 92, 246, 0.3)",
                }}
              />

              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                <img
                  src="/profile1.png" 
                  alt="Roshan Ram - Portfolio"
                  className="w-full h-full object-contain" 
                />
              </div>

              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${badge.position} ${badge.color} px-4 py-2 rounded-full border backdrop-blur-sm flex items-center gap-2 shadow-lg`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.7 + index * 0.2,
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;