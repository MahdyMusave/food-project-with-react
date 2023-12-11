import { createContext } from "react";

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  // console.log(children);
  return (
    <ThemeContext.Provider value={{ color: "blue" }}>
      {children}
    </ThemeContext.Provider>
  );
}
