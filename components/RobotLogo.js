import React from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.5 },
      },
    };
  },
};

const RobotLogo = () => {
  return (
    <motion.div
      whileHover={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 30,
        transition: {
          delay: 0.1,
          duration: 2,
          type: "spring",
          stiffness: 100,
        },
      }}
      className="flex items-center w-12 h-full mb-2 cursor-pointer"
    >
      <motion.svg
        width="70"
        height="70"
        viewBox="0 0 381 319"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="191"
          cy="27"
          r="22"
          stroke="white"
          strokeWidth="10"
          variants={draw}
          custom={1}
        />
        <motion.mask id="path-2-inside-1_3_33" fill="white">
          <motion.rect x="61" y="124" width="260" height="195" rx="17" />
        </motion.mask>
        <motion.rect
          x="61"
          y="124"
          width="260"
          height="195"
          rx="17"
          fill="white"
          stroke="white"
          strokeWidth="36"
          mask="url(#path-2-inside-1_3_33)"
          variants={draw}
          custom={1}
        />
        <motion.circle
          cx="136"
          cy="221"
          r="22"
          fill="#202023"
          stroke="#202023"
          strokeWidth="18"
          variants={draw}
          custom={1.5}
        />
        <motion.circle
          cx="246"
          cy="221"
          r="22"
          fill="#202023"
          stroke="#202023"
          strokeWidth="18"
          variants={draw}
          custom={1.5}
        />
        <motion.line
          x1="191"
          y1="54"
          x2="191"
          y2="123"
          stroke="white"
          strokeWidth="18"
          strokeLinecap="round"
          variants={draw}
          custom={1.5}
        />
        <motion.mask id="path-6-inside-2_3_33" fill="white">
          <motion.path d="M329 167H366C374.284 167 381 173.716 381 182V259C381 267.284 374.284 274 366 274H329V167Z" />
        </motion.mask>
        <motion.path
          d="M329 167H366C374.284 167 381 173.716 381 182V259C381 267.284 374.284 274 366 274H329V167Z"
          fill="white"
          stroke="white"
          strokeWidth="36"
          mask="url(#path-6-inside-2_3_33)"
          variants={draw}
          custom={2}
        />
        <motion.mask id="path-7-inside-3_3_33" fill="white">
          <motion.path d="M0 183C0 174.716 6.71573 168 15 168H53V275H15C6.71573 275 0 268.284 0 260V183Z" />
        </motion.mask>
        <motion.path
          d="M0 183C0 174.716 6.71573 168 15 168H53V275H15C6.71573 275 0 268.284 0 260V183Z"
          fill="white"
          stroke="white"
          strokeWidth="36"
          mask="url(#path-7-inside-3_3_33)"
          variants={draw}
          custom={2}
        />
      </motion.svg>
    </motion.div>
  );
};

export default RobotLogo;
