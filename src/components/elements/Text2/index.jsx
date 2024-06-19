import React from "react";

const Text2 = ({ text }) => {
  return (
    <h3 className="text-sm truncate  md:text-lg font-bold hover:underline-offset-2 hover:underline hover:text-blue-600">
      {text}
    </h3>
  );
};

export default Text2;
