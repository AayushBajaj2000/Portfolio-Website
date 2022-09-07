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
        const url = `https://myde3fi0.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent(
          query
        )}`;
        const result = await fetch(url)
          .then((res) => res.json())
          .catch((err) => console.log(err));
        const links = result.result[0];
        setState(links);

        fetched = true;
      }
    };

    fetcher();
  }, []);

  return { state };
};

export default useLinks;
