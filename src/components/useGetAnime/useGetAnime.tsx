import { useInfiniteQuery } from 'react-query';
import { useRef } from 'react';
import axios from 'axios';

type Props = {
  endpoint: string;
};

const fetchAnime = async (page: number, endpoint: string) => {
  const res = await axios.get(
    `https://api.jikan.moe/v3/top/anime/${page}/${endpoint}`
  );
  return res.data.top;
};

const useGetAnime = ({ endpoint }: Props) => {
  const page = useRef(1);
  const { data, isFetching, isError, fetchNextPage } = useInfiniteQuery(
    endpoint,
    async ({ pageParam = page.current }) => {
      const res = await fetchAnime(pageParam, endpoint);
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

export default useGetAnime;
