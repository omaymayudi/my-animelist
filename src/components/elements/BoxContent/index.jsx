import React from "react";

const BoxContent = ({ children }) => {
  return (
    <div className="container mx-auto ">
      <div className="max-w-screen-xl mx-2 md:mx-4">{children}</div>
    </div>
  );
};

export default BoxContent;
