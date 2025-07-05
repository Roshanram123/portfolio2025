"use client"

import { motion } from "framer-motion";
import { Code, Globe, Server, Figma, CreditCard, Smartphone } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Globe className="w-8 h-8 mb-4 text-[#00dfd8]" />,
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server className="w-8 h-8 mb-4 text-[#00dfd8]" />,
    items: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "UI/UX",
    icon: <Figma className="w-8 h-8 mb-4 text-[#00dfd8]" />,
    items: ["Figma", "Responsive Design"],
  },
  {
    title: "Payments",
    icon: <CreditCard className="w-8 h-8 mb-4 text-[#00dfd8]" />,
    items: ["Razorpay"],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-8 h-8 mb-4 text-[#00dfd8]" />,
    items: ["React Native"],
  },
  {
    title: "Other",
    icon: <Code className="w-8 h-8 mb-4 text-[#00dfd8]" />,
    items: ["Git", "RESTful APIs"],
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Skills() {
  return (
    <section id="skills\" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk inline-block relative">
            My Tech Arsenal
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#915eff] to-[#00dfd8]"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(145, 94, 255, 0.3)"
              }}
              className="bg-[#1a1a2e] rounded-xl p-6 flex flex-col items-center text-center border border-[#2a2a42] group transition-all duration-300"
            >
              <div className="rounded-full bg-[#2d2b55] p-4 mb-2 group-hover:bg-[#3d3b65] transition-all duration-300">
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 font-space-grotesk">{skill.title}</h3>
              
              <ul className="space-y-2 font-poppins">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}