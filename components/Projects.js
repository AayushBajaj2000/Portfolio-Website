import React from "react";
import Project from "@components/Project";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Projects = ({ projects }) => {
  const router = useRouter();
  const projectData = projects;

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center flex-1 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
          viewport={{ amount: 0.5, once: true }}
        >
          <h1 className="mb-10 text-3xl font-medium md:text-5xl font-heading">
            Projects
          </h1>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-around w-full p-4"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 max-w-[330px] p-3 hover:cursor-pointer"
              onClick={() => router.push(`/project/${project.id}`)}
            >
              <Project data={project} key={index} />
            </motion.div>
          ))}
        </motion.div>
        <p className="text-xl mt-[80px] text-center ">
          Interested in my Mechatronics / Robotics Projects?{" "}
          <Link href="/robotics">
            <motion.a className="hover:underline hover:cursor-pointer">
              Click Here
            </motion.a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
