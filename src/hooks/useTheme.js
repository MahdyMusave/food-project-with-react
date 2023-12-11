import { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
import React from "react";

export const useTheme = () => {
  const newContext = useContext(ThemeContext);
  if (newContext === undefined) {
    throw new Error("useTheme muste be used Inside a ThemeProvider");
  }
  return newContext;
};
