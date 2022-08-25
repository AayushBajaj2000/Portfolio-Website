import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="">
        <motion.div
          initial={{ x: 300 }}
          animate={{
            x: 0,
            transition: {
              duration: 1,
              type: "spring",
            },
          }}
        >
          {children}
        </motion.div>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
