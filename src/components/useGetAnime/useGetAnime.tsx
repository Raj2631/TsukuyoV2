import { useInfiniteQuery } from "react-query";
import { useRef } from "react";
import axios from "axios";

type Props = {
  filter: string;
};

const fetchAnime = async (page: number, filter: string) => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/top/anime?page=${page}&filter=${filter}&type=tv`
  );
  return res.data;
};

const useGetAnime = ({ filter }: Props) => {
  const page = useRef(1);
  const { data, isFetching, isError, fetchNextPage } = useInfiniteQuery(
    filter,
    async ({ pageParam = page.current }) => {
      const res = await fetchAnime(pageParam, filter);
      page.current = page.current + 1;
      return res.data;
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

export default useGetAnime;
