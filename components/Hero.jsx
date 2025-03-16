"use client"
import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  const targetRef = useRef(null)
  const { scrollY } = useScroll()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const y = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = clientX / innerWidth - 0.5
      const y = clientY / innerHeight - 0.5

      mouseX.set(x * 20)
      mouseY.set(y * 20)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      id="home"
      ref={targetRef}
      className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/10 dark:bg-accent/5"
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 - 50 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
              y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: Math.random() * 10 + 20,
              ease: "easeInOut",
            }}
            style={{
              width: Math.random() * 300 + 100 + "px",
              height: Math.random() * 300 + 100 + "px",
            }}
          />
        ))}
      </div>

      {/* Animated wave background */}
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <motion.path
            d="M0,0 C150,90 350,0 500,100 C650,200 750,0 900,100 C1050,200 1150,90 1200,0 V120 H0 Z"
            className="fill-primary/30 dark:fill-primary/20 animate-wave"
          />
          <motion.path
            d="M0,0 C150,90 350,0 500,100 C650,200 750,0 900,100 C1050,200 1150,90 1200,0 V120 H0 Z"
            className="fill-accent/30 dark:fill-accent/20 animate-wave"
            style={{ animationDelay: "-5s" }}
          />
        </svg>
      </div>

      <motion.div className="max-w-5xl mx-auto text-center relative z-10" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6 inline-block"
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20"></div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <img 
              src="public\mine.jpg"
              alt="Shreyanshi Rathi"
              className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-xl object-cover relative z-10"
            />
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold to-accent opacity-0"
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gold-text"
        >
          Shreyanshi Rathi
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6"
        >
          Software Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Passionate about bridging technology and business to drive impactful solutions and efficient execution
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <motion.a
            href="https://github.com/rathishreya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "hsl(var(--accent))", color: "white" }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full text-gray-700 dark:text-gray-200 transition-colors shadow-lg hover:shadow-xl"
          >
            <GitHub size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/shreyanshi-rathi-1b413224b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5, backgroundColor: "hsl(var(--accent))", color: "white" }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full text-gray-700 dark:text-gray-200 transition-colors shadow-lg hover:shadow-xl"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:rathi1.shreyanshi@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "hsl(var(--accent))", color: "white" }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full text-gray-700 dark:text-gray-200 transition-colors shadow-lg hover:shadow-xl"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 premium-gradient text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

