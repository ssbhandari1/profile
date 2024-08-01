import React from 'react'
import { motion } from 'framer-motion';
const Rotate = ({children}: any) => {
  return (
    <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
    className="flex justify-center items-center"
    style={{ width: 'fit-content', height: 'fit-content' }}
  >
    {children}
  </motion.div>
  )
}

export default Rotate