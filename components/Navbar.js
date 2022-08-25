import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

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

const Navbar = () => {
  return (
    <div className="h-[90px] w-full justify-around flex fixed p-3 items-center z-10">
      <div className="flex items-center h-full">
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
          className="flex items-center w-12 h-full mb-2 cursor-pointer"
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
              stroke-width="36"
              mask="url(#path-1-inside-1_1_9)"
              variants={draw}
            />
            <motion.circle
              cx="99"
              cy="219"
              r="22"
              stroke="white"
              stroke-width="18"
              variants={draw}
              custom={1}
            />
            <motion.circle
              cx="27"
              cy="27"
              r="22"
              stroke="white"
              stroke-width="10"
              variants={draw}
              custom={2}
            />
            <motion.circle
              cx="209"
              cy="219"
              r="22"
              stroke="white"
              stroke-width="18"
              variants={draw}
              custom={2.5}
            />
            <motion.line
              x1="157"
              y1="28"
              x2="157"
              y2="119"
              stroke="white"
              stroke-width="18"
              stroke-linecap="round"
              variants={draw}
              custom={3}
            />
            <motion.line
              x1="156"
              y1="28"
              x2="45"
              y2="28"
              stroke="white"
              stroke-width="18"
              variants={draw}
              custom={4}
            />
          </motion.svg>
        </motion.div>
        <p className="ml-10 text-3xl font-semibold font-heading hover:cursor-pointer">
          Aayush Bajaj
        </p>
      </div>
      <div className="flex justify-around w-[350px] items-center">
        <p className="text-xl hover:underline hover:cursor-pointer">Projects</p>
        <div className="flex items-center">
          <svg
            className="mr-2 "
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1.4em"
            width="1.4em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
          </svg>

          <p className="text-xl hover:underline hover:cursor-pointer">Source</p>
        </div>
        <Button className="h-full p-2 text-xl rounded-md outline-2 hover:bg-slate-300 hover:bg-opacity-30 outline-white outline">
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
