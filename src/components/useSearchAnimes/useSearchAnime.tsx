import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { useRef } from 'react';

type Props = {
  query: string;
};

const fetchAnime = async (page: number, query: string) => {
  const res = await axios.get(
    `https://api.jikan.moe/v3/search/anime?q=${query}&page=${page}`
  );
  return res.data.results;
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
  const animeData = data?.pages.reduce((acc, current) => acc.concat(current));
  return {
    animeData,
    loading: isFetching,
    error: isError,
    fetchNextPage,
  };
};

export default useSearchAnime;
