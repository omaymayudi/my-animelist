import React from "react";

const Title = ({ title }) => {
  return (
    <h1 className="text-center text-xl font-bold md:py-10 py-4 text-color-primary">
      {title}
    </h1>
  );
};

export default Title;
