"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Code, Paintbrush, Cpu } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as LabelPrimitive from '@radix-ui/react-label';

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

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
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full -z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-600 rounded-full filter blur-[90px] opacity-20" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-500 rounded-full filter blur-[100px] opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-pink-500 rounded-full filter blur-[80px] opacity-20" />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-block mb-6 px-4 py-1.5 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full border border-purple-600/30"
              initial={{ scale: 0.9 }}
              animate={{ 
                scale: 1,
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4,
                rotate: { 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut" 
                }
              }}
            >
              <p className="text-sm font-medium text-purple-400 font-poppins flex items-center">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                Crafting digital experiences since 2022
              </p>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 font-space-grotesk leading-tight"
              variants={itemVariants}
            >
              <motion.span 
                className="inline-block"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                Hi, I'm{" "}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-transparent bg-clip-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Roshan Ram
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl mb-6 text-gray-300 font-poppins"
              variants={itemVariants}
            >
              Full-Stack Developer & UI Enthusiast
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 max-w-xl mb-8 font-poppins leading-relaxed"
              variants={itemVariants}
            >
              I design and build exceptional digital experiences with modern web technologies. 
              Focused on creating performant, accessible, and visually appealing applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-center"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="relative inline-flex items-center gap-2 group bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(145, 94, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  Get In Touch
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.a>

              <div className="flex gap-4 mt-2 sm:mt-0">
                {[
                  { icon: <Github size={20} />, color: "hover:text-purple-400" },
                  { icon: <Linkedin size={20} />, color: "hover:text-cyan-400" },
                  { icon: <Twitter size={20} />, color: "hover:text-pink-400" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`text-gray-400 ${social.color} transition-colors`}
                    whileHover={{ 
                      y: -5,
                      scale: 1.2
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Tech stack floating chips */}
            <motion.div 
              className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 text-sm text-gray-300 flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.5 + index * 0.1 }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(124, 58, 237, 0.2)",
                    borderColor: "rgba(124, 58, 237, 0.5)"
                  }}
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="lg:w-1/2 flex justify-center relative"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Floating Blur Background */}
              <motion.div
                className="absolute -z-30 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  x: [0, 20, -20, 0], 
                  y: [0, -20, 20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 12, 
                  ease: "easeInOut" 
                }}
              />

              {/* Profile Image Container */}
              <motion.div
                className="relative z-10"
                variants={floatingVariants}
                animate="float"
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-4 border-transparent"
                  animate={{
                    borderColor: [
                      "rgba(145, 94, 255, 0.3)",
                      "rgba(236, 72, 153, 0.3)",
                      "rgba(6, 182, 212, 0.3)",
                      "rgba(145, 94, 255, 0.3)"
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    boxShadow: "0 0 30px rgba(145, 94, 255, 0.2)"
                  }}
                />

                {/* Profile Image */}
                <motion.div
                  className="w-64 h-74 md:w-80 md:h-86 rounded-3xl overflow-hidden border-4 border-purple-600/30 shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/profile1.png"
                    alt="Roshan Ram"
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60" />
                </motion.div>
              </motion.div>

              {/* Floating Tech Icons */}
              {[
                { 
                  icon: <Code className="text-purple-400" size={20} />, 
                  text: "Clean Code", 
                  position: "top-8 -left-8",
                  delay: 0.6
                },
                { 
                  icon: <Paintbrush className="text-pink-400" size={20} />, 
                  text: "UI Design", 
                  position: "bottom-8 -right-8",
                  delay: 0.8
                },
                { 
                  icon: <Cpu className="text-cyan-400" size={20} />, 
                  text: "Optimized", 
                  position: "top-1/3 -right-10",
                  delay: 1.0
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`absolute ${item.position} bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl border border-gray-700 flex items-center gap-2`}
                  initial={{ y: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    transition: { delay: item.delay }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(17, 24, 39, 0.9)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                  <span className="text-sm font-medium text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}