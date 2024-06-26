import axios from "axios";

import BoxContent from "@/components/elements/BoxContent";
import ContentList from "@/components/layouts/ContentList";
import React from "react";
import { Pagination } from "@/components/elements/Pagination";
import { getAnimeResponse } from "@/lib/api-libs";

const page = async ({ params }) => {
  const { page } = params;

  const topAnime = await getAnimeResponse({
    resource: "top/anime",
    query: `page=${page}`,
  });

  return (
    <div>
      <BoxContent>
        <div>
          <h1 className="text-lg md:text-2xl text-center md:py-6 py-2">
            Populer Anime
          </h1>
        </div>
        <div className="flex justify-center">
          <ContentList api={topAnime} />
        </div>

        <div className="py-4">
          <Pagination
            page={page}
            totalPages={topAnime.pagination?.last_visible_page}
          />
        </div>
      </BoxContent>
    </div>
  );
};

export default page;
