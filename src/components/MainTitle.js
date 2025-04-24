import React from 'react'
import { motion } from "framer-motion";

export default function MainTilte({ title }) {
  return (
    <motion.h1
      className="text-3xl md:text-5xl font-semibold text-white mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      {title}
    </motion.h1>
  )
}
