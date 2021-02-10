import { useQuery } from 'react-query';
import axios from 'axios';

type Props = {
  page: number;
  query: string;
};

const useSearchAnime = ({ page, query }: Props) => {
  const { data, isFetching, isError } = useQuery('animeData', () =>
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&page=${page}`)
  );

  return {
    animeData: data?.data?.results,
    loading: isFetching,
    error: isError,
  };
};

export default useSearchAnime;
