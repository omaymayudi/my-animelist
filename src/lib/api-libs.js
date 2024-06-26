import axios from "axios";

export const getAnimeResponse = async ({ resource, query }) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = response.data;
  return anime;
};

export const getNestedAnimeResponse = async ({ resource, objectProp }) => {
  const response = await getAnimeResponse({ resource });
  return response.data.flatMap((item) => item[objectProp]);
};

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };
  return response;
};
