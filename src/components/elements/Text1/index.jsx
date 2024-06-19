import React from "react";

const Text1 = ({ text, color }) => {
  return <h1 className={`text-2xl font-bold  ${color}`}>{text}</h1>;
};

export default Text1;
