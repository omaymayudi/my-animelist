import React from "react";
import axios from "axios";
import BoxContent from "@/components/elements/BoxContent";

import ContentList from "@/components/layouts/ContentList";
import { getAnimeResponse } from "@/app/lib/api-libs";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURIComponent(keyword);

  const searchAnime = await getAnimeResponse({
    resource: "anime",
    query: `q=${decodeKeyword}`,
  });

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
                {`Search results for "${decodeKeyword}"`}
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
