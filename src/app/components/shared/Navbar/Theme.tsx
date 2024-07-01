import React from "react";
import { useTheme } from "@/app/context/ThemeProvider";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return <div>Theme</div>;
};

export default Theme;
