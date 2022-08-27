import { useState, useEffect } from "react";
import Navbar from "@components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: i != 3 ? 1.5 : 3,
          bounce: 0,
        },
        opacity: { delay, duration: 0.5 },
      },
    };
  },
};

const LoadingSvg = () => {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 1113 1113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="552.467"
        cy="265.467"
        r="41.4671"
        stroke="white"
        strokeWidth="10"
        variants={draw}
        custom={1}
      />
      <motion.mask id="path-2-inside-1_6_51" fill="white">
        <motion.rect
          x="333.981"
          y="438.404"
          width="447.461"
          height="335.596"
          rx="17"
        />
      </motion.mask>
      <motion.rect
        x="333.981"
        y="438.404"
        width="447.461"
        height="335.596"
        rx="17"
        fill="white"
        stroke="white"
        strokeWidth="36"
        mask="url(#path-2-inside-1_6_51)"
        variants={draw}
        custom={1.5}
      />
      <motion.circle
        cx="463.056"
        cy="605.342"
        r="44.3511"
        fill="#202023"
        stroke="#202023"
        strokeWidth="18"
        variants={draw}
        custom={1.5}
      />
      <motion.circle
        cx="652.367"
        cy="605.342"
        r="44.3511"
        fill="#202023"
        stroke="#202023"
        strokeWidth="18"
        variants={draw}
        custom={1.5}
      />
      <motion.line
        x1="551.223"
        y1="311.445"
        x2="551.223"
        y2="443.172"
        stroke="white"
        strokeWidth="18"
        strokeLinecap="round"
        variants={draw}
        custom={2}
      />
      <motion.mask id="path-6-inside-2_6_51" fill="white">
        <motion.path d="M795.21 512.407H869.702C877.986 512.407 884.702 519.123 884.702 527.407V681.555C884.702 689.839 877.986 696.555 869.702 696.555H795.21V512.407Z" />
      </motion.mask>
      <motion.path
        d="M795.21 512.407H869.702C877.986 512.407 884.702 519.123 884.702 527.407V681.555C884.702 689.839 877.986 696.555 869.702 696.555H795.21V512.407Z"
        fill="white"
        stroke="white"
        strokeWidth="36"
        mask="url(#path-6-inside-2_6_51)"
        variants={draw}
        custom={2.5}
      />
      <motion.mask id="path-7-inside-3_6_51" fill="white">
        <motion.path d="M229 529.129C229 520.844 235.716 514.129 244 514.129H320.213V698.276H244C235.716 698.276 229 691.56 229 683.276V529.129Z" />
      </motion.mask>
      <motion.path
        d="M229 529.129C229 520.844 235.716 514.129 244 514.129H320.213V698.276H244C235.716 698.276 229 691.56 229 683.276V529.129Z"
        fill="white"
        stroke="white"
        strokeWidth="36"
        mask="url(#path-7-inside-3_6_51)"
        variants={draw}
        custom={2.5}
      />
      <motion.circle
        cx="556.5"
        cy="556.5"
        r="536.5"
        stroke="white"
        strokeWidth="40"
        variants={draw}
        custom={3}
      />
    </motion.svg>
  );
};

const Layout = ({ children }) => {
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {animation ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0, transition: { duration: 1 } }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center justify-center min-h-screen min-w-full bg-[#18181c]"
        >
          <LoadingSvg />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        >
          <Navbar />
          <main className="">
            <motion.div
              initial={{ x: 300 }}
              animate={{
                x: 0,
                transition: {
                  duration: 2,
                  delay: 1,
                  type: "spring",
                },
              }}
            >
              {children}
            </motion.div>
          </main>
          <footer></footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Layout;
