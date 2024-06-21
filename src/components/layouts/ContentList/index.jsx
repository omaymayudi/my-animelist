import React from "react";
import CardAnime from "@/components/fragments/CardAnime";

const ContentList = async ({ api }) => {
  return (
    <>
      <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 gap-2 md:gap-4  mb-4">
        {api.data?.map((item) => (
          <CardAnime
            key={item.mal_id}
            judul={item.title}
            image={item.images.webp.image_url}
            id={item.mal_id}
          />
        ))}
      </div>
    </>
  );
};

export default ContentList;
