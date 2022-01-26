import { motion, useCycle } from "framer-motion";
import React from "react";

const loaderVariants = {
  animationOne: {
    x: [-200, 200],
    y: [90, -10],
    transition: {
      x: { yoyo: Infinity, duration: 2.0 },
      y: { yoyo: Infinity, duration: 1.0, ease: "easeOut" },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: [-40, -40],
    transition: {
      y: { yoyo: Infinity, duration: 1.0, ease: "easeOut" },
    },
  },
}

const loaderVariants2 = {
  animationOne2: {
    x: [300, -300],
    y: [0, 30],
    transition: {
      x: { yoyo: Infinity, duration: 2.0 },
      y: { yoyo: Infinity, duration: 1.0, ease: "easeOut" },
    },
  },
  animationTwo2: {
    y: [0, 40],
    x: [40, 40],
    transition: {
      y: { yoyo: Infinity, duration: 1.0, ease: "easeOut" },
    },
  },
}
export default function Loader() {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  const [animation2, cycleAnimation2] = useCycle("animationOne2", "animationTwo2");
  return (
    <div>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="loader"
      ></motion.div>

  
      <motion.div
        variants={loaderVariants2}
        animate={animation2}
        className="loader"
      ></motion.div>
       <br/> <br/>
      <div className="animate" onClick={() => cycleAnimation()}>TOGGLE</div>
      <br/>
      <div className="animate" onClick={() => cycleAnimation2()}>TOGGLE2</div>

    </div>
  );
}
