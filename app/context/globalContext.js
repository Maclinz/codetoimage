import React from "react";

const GlobalContext = React.createContext();
const GlobalUpdateContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  // state
  const [padding, setPadding] = React.useState(0);

  return (
    <GlobalContext.Provider
      value={{
        padding,
      }}
    >
      <GlobalUpdateContext.Provider
        value={{
          setPadding,
        }}
      >
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => React.useContext(GlobalContext);
export const useGlobalUpdate = () => React.useContext(GlobalUpdateContext);
