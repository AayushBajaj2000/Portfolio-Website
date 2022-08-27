import React from "react";
import * as ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen p-5 text-white">
      <div className="flex flex-col flex-1 items-start justify-center max-w-[1000px]">
        <div className="backdrop-blur-md bg-[rgba(255,255,255,0.08)] p-2 rounded-md">
          <h1 className="text-xl">Hi, my name is</h1>
        </div>
        <div className="my-3">
          <h2 className="text-6xl font-semibold font-heading">Aayush Bajaj.</h2>
        </div>
        <div className="my-3">
          <h3 className="text-6xl font-bold opacity-70">
            <ReactRotatingText
              items={[
                "I am a Full Stack Developer.",
                "I am a Mechatronics Engineer.",
              ]}
            />
          </h3>
        </div>
        <div className="max-w-xl my-3 text-justify">
          <p>
            I’m a mechatronics engineer specializing in building full stack
            applications. Currently, I’m focused on building a fundraising
            platform for
            <a
              href="https://efundrs.com/"
              className="ml-1 font-bold hover:underline"
            >
              Efundrs.
            </a>
          </p>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0"
        initial={{
          y: 0,
          opacity: 1,
        }}
        animate={{
          translateY: -10,
          transition: {
            delay: 0.5,
            duration: 0.5,
            type: "spring",
            yoyo: Infinity,
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
