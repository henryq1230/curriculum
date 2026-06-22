import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ children, direction }) => {
  // Simple slide transition based on navigation direction (1 for next, -1 for prev)
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }}
      className="w-full h-full flex flex-col justify-between"
    >
      {children}
    </motion.div>
  );
};

export default Slide;
