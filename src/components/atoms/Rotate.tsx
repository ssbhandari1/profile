import React from 'react'
import { motion } from 'framer-motion';
const Rotate = ({children}: any) => {
  return (
    <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
    className="text-3xl text-blue-500"
  >
   {children}
  </motion.div>
  )
}

export default Rotate