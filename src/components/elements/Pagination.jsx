"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const Pagination = ({ page, totalPages }) => {
  const router = useRouter();
  const handlePageNext = () => {
    // setPage((prev) => prev + 1);
    const url = parseInt(page) + 1;
    router.push(`/populer/${url}`);
    // if (page + 1 > totalPages) {
    //   setPage(totalPages);
    // }
  };
  const handlePagePrev = () => {
    // setPage((prev) => prev - 1);
    const url = parseInt(page) - 1;
    router.push(`/populer/${url}`);
  };
  return (
    <div className="flex justify-center items-center py-4 ">
      {page <= 1 ? null : (
        <button
          className="hover:cursor-pointer hover:text-yellow-500 hover:underline-offset-2 hover:underline"
          onClick={handlePagePrev}
        >
          Prev
        </button>
      )}

      <p className="text-gl mx-4">{`Page ${page} of ${totalPages}`}</p>
      {page >= totalPages ? null : (
        <button
          className={`hover:cursor-pointer hover:text-yellow-500 hover:underline-offset-2 hover:underline`}
          onClick={handlePageNext}
        >
          Next
        </button>
      )}
    </div>
  );
};
