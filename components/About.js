import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const technologies = [
  "ReactJs",
  "NextJs",
  "Node.js",
  "Javascript",
  "SQL",
  "Python",
  "C++",
  "AWS",
  "Prisma",
];

const About = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center flex-1 max-w-6xl"
      >
        <div>
          <h1 className="mb-10 text-5xl font-medium font-heading">About Me</h1>
        </div>
        <div className="flex">
          <div className="max-w-md">
            <p className="text-lg">
              I am a software developer with a passion for creating software
              that is intuitive and user-friendly. I am a self-taught developer
              with a background in mechanical engineering. I have a strong
              passion for learning new technologies and I am always looking to
              improve my skills. <br />
              <br />
              Here are some of the technologies I work with:
            </p>
            <div className="grid grid-cols-2 mt-3">
              {technologies.map((technology, index) => (
                <ul key={index} className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <li>{technology}</li>
                </ul>
              ))}
            </div>
          </div>

          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/headshot.png"
              alt="profile"
              layout="fill"
              objectFit="contain"
              className="ring-4"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
