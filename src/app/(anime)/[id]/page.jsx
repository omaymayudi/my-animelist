import React from "react";
import { getAnimeResponse } from "@/app/lib/api-libs";
import BoxContent from "@/components/elements/BoxContent";
import Title from "@/components/elements/Title";
import Image from "next/image";
import Card from "@/app/(anime)/[id]/Card";
import CardVideo from "./CardVideo";

const Page = async ({ params }) => {
  const { id } = params;
  const anime = await getAnimeResponse({
    resource: `anime/${id}`,
  });

  return (
    <>
      <BoxContent>
        <div className="flex justify-start">
          <Title title={`${anime.data.title} - ${anime.data.year}`} />
        </div>
        <div className="flex gap-2 py-2 md:py-6 overflow-x-auto">
          <Card value={anime.data.rank} title={"RANK"} />
          <Card value={anime.data.score} title={"SKOR"} />
          <Card value={anime.data.scored_by} title={"SKOR BY"} />
          <Card value={anime.data.members} title={"ANGOTA"} />
          <Card value={anime.data.episodes} title={"EPISODE"} />
        </div>

        <div className="grid col-span-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="w-full">
            <Image
              src={anime.data.images.jpg.image_url}
              height={250}
              width={250}
              alt={anime.data.images.webp.image_url}
              className="w-full rounded object-cover"
            />
          </div>
          <div className="w-full">
            <h2 className="md:text-2xl font-bold py-3 text-lg">Synopsis:</h2>
            <p className="md:text-lg text-sm">{anime.data.synopsis}</p>
          </div>
        </div>
        <CardVideo youtubeId={anime.data.trailer.youtube_id} />
      </BoxContent>
    </>
  );
};

export default Page;
