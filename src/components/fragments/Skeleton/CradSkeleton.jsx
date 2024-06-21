import React from "react";

const CradSkeleton = () => {
  return (
    <div className="w-full h-72 bg-slate-200  rounded-lg justify-center">
      <div className="h-[70%] bg-slate-400 animate-pulse m-4 top-0"></div>
      <div className="h-[10%] bg-slate-400 animate-pulse m-4 bottom-0"></div>
    </div>
  );
};

export default CradSkeleton;
