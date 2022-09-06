import React, { useContext, createContext } from "react";

export const StateContext = createContext();

export const LinkProvider = ({ children }) => {
  const [state, setState] = React.useState({});
  return (
    <StateContext.Provider value={[state, setState]}>
      {children}
    </StateContext.Provider>
  );
};
