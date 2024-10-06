import React from "react";

const FullscreenSection = ({ id, children, bgColor }) => {
  return (
    <div
      id={id}
      className={`min-h-screen flex items-center justify-center ${bgColor}`}
    >
      {children}
    </div>
  );
};

export default FullscreenSection;
