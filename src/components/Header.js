import { motion } from "framer-motion";
import React from "react";

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const Header = () => {
  
  return (
    
    <>
     <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
    <header>

        <h1 className="title">🍦🍦🍦 Animate Your Way to Order <br/>Our Delicious Ice Cream 🍦🍦🍦</h1>
 
    </header>
    </>
  );
};

export default Header;
