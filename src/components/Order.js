import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const containerVariant = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, [setShowModal]);
  return (
    <motion.div
      className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Yum!!</h2>

      <motion.p variants={childVariant}>
        Enjoy your ice cream in a {pizza.base} with ... <motion.div variants={childVariant}>
        {pizza.toppings.map((topping) => (
          <span key={topping}>• {topping} </span>
        ))}
      </motion.div>
      </motion.p>
      
    </motion.div>
  );
};

export default Order;
