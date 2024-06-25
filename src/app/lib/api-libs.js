import axios from "axios";

export const getAnimeResponse = async ({ resource, query }) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = response.data;
  return anime;
};
