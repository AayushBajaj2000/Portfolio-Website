import { useState, useEffect } from "react";
import Navbar from "@components/Navbar";
import Loader from "@components/Loader";
import useLoader from "@hooks/useLoader";
import { motion, AnimatePresence } from "framer-motion";

const ANIMATION_DELAY = 3;

const Layout = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const loader = useLoader(true);

  return (
    <>
      <AnimatePresence>
        {loader && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0, transition: { duration: 1 } }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setTimeout(() => {
                setShowContent(true);
              }, (ANIMATION_DELAY + 1) * 1000);
            }}
            className="flex  items-center justify-center min-h-screen min-w-full bg-[#18181c]"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Navbar />
          <main>{children}</main>
          <footer></footer>
        </motion.div>
      )}
    </>
  );
};

export default Layout;
