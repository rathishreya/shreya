"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 dark:bg-primary/10 rounded-bl-full -z-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 dark:bg-accent/10 rounded-tr-full -z-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gold-text">About Me</h2>
          <div className="w-20 h-1 premium-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Education</h3>
            <div className="space-y-6">
              <motion.div
                className="glass p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-medium teal-text">B.Tech. Computer Science and Engineering</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Maharaja Surajmal Institute Of Technology</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">CGPA: 8.93</p>
              </motion.div>
              <motion.div
                className="glass p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-medium teal-text">BS Data Science and AI</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Indian Institute Of Technology</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Work Experience</h3>
            <div className="space-y-6">
              <motion.div
                className="glass p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-medium teal-text">SWE Intern</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Airports Authority Of India</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">08/2024 - 09/2024</p>
                <ul className="mt-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Developed a full-stack web application using React, MongoDB, Express.js, and Tailwind CSS.</li>
                  <li>Implemented responsive UI/UX design for improved user experience.</li>
                  <li>Enhanced website performance and functionality through effective code optimization.</li>
                </ul>
              </motion.div>
              <motion.div
                className="glass p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-medium teal-text">Microsoft Student Ambassador - BETA</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Microsoft</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">05/2023 - Present</p>
                <ul className="mt-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>
                    Planned and executed hackathons, educational sessions, and networking events to engage over 500
                    students and increase participation by 30%.
                  </li>
                  <li>
                    Conducted webinars/Tech seminars to educate students and mastering Programming Languages, Databases
                    and more through MLSA portal.
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "2x GHC Scholar 2023/4",
                description: "One of the few female candidates selected to participate in an international conference",
              },
              {
                title: "Village Head - UBA MSIT",
                description:
                  "Led community development initiatives, coordinated projects, and managed teams, fostering local engagement and sustainable development.",
              },
              {
                title: "President -Placement Committee",
                description:
                  "TPO MSIT - effectively coordinating and bridging the gap between the college and companies, with a focus on facilitating on-campus placement drives.",
              },
              {
                title: "President - MSC MSIT",
                description:
                  "Led organizational activities, coordinated events, and managed a team, fostering student engagement and collaboration. Planned and executed successful fests, workshops, and hackathons.",
              },
              {
                title: "IPU LEET AIR - 14",
                description: "",
               
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-xl font-medium teal-text">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About

