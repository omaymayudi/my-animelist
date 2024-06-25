import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="border rounded  border-slate-500 justify-center items-center w-36 flex flex-col p-2">
      <h2 className="font-bold text-sm text-center">{title}</h2>
      <p className="font-bold text-sm text-center">{value}</p>
    </div>
  );
};

export default Card;
