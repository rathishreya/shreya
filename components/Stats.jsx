"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code, Briefcase, Award, Users } from "lucide-react"

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Stats data
  const stats = [
    {
      icon: <Code size={32} />,
      value: 10,
      label: "Projects Completed",
      color: "from-primary to-accent",
    },
    {
      icon: <Briefcase size={32} />,
      value: 2,
      label: "Years Experience",
      color: "from-accent to-teal",
    },
    {
      icon: <Award size={32} />,
      value: 5,
      label: "Achievements",
      color: "from-teal to-gold",
    },
    {
      icon: <Users size={32} />,
      value: 500,
      label: "Students Engaged",
      color: "from-gold to-primary",
    },
  ]

  // Counter animation
  const Counter = ({ value, isVisible }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let start = 0
      const end = Number.parseInt(value)
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        setCount(Math.min(Math.floor(start), end))

        if (start >= end) clearInterval(timer)
      }, 16)

      return () => clearInterval(timer)
    }, [isVisible, value])

    return <span>{count}</span>
  }

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/10 dark:bg-accent/5 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gold-text">My Journey in Numbers</h2>
          <div className="w-20 h-1 premium-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="glass rounded-xl shadow-lg p-8 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 opacity-50" />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}
                >
                  {stat.icon}
                </div>

                <h3 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">
                  <Counter value={stat.value} isVisible={isInView} />
                  {stat.label === "Years Experience" && "+"}
                  {stat.label === "Students Engaged" && "+"}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 opacity-50" />

              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 animate-shimmer"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

