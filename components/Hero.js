import React from "react";
import * as ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen p-5 text-white">
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                        duration: 2,
                        delay: 0.5,
                        type: "spring",
                    },
                }}
                className="flex flex-col flex-1 items-start justify-center max-w-[1000px]"
            >
                <div className="backdrop-blur-md bg-[rgba(255,255,255,0.08)] p-2 rounded-md">
                    <h1 className="text-lg md:text-xl">Hi, my name is</h1>
                </div>
                <div className="my-3">
                    <h2 className="text-2xl font-semibold md:text-5xl font-heading">
                        Aayush Bajaj.
                    </h2>
                </div>
                <div className="my-3">
                    <h3 className="text-3xl font-bold md:text-6xl opacity-70">
                        <ReactRotatingText
                            items={[
                                "I am a Full Stack Developer.",
                                "I am a Mechatronics Engineer.",
                            ]}
                            deletingInterval={20}
                        />
                    </h3>
                </div>
                <div className="max-w-xl my-3 text-justify">
                    <p className="text-[14px] md:text-[16px]">
                        I&#39;m a mechatronics engineer specializing in building
                        full stack applications. Currently, working as a Test
                        Automation Developer at
                        <a
                            href="https://vention.io/"
                            className="ml-1 font-bold hover:underline"
                        >
                            Ford
                        </a>
                    </p>
                </div>
            </motion.div>
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
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
