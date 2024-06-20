import React from "react";
import axios from "axios";
import BoxContent from "@/components/elements/BoxContent";

import ContentList from "@/components/layouts/ContentList";
import Header from "@/components/layouts/ContentList/Header";
const SearchPage = async ({ params }) => {
  const { keyword } = params;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );

  const searchAnime = response.data;

  return (
    <>
      {searchAnime.data.length === 0 ? (
        <h1 className="text-center text-3xl font-bold py-10 text-color-primary">
          No anime found
        </h1>
      ) : (
        <BoxContent>
          <div className="justify-center">
            <div>
              <h3 className="text-sm truncate  md:text-lg font-bold md:py-4 py-2 text-color-primary">
                {`Search results for "${keyword}"`}
              </h3>
              <ContentList api={searchAnime} />
            </div>
          </div>
        </BoxContent>
      )}
    </>
  );
};

export default SearchPage;
