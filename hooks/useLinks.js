import { useContext, useEffect } from "react";
import { StateContext } from "@data/LinkProvider";

const fetched = false;

const useLinks = () => {
  const [state, setState] = useContext(StateContext);

  // Fetch all the links from sanity just once
  useEffect(() => {
    const fetcher = async () => {
      if (!fetched) {
        const query = `*[_type == "sociallinks"] { email, github, linkedin, resume }`;
        const url = `${
          process.env.NEXT_PUBLIC_SANITY_URL + encodeURIComponent(query)
        }`;
        const result = await fetch(url);
        const data = await result.json();
        const links = data.result[0];
        setState(links);

        fetched = true;
      }
    };

    fetcher();
  }, []);

  return { state };
};

export default useLinks;
