import React from "react";
import Text2 from "@/components/elements/Text2";
import Image from "next/image";
import Link from "next/link";

const CardAnime = ({ judul, image, id }) => {
  return (
    <Link href={`/${id}`} className="w-full cursor-pointer hover:scale-[102%]">
      <div className="shadow-xl md:p-4 p-2 border-spacing-2 border-2 rounded-xl ">
        <Image
          src={image}
          alt=""
          width={600}
          height={600}
          className="object-cover w-full max-h-64"
          priority={true}
        />
        <div className="py-2">
          <Text2 text={judul} />
        </div>
      </div>
    </Link>
  );
};

export default CardAnime;
