"use client"
import { motion, useScroll } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
  }

  const projects = [
    {
      title: "Jewel Zone",
      description:
        "A full-stack e-commerce web application for jewelry products with user authentication, product catalog, shopping cart, and payment integration.",
      image: "public\jewel.jpeg",
      technologies: ["React", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
      details: [
        "Developed a full-stack web application using React, MongoDB, Express.js, and Tailwind CSS.",
        "Implemented responsive UI/UX design for improved user experience.",
        "Gained hands-on experience in modern web development practices and tools.",
      ],
      github: "https://github.com/rathishreya/Jewel-Zone",
      demo: "#",
    },
    {
      title: "Hospital Website",
      description:
        "A comprehensive hospital management system with patient records, appointment scheduling, and staff management features.",
        image: "public\hosp.png",

      technologies: ["React", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
      details: [
        "Designed and developed a full-stack hospital website using React, MongoDB, Express.js, and Tailwind CSS.",
        "Created intuitive user interfaces and responsive designs for improved patient and staff interactions.",
        "Implemented backend APIs for seamless data management and real-time updates.",
      ],
      github: "https://github.com/rathishreya/Hospital-Website",
      demo: "#",
      status: "ongoing",
    },
    {
      title: "Portfolio Website",
      description:
        "A visually stunning portfolio website with seamless transitions, animations, and interactive elements to showcase skills and projects.",
      image: "public\port.png",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
      details: [
        "Designed and developed a responsive portfolio website with modern UI/UX principles.",
        "Implemented advanced animations and transitions using Framer Motion.",
        "Created interactive components and parallax scrolling effects for an engaging user experience.",
      ],
      github: "https://github.com/rathishreya/shreya",
      demo: "#",
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad1)" />
          <path d="M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z" fill="url(#grad1)" />
        </svg>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gold-text">Projects</h2>
          <div className="w-20 h-1 premium-gradient mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 relative group perspective">
                <motion.div
                  whileHover={{
                    rotateY: index % 2 === 0 ? 5 : -5,
                    rotateX: 5,
                    z: 50,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                    {project.status && (
                      <div className="absolute top-4 right-4 bg-gold-gradient text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.status}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2">
                <motion.h3
                  className="text-2xl font-bold mb-3 text-gray-800 dark:text-white"
                  whileHover={{
                    color: "hsl(var(--accent))",
                    x: index % 2 === 0 ? 5 : -5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {project.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "hsl(var(--accent))",
                          color: "#ffffff",
                        }}
                        className="px-3 py-1 glass rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <GitHub size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 15px -3px rgba(124, 58, 237, 0.2), 0 4px 6px -2px rgba(124, 58, 237, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 premium-gradient text-white rounded-lg transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

