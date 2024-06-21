import BoxContent from "@/components/elements/BoxContent";
import React from "react";
import CradSkeleton from "./CradSkeleton";

const Sekeleton = () => {
  return (
    <div>
      <BoxContent>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
          <CradSkeleton />
          <CradSkeleton />
          <CradSkeleton />
          <CradSkeleton />
          <CradSkeleton />
          <CradSkeleton />
          <CradSkeleton />
          <CradSkeleton />
        </div>
        <h1 className="text-lg md:text-2xl text-center md:py-6 py-2">
          Sekeleton
        </h1>
      </BoxContent>
    </div>
  );
};

export default Sekeleton;
