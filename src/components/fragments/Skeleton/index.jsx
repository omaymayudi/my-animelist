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
      </BoxContent>
    </div>
  );
};

export default Sekeleton;
