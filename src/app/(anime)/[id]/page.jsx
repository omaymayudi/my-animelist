import React from "react";

const Page = ({ params }) => {
  const { id } = params;
  return <div>Page: {id}</div>;
};

export default Page;
