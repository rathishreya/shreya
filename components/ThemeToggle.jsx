"use client"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none relative overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { type: "spring", stiffness: 300, damping: 20 },
          scale: { duration: 0.3 },
        }}
      >
        {theme === "light" ? (
          <Moon size={20} className="text-gray-800" />
        ) : (
          <Sun size={20} className="text-yellow-300" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle

