import { useEffect, useState } from "react";
import Hero from "@components/Hero";
import LoadingAnimation from "@components/LoadingAnimation";
import Robot from "@components/Robot.js";

const Home = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <LoadingAnimation animation={animation} />
      <Hero />
      <Robot />
    </>
  );
};

export default Home;
