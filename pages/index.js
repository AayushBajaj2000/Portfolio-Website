import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <section className="relative flex items-center justify-center min-h-screen text-white">
        <div className="flex flex-col items-start justify-center max-w-[1000px]">
          <div className="backdrop-blur-md bg-[rgba(255,255,255,0.08)] p-2 rounded-md">
            <h1 className="text-xl">Hi, my name is</h1>
          </div>
          <div className="my-3">
            <h2 className="text-6xl font-semibold font-heading">
              Aayush Bajaj.
            </h2>
          </div>
          <div className="my-3">
            <h3 className="font-bold text-7xl opacity-70">
              I am a full stack developer.
            </h3>
          </div>
          <div className="max-w-xl my-3 text-justify">
            <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
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
      <section className="relative flex items-center justify-center min-h-screen text-white">
        <div className="flex flex-col items-start justify-center max-w-[1000px]">
          <div className="backdrop-blur-md bg-[rgba(255,255,255,0.08)] p-2 rounded-md">
            <h1 className="text-xl">Hi, my name is</h1>
          </div>
          <div className="my-3">
            <h2 className="text-6xl font-semibold font-heading">
              Aayush Bajaj.
            </h2>
          </div>
          <div className="my-3">
            <h3 className="font-bold text-7xl opacity-70">
              I am a full stack developer.
            </h3>
          </div>
          <div className="max-w-xl my-3 text-justify">
            <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
            </p>
          </div>
        </div>
        <motion.div className="absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 50 50"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
