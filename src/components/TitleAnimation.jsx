import React from 'react';
import { motion } from 'framer-motion';

const TitleAnimation = () => {
  return (
    <motion.div
      className="title-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [-20, 0, 0, 20],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <h1 className="text-4xl font-bold text-gradient">Baby Predictor</h1>
    </motion.div>
  );
};

export default TitleAnimation;