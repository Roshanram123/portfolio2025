"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "eCommerce Themes (Single Vendor)",
    description: "Full theme store with shopping & payment integration.",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    role: "Full Stack Developer",
    image: "/ecommerce.png",
    link: "https://ecommercethemes.whydev.co.in/",
    hasLivePreview: true,
  },
  {
    title: "MyGlammCart (Admin Panel)",
    description: "Admin panel UI for product & order management with analytics dashboard.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    role: "Frontend Developer",
    image: "/myglamm.png",
    link: "",
    hasLivePreview: false,
  },
  {
    title: "IELTS Learning Platform",
    description: "Level-based learning platform with PDF & video lessons for IELTS preparation.",
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
    role: "Full Stack Developer",
    image: "/ielts1.png",
    link: "https://ieltscoaching.whytap.tech/",
    hasLivePreview: true,
  },
  {
    title: "Temple Donation",
    description: "Temple donation platform with payment integration and donor management.",
    stack: ["React.js", "Node.js", "Razorpay", "MongoDB"],
    role: "Full Stack Developer",
    image: "templedonation.png",
    link: "",
    hasLivePreview: false,
  }
];

const figmaProjects = [
  {
    title: "Arc360 Mobile – Job Search App",
    description: "Mobile app design for job search platform with personalized recommendations.",
    image: "/arc.jpeg",
    link: "https://www.figma.com/proto/xunf4u9DBfGpgfpwFUYWaM/Untitled",
  },
  {
    title: "ConfirmTkt Clone",
    description: "Redesign of the ConfirmTkt ticket booking platform with improved UX.",
    image: "/tkt.png",
    link: "https://www.figma.com/proto/r8iZrY9g5DaEFKLmOqx5Hk/Untitled",
  },
  {
    title: "Freelancing App",
    description: "Mobile app for connecting freelancers with clients and managing projects.",
    image: "/free.png",
    link: "https://www.figma.com/proto/a04UlOS2MTa4mndRSoWUzQ/zoho",
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk inline-block relative">
            Selected Works
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#915eff] to-[#00dfd8]"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(145, 94, 255, 0.3)"
              }}
              className="relative overflow-hidden rounded-2xl bg-[#1a1a2e] border border-[#2a2a42] group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#2d2b55] text-gray-300 mb-2">
                    {project.role}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 font-space-grotesk">{project.title}</h3>
                
                <p className="text-gray-400 mb-4 font-poppins text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="inline-block px-2 py-1 text-xs rounded bg-[#2d2b55] text-[#00dfd8] font-poppins"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.hasLivePreview && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#915eff] hover:text-[#b38aff] transition-colors font-medium text-sm"
                  >
                    Live Preview <ExternalLink size={14} />
                  </a>
                )}
              </div>
              
              {/* Glowing border effect */}
              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                className="absolute inset-0 border-2 border-[#915eff] rounded-2xl pointer-events-none"
                style={{
                  boxShadow: "0 0 15px rgba(145, 94, 255, 0.5)"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Figma Projects Section */}
        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center font-space-grotesk"
          >
            UI/UX Design Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {figmaProjects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="block bg-[#1a1a2e] rounded-xl overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="font-space-grotesk font-semibold text-lg mb-1 group-hover:text-[#915eff] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-400 font-poppins">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}