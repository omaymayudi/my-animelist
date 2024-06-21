import Link from "next/link";
import BoxContent from "@/components/elements/BoxContent";
import Text2 from "@/components/elements/Text2";
import ContentList from "@/components/layouts/ContentList";
import Header from "@/components/layouts/ContentList/Header";
import axios from "axios";

export default async function Home() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = response.data;
  return (
    <>
      <BoxContent>
        <div className="justify-center">
          <div>
            <Header
              title={"Top Anime"}
              linkHref={"/populer"}
              linkTittle={"View all"}
            />
            <ContentList api={topAnime} />
          </div>
        </div>
      </BoxContent>
    </>
  );
}
