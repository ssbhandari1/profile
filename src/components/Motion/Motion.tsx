"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Motion = ({ className, children }: any) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      });
      setHasAnimated(true);  // Set hasAnimated to true after the animation starts
    }
  }, [controls, inView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
