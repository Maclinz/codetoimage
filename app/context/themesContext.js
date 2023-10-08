import React from "react";
import themes from "../utils/themes";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(0);

  const selectedTheme = themes[theme];

  return (
    <ThemeContext.Provider value={selectedTheme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
export const useThemeUpdate = () => React.useContext(ThemeUpdateContext);
