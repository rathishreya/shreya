"use client"
import { motion, useScroll } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Database, DockIcon as Docker } from "lucide-react"

const Skills = () => {
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "Java Basics"],
      color: "from-primary to-accent",
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Express", "MongoDB", "MySQL", "HTML", "CSS", "Tailwind CSS", "Postman"],
      color: "from-accent to-teal",
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB"],
      color: "from-teal to-gold",
    },
    {
      title: "Tools & Technologies",
      skills: ["Docker", "PowerBI", "Git", "GitHub", "VS Code", "Postman"],
      color: "from-gold to-primary",
    },
    {
      title: "Core",
      skills: [
        "Database Management Systems",
        "Project Management",
        "Object Oriented Programming",
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
      color: "from-primary to-accent",
    },
  ]

  const languages = [
    { name: "English", level: "Fluent", progress: 90 },
    { name: "Hindi", level: "Native", progress: 100 },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg
          className="absolute top-0 right-0 h-full w-1/2 translate-x-1/3 opacity-10 dark:opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#radialGradient)" />
        </svg>
      </div>

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gold-text">Skills & Expertise</h2>
          <div className="w-20 h-1 premium-gradient mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and areas of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass p-6 rounded-lg shadow-md relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-bl-full -z-10"></div>

              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white relative">
                <span
                  className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`}
                ></span>
                <span className="ml-2">{category.title}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    className={`px-3 py-1 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-medium shadow-sm`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    {skill === "Docker" && <Docker className="inline mr-1" size={14} />}
                    {skill === "PowerBI" && <Database className="inline mr-1" size={14} />}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{language.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{language.level}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${language.progress}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills

