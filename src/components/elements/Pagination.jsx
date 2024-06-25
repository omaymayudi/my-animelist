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
  const rows = [];
  const total = parseInt(page) * 1;

  for (let i = parseInt(page) - 2; i <= parseInt(page) + 2; i++) {
    if (i > 0 && i <= totalPages) {
      rows.push(i);
    }
  }

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

      {rows.map((row, index) => (
        <div key={index} className="mx-2">
          <button
            key={index}
            className={`hover:cursor-pointer hover:text-yellow-500 hover:underline-offset-2 hover:underline ${
              total === row ? "text-yellow-500" : ""
            }`}
            onClick={() => {
              router.push(`/populer/${row}`);
            }}
          >
            {row}
          </button>
        </div>
      ))}
      <p className="text-gl mx-4">{` of   ${totalPages}`}</p>
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
