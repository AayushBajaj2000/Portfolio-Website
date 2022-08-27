import { useEffect, useState } from "react";
import Hero from "@components/Hero";
import LoadingAnimation from "@components/LoadingAnimation";
import Robot from "@components/Robot.js";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <>
      <Hero />
      <Robot />
    </>
  );
};

export default Home;
