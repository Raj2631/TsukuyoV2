import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { useRef } from "react";

type Props = {
  query: string;
};

const fetchAnime = async (page: number, query: string) => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/anime?page=${page}&q=${query}`
  );
  console.log(res.data.data);
  return res.data.data;
};

const useSearchAnime = ({ query }: Props) => {
  const page = useRef(1);
  const { data, isFetching, isError, fetchNextPage } = useInfiniteQuery(
    query,
    async ({ pageParam = page.current }) => {
      const res = await fetchAnime(pageParam, query);
      page.current = page.current + 1;
      return res;
    },
    {
      getNextPageParam() {
        return page.current;
      },
    }
  );

  const animeData = data?.pages.flat();

  return {
    animeData,
    loading: isFetching,
    error: isError,
    fetchNextPage,
  };
};

export default useSearchAnime;
