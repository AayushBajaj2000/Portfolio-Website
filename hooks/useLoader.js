import { useState, useEffect } from "react";

// Loader animation time in seconds
const ANIMATION_DELAY = 4;

const useLoader = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, ANIMATION_DELAY * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return loader;
};

export default useLoader;
