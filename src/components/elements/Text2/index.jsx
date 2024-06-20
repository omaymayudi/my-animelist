import React from "react";

const Text2 = ({ text }) => {
  return (
    <h3 className="text-sm truncate text-white md:text-lg font-bold hover:underline-offset-2 hover:underline hover:text-yellow-500 transition-all">
      {text}
    </h3>
  );
};

export default Text2;
