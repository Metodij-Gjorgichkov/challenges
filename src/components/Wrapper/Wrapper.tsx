import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextConstructor";

interface Props {
  children: React.ReactNode;
}
const Wrapper = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "black" : "white",
        minHeight: "100vh",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
