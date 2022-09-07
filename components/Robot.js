import React from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Robot = () => {
  return (
    <motion.div
      whileHover={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 20,
        transition: {
          delay: 0.1,
          duration: 1,
          type: "spring",
        },
      }}
      className="flex items-center h-full mb-2 cursor-pointer w-9"
    >
      <motion.svg
        width="60"
        height="60"
        viewBox="0 0 284 317"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <mask id="path-1-inside-1_1_9" fill="white">
          <rect x="24" y="122" width="260" height="195" rx="17" />
        </mask>
        <motion.rect
          x="24"
          y="122"
          width="260"
          height="195"
          rx="17"
          stroke="white"
          strokeWidth="36"
          mask="url(#path-1-inside-1_1_9)"
          variants={draw}
        />
        <motion.circle
          cx="99"
          cy="219"
          r="22"
          stroke="white"
          strokeWidth="18"
          variants={draw}
          custom={1}
        />
        <motion.circle
          cx="27"
          cy="27"
          r="22"
          stroke="white"
          strokeWidth="10"
          variants={draw}
          custom={2}
        />
        <motion.circle
          cx="209"
          cy="219"
          r="22"
          stroke="white"
          strokeWidth="18"
          variants={draw}
          custom={2.5}
        />
        <motion.line
          x1="157"
          y1="28"
          x2="157"
          y2="119"
          stroke="white"
          strokeWidth="18"
          strokeLinecap="round"
          variants={draw}
          custom={3}
        />
        <motion.line
          x1="156"
          y1="28"
          x2="45"
          y2="28"
          stroke="white"
          strokeWidth="18"
          variants={draw}
          custom={4}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Robot;
