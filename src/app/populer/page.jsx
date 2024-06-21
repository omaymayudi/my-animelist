"use client";
import axios from "axios";

import BoxContent from "@/components/elements/BoxContent";
import ContentList from "@/components/layouts/ContentList";
import React, { useEffect, useState } from "react";
import { Pagination } from "@/components/elements/Pagination";
import Sekeleton from "@/components/fragments/Skeleton";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchTopAnime = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const Animedata = response.data;
    setTopAnime(Animedata);
  };

  useEffect(() => {
    fetchTopAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
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
        <Pagination />
      </div>
    </BoxContent>
  );
};

export default Page;
