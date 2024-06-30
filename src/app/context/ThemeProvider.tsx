"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  const hanldeThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    hanldeThemeChange();
  }, [mode]);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within the theme provider");
  }

  return context;
}

// const [mode, setMode] = useState("");

// const handleThemeChange = () => {
//   if (mode === "dark") {
//     setMode("light");
//     document.documentElement.classList.add("light");
//   } else {
//     setMode("dark");
//     document.documentElement.classList.add("dark");
//   }
// };

// // useEffect(() => {
// //   handleThemeChange();
// // }, [mode]);

// useEffect(() => {
//   handleThemeChange();
// }, [mode, handleThemeChange]);
// // [mode];
