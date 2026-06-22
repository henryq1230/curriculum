import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ children, direction }) => {
  // Simple slide transition based on navigation direction (1 for next, -1 for prev)
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.96,
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
        x: { type: "spring", stiffness: 260, damping: 26 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.3 }
      }}
      className="slides-glass-card rounded-3xl p-8 md:p-10 w-full min-h-[500px] md:h-[560px] flex flex-col justify-between overflow-hidden relative z-10"
    >
      {children}
    </motion.div>
  );
};

export default Slide;
