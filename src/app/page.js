import BoxContent from "@/components/elements/BoxContent";

import ContentList from "@/components/layouts/ContentList";
import Header from "@/components/layouts/ContentList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../lib/api-libs";

export default async function Page() {
  const topAnime = await getAnimeResponse({
    resource: "top/anime",
    query: "limit=8",
  });

  let recomendedAnime = await getNestedAnimeResponse({
    resource: "recommendations/anime",
    objectProp: "entry",
  });

  recomendedAnime = reproduce(recomendedAnime, 4);

  return (
    <>
      <BoxContent>
        <div className="justify-center">
          <div>
            <Header
              title={"Top Anime"}
              linkHref={"/populer/1"}
              linkTittle={"View all"}
            />
            <ContentList api={topAnime} />
          </div>
          <div>
            <Header title={"Recomendation Anime"} />
            <ContentList api={recomendedAnime} />
          </div>
        </div>
      </BoxContent>
    </>
  );
}
