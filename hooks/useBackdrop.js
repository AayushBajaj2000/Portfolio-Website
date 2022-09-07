import { useState, useEffect } from "react";

const useBackdrop = () => {
  const [backdrop, setBackdrop] = useState(false);

  useEffect(() => {
    const handleEvent = (e) => {
      if (window.scrollY > 30) {
        setBackdrop(true);
      } else {
        setBackdrop(false);
      }
    };

    window.addEventListener("scroll", handleEvent);
    return () => {
      window.removeEventListener("scroll", handleEvent);
    };
  }, [window.scrollY]);

  return backdrop;
};

export default useBackdrop;
