import React from "react";
import Link from "next/link";
import Text2 from "@/components/elements/Text2";

const HeaderList = ({ title, linkTittle, linkHref }) => {
  return (
    <div className="flex justify-between md:py-4 py-2">
      <div className="w-1/2">
        <Text2 text={title} />
      </div>
      <div className="w-1/2 text-end">
        {linkTittle && linkHref ? (
          <Link href={linkHref}>
            <Text2 text={linkTittle} />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default HeaderList;
