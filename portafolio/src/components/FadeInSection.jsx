import React from "react";
import useOnScreen from "../hooks/useOnScreen";
import "../FadeInsection.css";

const FadeInSection = ({ children }) => {
  const [ref, isIntersecting] = useOnScreen();
  return (
    <div
      ref={ref}
      className={`fade-in-section ${isIntersecting ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
