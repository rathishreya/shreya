"use client"
import { motion } from "framer-motion"

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="w-20 h-20 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: "hsl(var(--accent))",
            borderRightColor: "hsl(var(--accent))",
          }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-2xl font-bold premium-text">SR</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Preloader

